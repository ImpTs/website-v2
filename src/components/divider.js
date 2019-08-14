import React from "react"
import "../pages/mystyles.css"

const Divider = (props) => (
    <div className="section">
        <div className="container is-danger">
        <h1 className="title is-danger">{props.title}</h1>
        </div>
    </div>
    )

    export default Divider