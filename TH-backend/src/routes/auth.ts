import * as express from 'express';
import {logger} from '../core';
import passport from 'passport';
import {Strategy} from 'passport-discord';
import {scopes} from '../utils/scope'
export const routerAuth = express.Router();

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send('not logged in :(');
}

console.log(scopes)
routerAuth.get('/login', passport.authenticate('discord', { scope: scopes})); // Auth Attempt
console.log(scopes)

routerAuth.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/fail' }), (req, res) => res.redirect('/profile') // auth success
);

routerAuth.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

routerAuth.get('/profile', checkAuth, (req, res) => {
    logger.debug(req.user);
    res.json(req.user);
});
