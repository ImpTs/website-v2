import React from "react"
import "../pages/mystyles.css"
const Tiles = () => (
    <div style = {{padding: '5 4rem'}} className="tile is-ancestor">
        <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">About Me</p>
            <p className="content">I get my computer to do things for me, professionally. I've been enjoying working on web development since 2017. When I'm not doing that, I also play board games, quit Twitter, and cook!</p>
           <a className="button is-link" href="mailto:smaxfieldflagg@gmail.com"> Get in touch 🚂 </a>
            
        </article>
      </div>
        <div className = "tile is-vertical is-4">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                    <p className="title">Javascript</p>
                    <p className="subtitle">Gatsby, React, Node.js, d3.js, and, of course, Vanilla 😉 (jQuery too...) </p>
                        </article>
                        <article className="tile is-child notification is-warning">
                        <p className="title">CSS</p>
                    <p className="subtitle">Bulma, Bootstrap, Sass </p>
                        </article>
                        <article className="tile is-child notification is-danger">
                        <p className="title">HTML</p>
                    <p className="subtitle">Markdown, HTML5</p>
                        </article>
                </div>
            </div>
        </div>
        <div className="tile is-parent is-4">
        <article className="title is-child notification is-success">
            <div className="content">
                <p className="title"> Tools </p>
                < div className="subtitle">
                <p>Git, Bash, Regex, Webpack, NPM, VSCode, JIRA, Drupal, Agile, Wordpress</p>

            </div>
            </div>
        </article>
        </div>
    </div>
    
)
export default Tiles