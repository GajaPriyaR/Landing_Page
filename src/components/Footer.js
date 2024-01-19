import React from "react";
import "./style.css";

export const Footer = () => {
  return (
    <div>
      <hr />
      <div class="container text-center my-5">
        <div class="row">
          <div class="col-md col-12">
            <p>
              {" "}
              <img
                src="https://picsxtra.com/images/2024/01/19/pngwing.comb3d4678d9c18f96d.png"
                alt=""
                width="50"
                height="40"
              />
              <span className="fw-bold ms-2 fs-4">GPR Foods</span>
            </p>
            <p className="fw-bold">© 2024 Priya Pvt. Ltd</p>
            <div className="">
              <button className="btn bg-dark text-white d-inline w-75 ">
                <img
                  className="footerImg ms-3"
                  src="https://picsxtra.com/images/2024/01/19/playstore.png"
                  alt=""
                />
                Google Play
              </button>
              <button className="btn bg-dark text-white d-inline w-75 my-3">
              <img
                  className="footerImg"
                  src="https://picsxtra.com/images/2024/01/19/apple-logo.png"
                  alt=""
                />
                App Store
              </button>
            
             
            </div>
          </div>
          <div class="col-md col-12">
            <p className="fw-bold">Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Team</p>
            <p></p>
          </div>
          <div class="col">
            <p className="fw-bold">Contact us</p>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div class="col">
            <p className="fw-bold">Legal</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
