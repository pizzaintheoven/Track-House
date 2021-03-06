import * as express from "express";
import passport from "passport";
import { Strategy } from "passport-discord";
import { scopes } from "../utils/scope";
export const routerAuth = express.Router();

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.send("not logged in :(");
}

console.log(scopes);
routerAuth.get("/login", passport.authenticate("discord", { scope: scopes })); // Auth Attempt
console.log(scopes);

routerAuth.get(
  "/callback",
  passport.authenticate("discord", { failureRedirect: "http://localhost:3000/home" }),
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard"), req.session.save;
  } // auth success
);

routerAuth.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

routerAuth.get("/getcookie", function (req, res) {
  res.json({ cookiesFound: req.cookies });
});

routerAuth.get("http://localhost:3000/dashboard", checkAuth, (req, res) => {
  res.send(req.user);
});
routerAuth.post('/setcookie/?username/:id', (req, res) => {
  console.log("Cookie Set")
  const id = res.cookie("userid", req.params.id, {maxAge: 90000000})
  const name = res.cookie("username", req.params.username)
  const cookie = `${id} \n  ${name} `
  res.json({message: cookie})
})