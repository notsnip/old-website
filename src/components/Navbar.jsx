// importing libraries and css
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Navbar() {
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        localStorage.setItem("theme", "dark");
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ) {
        localStorage.setItem("theme", "light");
      }
      themeChange(false);
    }
    setThemeAttribute();
  }, []);

  function setThemeAttribute() {
    var item = localStorage.getItem("theme");
    if (item == "light") {
      document.querySelector(".theme").setAttribute("data-set-theme", "dark");
    } else if (item == "dark") {
      document.querySelector(".theme").setAttribute("data-set-theme", "light");
    }
  }

  function redirect() {
    history.back();
  }

  return (
    <div id="navbar">
      <span
        id="mode"
        target=""
        data-act-class="ACTIVECLASS"
        data-tooltip-id="Theme"
        className="theme"
        onClick={() => {
          setThemeAttribute();
        }}
      >
        <iconify-icon
          icon="tabler:sun"
          height="1.4em"
          style={{ color: "var(--text-white)" }}
        ></iconify-icon>
      </span>

      <span id="mode" target="" className="switch-btn" data-tooltip-id="Home">
        <Link to={"/"}>
          <iconify-icon
            icon="mdi:home-outline"
            height="1.4em"
            style={{ color: "var(--text-white)" }}
          ></iconify-icon>
        </Link>
      </span>

      <ReactTooltip
        id="Theme"
        place="bottom"
        content="Theme"
        style={{ borderRadius: "10px", fontFamily: "'Work Sans', sans-serif" }}
      />

      <ReactTooltip
        id="Home"
        place="bottom"
        content="Home"
        style={{ borderRadius: "10px", fontFamily: "'Work Sans', sans-serif" }}
      />
    </div>
  );
}

export default Navbar;
