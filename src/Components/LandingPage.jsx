import React from "react";

export default function LandingPage() {
  return (
    <div>
      <div className="container mt-5">
        <div class="card" style={{ width: "18rem" }}>
         
            <div className="row">
              
              <div className="col-lg-3">
                <div class="card" style={{width:"400px"}}>
                  <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Card image"
                  />
                  <div class="card-body">
                    <h4 class="card-title">shop Today</h4>
                    <p class="card-text">Some example text.</p>
                    <a href="#" class="btn btn-primary">
                      See Profile
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          
        </div>
      </div>
    </div>
  );
}
