import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
   let navigate = useNavigate()

   function handleLogout(){
    localStorage.clear()
    navigate("/")
   }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* <!--Main Navigation--> */}
            <header>
              {/* <!-- Sidebar Start --> */}
              <nav
                id="sidebarMenu"
                class="collapse d-lg-block sidebar collapse bg-white"
              >
                <div class="position-sticky">
                  <div class="list-group list-group-flush mx-3 mt-4">
                    <Link to={"/home/landingpage"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                        
                      >
                        <i class="fas fa-chart-area fa-fw me-3"></i>
                        <span>Landing Page</span>
                      </a>
                    </Link>
                    <br />

                    <Link to={"/home/products"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fa-brands fa-product-hunt me-3"></i>
                        <span>Products</span>
                      </a>
                    </Link>
                    <br />
                    
                    <Link to={"/home/sales"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fas fa-building fa-fw me-3"></i>
                        <span>Sales</span>
                      </a>
                    </Link>
                    <br />

                    <Link to={"/home/salestable"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                      >
                        <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                        <span>Sales Table</span>
                      </a>
                    </Link>
                    <br />

                    <Link to={"/"}>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action py-2 ripple"
                      
                    >
                      <i class="fas fa-money-bill fa-fw me-3"></i>
                      <span>Logout</span>
                    </a>
                    </Link>
                    <br />
                  </div>
                </div>
              </nav>
              {/* <!-- Sidebar End--> */}

              {/* <!-- Navbar --> */}
              <nav
                id="main-navbar"
                class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
              >
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                  {/* <!-- Toggle button --> */}
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-bars"></i>
                  </button>

                  {/* <!-- Brand --> */}
                  <a class="navbar-brand" href="#">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                      height="25"
                      alt="MDB Logo"
                      loading="lazy"
                    />
                  </a>

                  {/* <!-- Right links --> */}
                  <ul class="navbar-nav ms-auto d-flex flex-row">
                    {/* <!-- Icon --> */}
                    <li class="nav-item me-3 me-lg-0">
                      <a class="nav-link" href="#">
                        <button className="btn btn-primary btn-sm" onClick={(e)=> handleLogout(e)}>
                          Logout
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Container wrapper --> */}
              </nav>
              {/* <!-- Navbar --> */}
            </header>
            {/* <!--Main Navigation--> */}

            {/* <!--Main layout--> */}
            <main style={{ marginTop: "58px" }}>
              <div class="container pt-4"></div>
            </main>
            {/* <!--Main layout--> */}
          </div>

          <div className="col-lg-9 App mt-5">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
