import { darken } from 'polished'

const dark = 'rgb(13, 33, 49)'
const dark2 = darken(0.04, 'rgb(13, 33, 49)')
const dark3 = darken(0.1, 'rgb(13, 33, 49)')
const light = '#eceff1'
const primary = 'rgb(137, 25, 248)'
const secondary = 'rgb(29, 192, 219)'
const yellow = 'rgb(254, 195, 56)'
const pink = 'rgb(230, 74, 145)'
const lightGrey = '#cfd8dc'
const grey = '#90a4ae'
const accentDark = 'rgb(230, 74, 145)'
const accentLight = 'rgb(230, 74, 145)'

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  accent: accentLight,
  background: light,
  bgInverse: dark,
  text: dark,
  textInverse: light,
  white: 'white',
  black: 'black',
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark,
  headerColor: 'white',
  headerColorHover: yellow,
  footerBg: dark,
  footerColor: light,
  infoBg: light,
  cardBg: 'white',
  archiveTitleBg: grey,
  searchResultsHeaderBg: grey,
  searchResultsHeaderColor: 'white',
  highlightColor: accentDark,
  searchColor: grey,
  slideSidebarBg: dark,
  focusOutline: grey,
  nlInputBg: light,
  nlInputColor: dark,
  nlButtonBg: primary,
  nlButtonBgHover: darken(0.1, primary),
  nlButtonColor: light,

  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      infoBg: dark3,
      archiveTitleBg: secondary,
      searchColor: primary,
      accent: accentDark,
      nlInputBg: primary,
      nlInputColor: 'white',
      nlButtonBg: secondary,
      nlButtonBgHover: darken(0.05, secondary),
    },
  },
}
