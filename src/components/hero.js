import React from "react"
import "../pages/mystyles.css"
import Img from "./image-city.js"

const Hero =({siteTitle}) => (

    <div  className="hero is-full is-primary header-image">
        <figure className=""></figure>
        <h2 className="title">Seth Flagg</h2>
        <h2 className="subtitle">
          Front end web developer
        </h2>

        <Img className="image-is-square-is-background"
        fluid="data.file.childImageSharp.fluid"
        alt=" city by the lake"
        />
      
    </div>
      
)
export default Hero