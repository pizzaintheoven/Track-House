//Imports and such!
import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-discord";
import cors from "cors";
import { scopes } from "./utils/scope";
import jsonpath from "jsonpath";
import cookieParser from "express";
import { routerAuth } from "./routes/auth";
import path from "path";
import { routerReview } from "./routes/review";
import mongoose = require("mongoose");
const logger = require("logger").createLogger("system.log");

dotenv.config();

//Env Stuff Here
const PORT: string = process.env.PORT;
const ID: string = process.env.DISCORD_ID;
const SECRET: string = process.env.SECRET;
const CALLBACK: string = process.env.CALLBACK;
const URI: string = process.env.URI;
const SESSION_SECRET: string = process.env.SESSION_SECRET;
const MAX_COOKIE_AGE: string = process.env.COOKIE_MAX_AGE;
//
export const app = express();

//Database Stuff

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => {
    console.log("New Error Occurred", err);
  });

type UserData = {
  userID: string;
  username: string;
};

let userData: UserData = {
  userID: "",
  username: "",
};

//Passport Stuff Here / Auth

passport.serializeUser((user, done) => {
  done(null, user);
  const dUser = user;
  let DCuserID = jsonpath.query(user, "$.id");
  let DCusername = jsonpath.query(user, "$.username");
  userData.username = DCusername;
  userData.userID = DCuserID;
  let accessToken = jsonpath.query(user, "$.accessToken");
  let wantedGuild = jsonpath.query(user, "$.guilds[*].id");

  if (!wantedGuild.includes("708547549824548945")) {
    window.location.assign('http://localhost:3000/invaliduser')
  }
});



passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: ID,
      clientSecret: SECRET,
      callbackURL: CALLBACK,
      scope: scopes,
    },
    function (accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

//-----------App Using Declarations
//Authentication

app.use(cookieParser());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET, // This key is for testing only.
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: parseInt(MAX_COOKIE_AGE),
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes and Data Parsing
app.use(express.json());
app.use("/api", routerAuth);
app.use("/api", routerReview);
//--------------------------//

//Server Listening

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  logger.info(`Listening on port ${PORT}`);
});
