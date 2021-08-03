import React from "react"
import { Link } from "gatsby"
import  '../assets/vendor/bootstrap/css/bootstrap.min.css'
import  '../assets/vendor/icofont/icofont.min.css'
import  '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import  '../assets/vendor/venobox/venobox.css'
import  '../assets/vendor/aos/aos.css'
import  '../assets/css/style.css'
import  '../assets/img/apple-touch-icon.png'

import logo from  '../assets/img/logo.png'

















const NavHeader = () =>  {

return(

    <div>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Amici Water Systems- Index</title>
    <meta content name="description" />
    <meta content name="keywords" />
    {/* Favicons */}
    {/*link href="assets/img/favicon.png" rel="icon">*/}
    <link href="" rel="apple-touch-icon" />
    {/* Google Fonts */}
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
    {/* Vendor CSS Files */}
 
   
    {/* ======= Top Bar ======= */}
    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
      <div className="container d-flex">
        <div className="contact-info mr-auto">
          <i className="icofont-envelope" /> <a href="mailto:info@amici.com.ph">info@amici.com.ph</a>
          <i className="icofont-phone" /> 09088909459
        </div>
        <div className="social-links">
          <a href="#" className="twitter"><i className="icofont-twitter" /></a>
          <a href="#" className="facebook"><i className="icofont-facebook" /></a>
          <a href="#" className="instagram"><i className="icofont-instagram" /></a>
          <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
        </div>
      </div>
    </div>
  

  {/* ======= Header ======= */}
  <header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">
    {/*logo */}
    <a href="index.html" className="logo mr-auto"><img src={logo} alt="" /></a>
    <nav className="nav-menu d-none d-lg-block">
      <ul>
        <li className="active"><a href="index.html">Home</a></li>
        <li><a href="#about">About</a></li>
        <li className="drop-down"><a href="#products">Products</a>
          <ul>
            <li><a href="#">Water Heaters</a></li>
            <li><a href="#">Water Softner</a></li>
            <li><a href="#">Water Purifier</a></li>
          </ul>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>{/* .nav-menu */}
  </div>
</header>{/* End Header */}




  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <script src="assets/js/main.js"></script>

</div>
    
    

  
)

}

export default NavHeader
