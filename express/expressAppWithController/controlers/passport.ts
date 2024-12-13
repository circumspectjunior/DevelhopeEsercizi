import * as dotenv from "dotenv";
import passport from "passport";
import passportJWT from "passport-jwt";
import { db } from "./db";
dotenv.config();

type User = {
    id: number;
    username: string;
    password: string;
    token?: string;
}

passport.use(
    new passportJWT.Strategy(
      {
        secretOrKey: process.env.SECRET as string,
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