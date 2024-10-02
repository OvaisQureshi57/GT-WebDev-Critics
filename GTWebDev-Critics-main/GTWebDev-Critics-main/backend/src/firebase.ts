import {
  getDatabase,
  goOffline,
  goOnline,
  set,
  remove,
  ref,
  get,
} from "@firebase/database";
let admin = require("firebase-admin");

const serviceAccount = require("../creds.json");

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gt-webdev-critics-default-rtdb.firebaseio.com",
});

const db: any = admin.database();

async function writeUserData(userInfo: any) {
  const user: string = userInfo["username"];
  const pw: string = userInfo["password"];
  const id: string = userInfo["id"];
  const reference = ref(db, "users/" + user);

  await set(reference, {
    username: user,
    password: pw,
    userId: id,
  });
}

async function checkDuplicates(callback: any) {
  const reference = db.ref("users");
  let usernames: string[] = [];

  try {
    const snapshot = await get(reference);

    for (const acc in snapshot.val()) {
      usernames.push(acc.toLowerCase());
    }
    callback(usernames, false);
  } catch (error) {
    callback(usernames, true);
  }
}

async function verifyAcc(callback: any, userInfo: any) {
  const reference = db.ref("users/");
  try {
    await reference
      .orderByChild("username")
      .equalTo(userInfo["username"])
      .once("value", (snapshot: any) => {
        if (snapshot.exists()) {
          const snapshotData = snapshot.val();
          callback(
            true,
            snapshotData[userInfo["username"]]["password"] ==
              userInfo["password"],
            false
          );
        } else {
          callback(false, false, false);
        }
      });
  } catch (error) {
    callback(false, false, true);
  }
}

module.exports = { writeUserData, checkDuplicates, verifyAcc };
