const { v4: uuidv4 } = require("uuid");
const firebase = require("./firebase");

const createUserHelper = async function (req: any, res: any) {
  if (res.statusCode == 200 && req.body["username"] && req.body["password"]) {
    let isUserGood: boolean = validUser(req.body["username"]);
    let isPassGood: boolean = validPass(req.body["password"]);
    checkInputs(isUserGood, isPassGood, res);
    if (isUserGood && isPassGood) {
      let tmpAcc: any = req.body;
      tmpAcc["id"] = uuidv4();
      try {
        await firebase.checkDuplicates(function (
          usernames: string[],
          failedToRead: boolean
        ) {
          if (failedToRead) {
            res
              .status(400)
              .send("Could not talk to firebase! Is the database down?");
          } else if (usernames.includes(tmpAcc["username"].toLowerCase())) {
            res.status(400).send("Username already exists!");
          } else {
            firebase.writeUserData(tmpAcc);
            res
              .status(201)
              .send(
                "Username and password are valid! Successfully added to database!"
              );
          }
        });
      } catch (error) {
        res.status(400).send("Bad Request");
      }
    }
  } else {
    res.status(400).send("Invalid input!");
  }
};

const validateUserHelper = async function (req: any, res: any) {
  if (res.statusCode == 200 && req.body["username"] && req.body["password"]) {
    let isUserGood: boolean = validUser(req.body["username"]);
    let isPassGood: boolean = validPass(req.body["password"]);
    checkInputs(isUserGood, isPassGood, res);
    if (isUserGood && isPassGood) {
      let tmpAcc: any = req.body;
      try {
        await firebase.verifyAcc(function (
          exists: boolean,
          correct: boolean,
          failedToRead: boolean
        ) {
          if (failedToRead) {
            res
              .status(400)
              .send("Could not talk to firebase! Is the database down?");
          } else if (!exists) {
            res.status(400).send("Username was not found! Check the spelling?");
          } else if (!correct) {
            res.status(400).send("Incorrect password!");
          } else {
            res.status(200).send("Welcome!");
          }
        },
        tmpAcc);
      } catch (error) {
        res.status(400).send("Bad request");
      }
    }
  } else {
    res.status(400).send("Invalid input!");
  }
};

function validUser(request: string) {
  let userRE: RegExp = /^\w{6,20}$/;
  return userRE.test(request);
}

function validPass(request: string) {
  let passRE: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){3})(?=.*[!#$&.%*])[a-zA-Z0-9!#$&.%*]{8,20}$/;
  return passRE.test(request);
}

function checkInputs(user: boolean, pass: boolean, res: any) {
  if (!user && !pass) {
    res.status(400).send("Username and password are invalid!");
  } else if (!user) {
    res.status(400).send("Username is invalid!");
  } else if (!pass) {
    res.status(400).send("Password is invalid!");
  }
}

module.exports = { createUserHelper, validateUserHelper };
