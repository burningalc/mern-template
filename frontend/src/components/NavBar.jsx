import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/servers">
            A
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dns-entries">
            B
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
