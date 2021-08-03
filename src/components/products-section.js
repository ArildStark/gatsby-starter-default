import React from "react"
import { Link } from "gatsby"
import NavHeader from "../components/header"
import waterheaterimg from  '../assets/img/products/HPI-40.jpg'
import watersoftner from  '../assets/img/products/ao-wh-soft-350.jpg'
import waterpurifier from  '../assets/img/products/A1-water-purifier.jpg'




const ProductSection = () =>  {

    return(


<div>
<section id="products" className="products">
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
            <h3>Check our <span>Products</span></h3>
            <p>Feel free to browse and learn about our products and solutions</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" >
              <div className="icon-box">
                <img src={waterheaterimg} className="img-fluid" alt="" />
                <h4><a href>Water Heaters</a></h4>
                <p />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <img src={watersoftner} className="img-fluid" alt="" />
                <h4><a href>Water Softners</a></h4>
                <p />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" >
              <div className="icon-box">
                <img src={waterpurifier} className="img-fluid" alt="" />
                <h4><a href>Water Purifier</a></h4>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Services Section */}

    </div>

  
)

}

export default ProductSection
