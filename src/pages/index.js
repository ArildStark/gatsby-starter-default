import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NavHeader from "../components/header"
import Herosection from "../components/heroimg"
import Aboutsection from "../components/aboutsection"
import ProductSection from "../components/products-section"
import Homefaqsection from "../components/homefaqsection"
import Homecontactsection from "../components/homecontactsection"

import Layout from "../components/layout"
import Seo from "../components/seo"


const home  = () =>  {

return(

<html>

<NavHeader>
</NavHeader>
<Herosection>
</Herosection>
<Aboutsection></Aboutsection>
<ProductSection></ProductSection>
<Homefaqsection></Homefaqsection>
<Homecontactsection></Homecontactsection>









</html>

)

}

export default home
