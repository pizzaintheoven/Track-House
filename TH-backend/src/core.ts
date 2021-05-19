//Imports and such!
import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import {Strategy} from 'passport-discord';
import {scopes} from './utils/scope'
import {routerAuth} from './routes/auth'
import {routerReview} from './routes/review'
import mongoose = require("mongoose");
export const logger = require('logger').createLogger('system.log');
dotenv.config();

//Env Stuff Here
const PORT: string = process.env.PORT;
const ID: string = process.env.DISCORD_ID;
const SECRET: string = process.env.SECRET;
const CALLBACK: string = process.env.CALLBACK;
const URI: string = process.env.URI

logger.setLevel(`${process.env.LEVEL}`);
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
  .catch(err => {console.log("New Error Occurred",err)});

//Passport Stuff Here / Auth
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});
console.log(scopes)
passport.use(new Strategy({
        clientID: ID,
        clientSecret: SECRET,
        callbackURL: CALLBACK,
        scope: scopes
    },
    function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        })
    }
))

//App Using Declarations

app.use(session({
    secret: 'p2r5u8x/A?D(G+KbPeShVmYq3t6v9y$B', // This key is for testing only.
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())
app.use('/api', routerAuth)
app.use('/api', routerReview)


//--------------------------//

//Server Listening 
// [::1] alias for localhost || 127.0.0.1
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
    logger.info(`Listening on port ${PORT}`);
})