/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Menu from "./Menu"
import SlideSidebar from "./SlideSidebar"
import SiteBranding from "./SiteBranding"
import ColorSwitch from "../ColorSwitch"

import blueWaveTop from "../../assets/images/blue-wave-top.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wp {
        generalSettings {
          title
          url
        }
      }
    }
  `)

  const { title } = data.wp.generalSettings

  return (
    <header
      className="header"
      sx={{
        variant: `header`,
        bg: "transparent",
        backgroundImage: `url(${blueWaveTop})`,
        backgroundSize: "cover",
        // backgroundPositionY: -100,

        height: 256,
        "@media  (min-width:1700px)": {
          height: 350,
        },
      }}
    >
      <Container className="container">
        <Box
          sx={{
            width: [`100%`, `50%`],
            display: `flex`,
          }}
        >
          <SiteBranding title={title} />
        </Box>
        <Box
          sx={{
            width: [`100%`, `50%`],
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <Menu
            sx={{
              display: "flex",
              justifyContent: ["center", "flex-end"],
              width: ["100%", "auto"],
              ul: {
                display: "Flex",
                m: 0,
                li: {
                  listStyleType: "none",
                  mr: 16,
                  a: {
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: "xs",
                    "&:hover": {
                      color: "yellow",
                    },
                  },
                },
              },
            }}
          />
          {/* <SlideSidebar /> */}
        </Box>
      </Container>
      <Flex
        sx={{
          position: `absolute`,
          right: [`6%`, `6%`, `2%`],
          top: 18,
        }}
      >
        <ColorSwitch />
      </Flex>
    </header>
  )
}

export default Header
