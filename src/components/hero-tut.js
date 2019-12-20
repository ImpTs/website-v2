
import React from "react"
import "../pages/mystyles.css"
import Img from "./image-city.js"

const Hero = ({ siteTitle }) => (


		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
						
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Hello from Bulma + Gatsby
							</h1>
							<p className="subtitle has-text-white is-size-3">
								A Bulma CSS + GatsbyJS Starter Kit
								<a
									className="button is-info is-inverted"
									href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
								>
									<span className="icon">
									
									</span>
									<span>Download</span>
								</a>
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>

);

export default Hero
