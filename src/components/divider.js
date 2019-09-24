import React from "react"
import "../pages/mystyles.css"

const Divider = (props) => (
    <div className="section">
        <div className="container">
            <div className="level-item has-text-centered is-dark">
        <h1 className="title ">{props.title}</h1>
        </div>
        </div>
    </div>
    )

    export default Divider