import React from "react";

export const Header = () => {
  return (
    <>
      <div className="main_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="image/logo.png" alt="logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#play-video_1">
                        Ementa
                      </a>
                    </li>
                    {/* <li className="nav-item"> <a className="nav-link" href="chefs.html">Chefs</a> </li> <li className="nav-item"> <a className="nav-link" href="about.html">Sobre</a> </li> */}
                    {/* <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" > Blog </a> <div className="dropdown-menu" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href="blog.html">Blog</a> <a className="dropdown-item" href="single-blog.html" >Single blog</a > <a className="dropdown-item" href="elements.html">Elements</a> </div> </li> <li className="nav-item"> <a className="nav-link" href="contact.html">Contact</a> </li> */}
                  </ul>
                </div>
                {/* <div className="menu_btn"> <a href="#" className="btn_1 d-none d-sm-block">book a tabel</a> </div> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
