/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import detectDevice from "./utils/DetectDevice"

import DesktopHeader from "./desktopHeader"
import MobileHeader from "./mobileHeader"
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
  // TODO: should probably do view port instead because its not the right size
const device = detectDevice();
console.log(device);
  return (
    <>
    <>
    <MobileHeader siteTitle={data.site.siteMetadata?.title || `Title`} user={{name: 'Test' }} />
      <div
        style={{
          margin: `0`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
    {/* TODO: if is desktop the render desktop layout 
    <>
      <DesktopHeader siteTitle={data.site.siteMetadata?.title || `Title`} user={{name: 'Test' }} />
      <div
        style={{
          margin: `0`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
      </> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
