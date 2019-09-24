import React from "react"
import "./mystyles.css"
import Layout from "../components/layout.js"
import Hero from "../components/hero.js"
import Tiles from "../components/skill-tiles.js"
import Divider from "../components/divider.js"
import Image from "../components/image-city.js"
const IndexPage = () => {
  return (
    <Layout>    
  <Hero/>
  <Divider title="Skills"/>
  <Tiles/>
    </Layout>

  )
}

export default IndexPage