import React from "react"
import "../pages/mystyles.css"
import Img from "./image-city.js"

const Hero =({siteTitle}) => (

    <div  className="section">
      <div className="columns">
      <div className="column">
      <div className="container is-center">
        <figure className=""></figure>
        <h2 className="title">Seth Flagg</h2>
        <h2 className="subtitle">
          Front end web developer
        </h2><Img className="image-is-square"
        fluid="data.file.childImageSharp.fluid"
        alt=" city by the lake"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }} />
        <p>Making responsive, mobile-first webpages with modern web technologies so that you can make the best impression.</p>
        </div>
        </div>
      </div>
      </div>
   
      
)
export default Hero