import React from "react"
import NavHeader from "../components/header"

import aboutimg from  '../assets/img/Water-Games.webp'



const Aboutsection = () =>  {

return(

<div>

 {/* ======= About Section ======= */}
 <section id="about" className="about section-bg">
        <div className="container" >
          <div className="section-title">
            <h2>About</h2>
            <h3>Find Out More <span>About Us</span></h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={aboutimg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" >
              <h3>Water for Better Life</h3>
              <p className="font-italic">
                We design We supply We install complete and sustainable solutions with excellence and passion
              </p>
              <ul className="aboutinfo">
                <li >
                  <i className="bx bx-droplet" />
                  <div>
                    <h5>Company you can trust</h5>
                    <p>For more than 40 years, our business has consistently been about supplying quality water products. We understand how essential water is to our everyday lives.</p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-store" />
                  <div>
                    <h5>We are a leading distributor and supplier</h5>
                    <p> If you have any questions, do contact us or visit us at any of our offices. We have offices in Metro Manila, Tarlac, Pampanga, Sta. Rosa - Tagaytay, Iloilo, and Cebu.</p>
                  </div>
                </li>
              </ul>
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>{/* End About Section */}

</div>

)


}

export default Aboutsection
