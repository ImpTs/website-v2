import React from "react"
import "../pages/mystyles.css"

const Hero =({siteTitle}) => (

    <div className="container">
    <div className="columns">
      <div className="column-is-half">
        <h2 className="title is-half">Seth Flaggggggggggggggggg</h2>
        <h2 className="subtitle">
          A front end web developer
        </h2>
        <p className="content">Cool content. Using Bulma!</p>
      </div>
      <div className="column-is-half">
      <figure className="image-is-square">
        <img alt="highrise building by lake in chicago" src="https://images.unsplash.com/photo-1488393660112-976f752342de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80"/>
        </figure>
        </div>
    </div>
  </div>
)
export default Hero