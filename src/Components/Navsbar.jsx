import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Navsbar() {

  let navigate = useNavigate()
  
  function handleLogout(){
    localStorage.clear()
    let data= localStorage.getItem("username");

    if(!data){
      navigate("/")
    }

  }
  return (
    <div>
      {/* <!--Main Navigation--> */}
      <header>
        

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-gray fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Search form --> */}
            <form className="d-none d-md-flex input-group my-auto">
              <input
                autocomplete="off"
                type="search"
                placeholder='Search'
                style={{"min-width":"225px;",}}
              />
              {/* <span className="input-group-text border-0"><i className="bi bi-search"></i></span> */}

            </form>
            
             
             <button className="btn btn-danger" onClick={(e)=>handleLogout(e)}>Logout</button>

          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      {/* <!--Main Navigation--> */}

      {/* <!--Main layout-/ */}
      <main style={{"margin-top": "58px;"}}>
        <div className="container pt-4"></div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
}
