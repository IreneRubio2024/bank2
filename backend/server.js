import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2/promise";


const app = express();


const PORT = 4000;

const pool = mysql.createPool({
  user: "root",
  password: "root",
  host: "localhost",
  database: "bank",
  port: 8889,
});

async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Generera engångslösenord
function generateOTP() {
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}
// Din kod här. skriv dina funktioner
async function getUsers(username, password) {
  const sql = "SELECT * FROM users WHERE username = ? and password = ?";
  const params = [username, password];
  return await query(sql, params);
}
async function getAccount(id, token) {
  const sql = "SELECT * FROM accounts WHERE id = ? and token = ?";
  const params = [id, token];
  return await query(sql, params);
}
// Din kod här. Skriv dina arrayer
const users = [];
let account = [];
let session = [];
// Din kod här. Skriv dina routes:
app.post("/createAccount", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const sql = "INSERT INTO users (username, password) VALUES (?,?)";
    const params = [username, password];
    const result = await query(sql, params);
    const user = await getUsers(username, password);
    const userId = user[0].id;
    const sql2 = "INSERT INTO accounts (id, balance, token) VALUES (?, ?, ?)";
    const params2 = [userId, 0, 0];
    const result2 = await query(sql2, params2);
    console.log("users", result, "account", result2);
    res.send("User Created");
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await getUsers(username, password);
    console.log("result", result);
    if (result.length > 0) {
      res.json(result);
    } else {
      res.status(401).send({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).send("Error login");
  }
});
app.listen(PORT, () => {
  console.log(`Bankens backend körs på http://localhost:${PORT}`);
});


