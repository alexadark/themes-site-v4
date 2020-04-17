/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { Global } from "@emotion/core"
import { globalStyles } from "../styles/GlobalStyles"
import { Grommet } from "grommet"
import grommetTheme from "../styles/grommet"

import "../styles/scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <Grommet theme={grommetTheme}>
      <Global styles={globalStyles} />
      <Header />
      <main sx={{ variant: "main" }}>{children}</main>
      <Footer />
    </Grommet>
  )
}

export default Layout
