import React, { useState } from 'react'
import './navbar.css'

//Manga Lists
let mangaID: number = 1;
const dropDownMangas = [{
  title: "Example Manga 1",
  linkTo: `/${mangaID}`
}, 
{
  title: "Example Manga 2",
  linkTo: `/${mangaID}`
},
{
  title: "Example Anime 3",
  linkTo: `/${mangaID}`
}]

//Anime Lists
let animeID: number = 1;
const dropDownAnimes = [{
  title: "Example Anime 1",
  linkTo: `/${animeID}`
}, 
{
  title: "Example Anime 2",
  linkTo: `/${animeID}`
},
{
  title: "Example Anime 3",
  linkTo: `/${animeID}`
}]

//Different Nav Stuff
const tabs = [{
  title: "Home",
  linkTo: "/"
}, {
  title: "",
  linkTo: "/"
}, {
  title: "Dashboard",
  linkTo: "/dashboard"
}]
const loginURL = "http://localhost:4000/api/login"
function NavBar() {
  return (
        <div>
          <nav className="navbar has-background-primary-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img src="" alt="Track House" width="112" height="28"></img>
              </a>
              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          <div id="navbar" className="navbar-menu">
            <div className="navbar-start">
              {tabs.map(tab => {
                    return(
                      <a className="navbar-item" href={tab.linkTo}>{tab.title}</a>
                    )
              })}
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Anime's
                </a>

                <div className="navbar-dropdown">
                  {dropDownAnimes.map(link => { 
                    return(
                      <a className="navbar-item" href={link.linkTo}>{link.title}</a>
                    )
                  })}
                </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Anime's
                </a>

                <div className="navbar-dropdown">
                  {dropDownMangas.map(link => { 
                    return(
                      <a className="navbar-item" href={link.linkTo}>{link.title}</a>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href={loginURL}>
                    Log in
                  </a>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar