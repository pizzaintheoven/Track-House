import React, { useState } from 'react'
import './navbar.css'
let animeID: number = 0
const dropDowns = [{
  title: "Example Anime",
  linkTo: `/${animeID}`
}, 
{
  title: "Example AnAime",
  linkTo: `/${animeID}`
},
{
  title: "Example AnAimA",
  linkTo: `/${animeID}`
}]
const tabs = [{
  title: "Home",
  linkTo: "/home"
}, {
  title: "Login",
  linkTo: "/login"
}, {
  title: "Dashboard",
  linkTo: "/dashboard"
}]
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

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              {tabs.map(tab => {
                    return(
                      <a className="navbar-item" href={tab.linkTo}>{tab.title}</a>
                    )
              })}
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  {dropDowns.map(link => { 
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
              <a className="button is-light">
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