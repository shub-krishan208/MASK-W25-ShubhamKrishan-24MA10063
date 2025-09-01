import Database from "better-sqlite3";
const db = new Database("db.sqlite", { verbose: console.log });
const createTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT ,
        password TEXT NOT NULL
    );
`);
createTable.run();

function viewUser() {
  const stmt = db.prepare("SELECT * FROM users");
  return stmt.all();
}

function findUser(user) {
  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  return stmt.get(user);
}

function addUser(user, hash) {
  const stmt = db.prepare(
    `INSERT INTO users (username, password) VALUES (?,?)`
  );
  const info = stmt.run(user, hash);
  console.log(`User "${user}" added with id "${info.lastInsertRowid}"`);
}

export { findUser, addUser, viewUser };
