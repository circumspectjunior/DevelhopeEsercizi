import dotenv from "dotenv";
import passport from "passport";
import passportJWT from "passport-jwt";
import pgPromise from "pg-promise";

dotenv.config();
const db = pgPromise()("postgres://postgres:PrinceAlex10@localhost:5432/demoDB");


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
}

createUserDB();

type User = {
    id: number;
    username: string;
    password: string;
    token?: string;
}

passport.use(
    new passportJWT.Strategy(
      {
        secretOrKey: process.env.SECRET_KEY as string,
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      },
      async (payload, done) => {
        try {
          const { id } = payload;
          const user: User | null = await db.oneOrNone(`SELECT * FROM users WHERE id=$1`, id);
  
          if (user) {
            done(null, user);
          } else {
            done(new Error("User not found"), undefined);
          }
        } catch (error) {
          done(error, undefined);
        }
      }
    )
  );