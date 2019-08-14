import React from "react"
import "./mystyles.css"
import Layout from "../components/layout.js"
import Hero from "../components/hero.js"
import Tiles from "../components/skill-tiles.js"
const IndexPage = () => {
  return (
    <Layout>    
  <Hero/>
  <Tiles/>
    </Layout>

  )
}

export default IndexPage