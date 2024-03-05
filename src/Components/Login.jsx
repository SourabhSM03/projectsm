import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  let navigate = useNavigate();

  function handelSubmit() {
    if (user === "sourabh" && pass === "0000") {
      localStorage.setItem("username", user);
      localStorage.setItem("password", pass);
      navigate("/home/landingpage");
    } else {
      alert("Invalid Creditial");
    }
  }

  return (
    <div>
      <section class="vh-100">
        <div class="container-fluid h-custom mt-1">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3 display-4">
                    <h1>Login Here</h1>
                  </p>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0"></p>
                </div>
                {/* 
          <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    onChange={(e) => setUser(e.target.value)}
                    class="form-control form-control-lg"
                    placeholder="Enter a User Name"
                  />
                  <label class="form-label" for="form3Example3">
                    <h6> Enter User Name</h6>
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-3">
                  <input
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label class="form-label" for="form3Example4">
                    <h6>Password</h6>
                  </label>
                </div>

                <div class="text-center text-lg-start m-8 pt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg "
                    style={{
                      paddingleft: "2.5rem;",
                      paddingright: "2.5rem;",
                      marginLeft: "185px",
                    }}
                    onClick={(e) => handelSubmit(e.target.value)}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
