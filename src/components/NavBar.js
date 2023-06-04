import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div>
      <div class="w-100">
        <nav class="navbar navbar-expand-lg navbar-container ">
          <div class="container">
            <Link class="navbar-brand" href="/">
              <img
                className="navbar-logo"
                src="/../assets/GLIA logo-02.png"
              ></img>
            </Link>
            <button
              class="navbar-toggler float-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar"
            >
              <ul class="navbar-nav ">
                {/* <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Home
                  </Link>
                </li> */}
                {/* <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Services
                  </Link>{" "}
                </li> */}

                <li class="nav-item">
                  <select className="Rectangle-4824">
                    <option>English</option>
                    <option>Arabic</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
