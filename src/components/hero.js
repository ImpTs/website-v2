import React from "react"
import "../pages/mystyles.css"

const Hero =({siteTitle}) => (

    <div className="hero is-full is-primary header-image">
        <figure className=""></figure>
        <h2 className="title">Seth Flagg</h2>
        <h2 className="subtitle">
          A front end web developer
        </h2>


      <figure className="image-is-square-is-background">
        <img alt="highrise building by lake in chicago" src="https://images.unsplash.com/photo-1488393660112-976f752342de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80"/>
        </figure>

    </div>

)
export default Hero