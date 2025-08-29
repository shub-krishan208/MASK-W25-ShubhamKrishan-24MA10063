import crypto from "crypto";
const SECRET_KEY = "my-super-secret-key-that-is-very-long";
async function hp(password) {
  return new Promise((resolve, reject) => {
    // gen random salt
    const salt = crypto.randomBytes(16).toString("hex");
    // hash password using salt
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      // Return the salt and hash
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
}
async function compare(password, storedHash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = storedHash.split(":");
    // hash incoming password with stored salt
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      //compare new hash with stored
      resolve(key === derivedKey.toString("hex"));
    });
  });
}

export { hp, compare, SECRET_KEY };
