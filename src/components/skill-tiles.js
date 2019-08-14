import React from "react"
import "../pages/mystyles.css"
const Tiles = () => (
    <div className="tile is-ancestor">
        <div className = "tile is-vertical is-8">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-warning">
                    <p className="title">Javascript</p>
                    <p className="subtitle">Gatsby, React, Node.js, d3.js, and, of course, Vanilla 😉 </p>
                        </article>
                        <article className="tile is-child notification is-primary">
                        <p className="title">CSS</p>
                    <p className="subtitle">Bulma, Bootstrap, Sass </p>
                        </article>
                </div>
            </div>
        </div>
        <div className="tile is-parent">
        <article className="title is-child notification is-success">
            <div className="content">
                <p className="title"> About Me </p>
            </div>
        </article>
        </div>
    </div>
)
export default Tiles