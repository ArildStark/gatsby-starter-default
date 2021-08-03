import React from "react"
import NavHeader from "../components/header"



const  Homefaqsection = () =>  {

return(

<div>

<section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <h3>Frequently Asked <span>Questions</span></h3>
            <p />
          </div>
          <ul className="faq-list">
            <li>
              <a data-toggle="collapse" className href="#faq1">How are membrane-type pressure tanks different from conventional pressure tanks? <i className="icofont-simple-up" /></a>
              <div id="faq1" className="collapse show" data-parent=".faq-list">
                <p>
                  Diaphragm or membrane type pressure tanks differ from conventional pressure tanks in that they utilize membranes to physically separate water from air inside the tank. Pressure is stored in the water tank due to the air volume "pushing" at the water volume.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq2" className="collapsed">Why is my water meter continuously moving even though all our faucets and fixtures are closed already? <i className="icofont-simple-up" /></a>
              <div id="faq2" className="collapse" data-parent=".faq-list">
                <p>
                  Why is my water meter continuously moving even though all our faucets and fixtures are closed already? If your water meter is registering flow even when all fixtures are closed, it can be due to leaks in the piping system, unauthorized taps or backflow of water to the mains.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq3" className="collapsed">How do I size pumps and filters for water purifiers<i className="icofont-simple-up" /></a>
              <div id="faq3" className="collapse" data-parent=".faq-list">
                <p>
                  Sizing of pumps and filters for swimming pools is dependent on the size of the swimming pool, i.e. volume of water, and the expected usage of the swimming pool.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq4" className="collapsed">How do I size pumps and filters for swimming pools?<i className="icofont-simple-up" /></a>
              <div id="faq4" className="collapse" data-parent=".faq-list">
                <p>
                  Sizing of pumps and filters for swimming pools is dependent on the size of the swimming pool, i.e. volume of water, and the expected usage of the swimming pool.
                </p>
              </div>
            </li>
            <li>
              <a data-toggle="collapse" href="#faq5" className="collapsed">How do I clean water?<i className="icofont-simple-up" /></a>
              <div id="faq5" className="collapse" data-parent=".faq-list">
                <p>
                  Sizing of pumps and filters for swimming pools is dependent on the size of the swimming pool, i.e. volume of water, and the expected usage of the swimming pool.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>{/* End Frequently Asked Questions Section */}

</div>






)

}

export default Homefaqsection
