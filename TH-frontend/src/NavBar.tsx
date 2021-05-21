import React, { useState } from "react";
import "./styles.css";

//Manga Lists
let mangaID: number = 1;
const dropDownMangas = [
  {
    title: "Example Manga 1",
    linkTo: `/${mangaID}`,
  },
  {
    title: "Example Manga 2",
    linkTo: `/${mangaID}`,
  },
  {
    title: "Example Anime 3",
    linkTo: `/${mangaID}`,
  },
];

//Anime Lists
let animeID: number = 1;
const dropDownAnimes = [
  {
    title: "Example Anime 1",
    linkTo: `/${animeID}`,
  },
  {
    title: "Example Anime 2",
    linkTo: `/${animeID}`,
  },
  {
    title: "Example Anime 3",
    linkTo: `/${animeID}`,
  },
];

//Different Nav Stuff
const tabs = [
  {
    title: "Home",
    linkTo: "/",
  },
  {
    title: "Dashboard",
    linkTo: "/dashboard",
  },
];
const loginURL = "http://localhost:4000/api/login";
function NavBar() {
  return (
    <div>
      <nav
        className="navbar has-background-link-dark "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item has-text-white-ter" href="#">
            <img src="assets/placeholder.png" alt="Track House" width="112" height="28"></img>
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" className="navbar-menu ">
          <div className="navbar-start">
            {tabs.map((tab) => {
              return (
                <a className="navbar-item has-text-white-ter" href={tab.linkTo}>
                  {tab.title}
                </a>
              );
            })}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-white-ter">Anime's</a>

              <div className="navbar-dropdown">
                {dropDownAnimes.map((link) => {
                  return (
                    <a className="navbar-item has-text-white-ter" href={link.linkTo}>
                      {link.title}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-white-ter">Manga's</a>

              <div className="navbar-dropdown">
                {dropDownMangas.map((link) => {
                  return (
                    <a className="navbar-item has-text-black-bis" href={link.linkTo}>
                      {link.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="navbar-end has-background-link-dark">
            <div className="navbar-item has-background-link-dark">
              <div className="buttons">
                <a className="button is-primary has-text-black-bis" href={loginURL}>
                  Log In
                </a>
                <a className="button is-primary has-text-black-bis" href="http://localhost:4000/api/logout">
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
