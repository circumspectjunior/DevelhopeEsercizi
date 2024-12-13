import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "./db";

dotenv.config();
const app = express();

app.use(express.json());


const createUserDB = async () => {

    await db.none(`
        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        );
    `);

    await db.none(`
        INSERT INTO users (username, password) VALUES ('Sam', 'Sam123');
    `);

    const usersS = await db.many(`
        SELECT * FROM users;
        `);

        console.log("users", usersS)
}

createUserDB();

const login = async (request: Request, response: Response) => {
    try {
      console.log("body", request);
      const { username, password } = request.body;
  
      const user = await db.oneOrNone(
        `SELECT * FROM users WHERE username=$1`,
        username
      );
  
      if (user && user.password === password) {
        const payload = {
          id: user.id,
          username: user.username
        };
        const token = jwt.sign(payload, process.env.SECRET as string);
  
        console.log("Token", token);
        await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
  
        response.status(200).json({
          id: user.id,
          token,
        });
      } else {
        response.status(400).send("User not found");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Internal server error");
    }
  };
  
  const signup = async (request: Request, response: Response) => {
    try {
      const { username, password } = request.body;
  
      const checkUser = await db.oneOrNone(
        `SELECT * FROM users WHERE username=$1`,
        username
      );

      if (checkUser) {
        response.status(400).send("User already exist,  login");
      } else {
        const newUser = await db.one(
          `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
          [username, password]
        );
  
        response.status(201).json({ id: newUser.id, message: "user created" });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Internal server error");
    }
  };

  export {
  login,
  signup
};
  

