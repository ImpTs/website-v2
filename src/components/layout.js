/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
   
        <main>{children}</main>
        <footer class= "footer">
          © {new Date().getFullYear()} 
          <p className="is-pulled-right">Built with
          {` `}
          
          <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://reactjs.org/">React</a>, <a href="https://bulma.io/">Bulma</a> and Coffee ☕ 
          </p>
        </footer>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
