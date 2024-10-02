require("dotenv").config();
const express = require("express");
const app = express();
const PORT: number = 3001;
const SOCKET_PORT = 3002;
const filterhelper = require("./filterHelper");
const userHelper = require("./userHelper");
const socketServer = require('socket.io')(SOCKET_PORT, {
  cors: {
    origin: [`http://localHost:${PORT}`],
  }
});

//run on every call to server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//start application on port: PORT
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// runs the callback everytime a client connects to the socketServer creating the bi directional websocket connection
socketServer.on("connection", (socket: any) => {
  socket.emit("recieveMessage", "Welcome to Yelp Chat")


  // Function 1: event listener for sending messages
  socket.on("sendMessage", (name: any, room: any, message: any) => {
    //message: String, room: number
    if (room) {
      socket.broadcast.to(room).emit("recieveMessage", `${name}: message`); //broadcast message to all sockets mapped to ${room}
    } else {
      socket.broadcast.emit("recieveMessage", `${name}: message`);
    }
  })

  // Function 2: event listener for joining a room
  socket.on("joinRoom", (name: any, room: any) => {
    if (room) {
      socket.join(room); //maps a socket to a user defined room
      socket.broadcast.to(room).emit("recieveMessage", `${name} has joined room ${room}`);
    }
  })

  socket.on("disconnect", (room: any, message: any) => {
    console.log('Client has left the chat');
    if (room) {
      socket.broadcast.to(room).emit("recieveMessage", "A user has left the room");
      socket.leave(room);
    } else {
      socketServer.emit("recieveMessage", "A user has left the chat");
    }

  })
})

/* postFilter
 * frontEnd: will make a request to localHost/postFilter
 *   need to specify request body
 *  {
 *    cuisineType: {cuisine type}.
 *    distance: {distance}.
 *    deliveryMode: {deliveryMode}.
 *    price: {price} 
 *  }
 * price: 1 = $, 2 = $$, 3 = $$$, 4 = $$$$
 * attributes = restaurants_takeout, restaurants_delivery
 *
 */
app.post("/api/filters/postFilter", (req: any, res: any) => {
  filterhelper.postFilterHelper(req, res);
});

app.put("/api/filters/updateFilter", (req: any, res: any) => {
  filterhelper.updateFilterHelper(req, res);
});

app.delete("/api/filters/deleteFilter", (req: any, res: any) => {
  filterhelper.deleteFilterHelper(req, res);
});

app.post("/api/users/createUser", (req: any, res: any) => {
  userHelper.createUserHelper(req, res);
});

app.get("/api/users/validateUser", (req: any, res: any) => {
  userHelper.validateUserHelper(req, res);
});
