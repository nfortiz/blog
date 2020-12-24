import Typography from "typography"
import github from "typography-theme-github"

github.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h3>a":{
      color: `inherit`
    },
    "a:hover": {
      color: `#4078c0`,
    }
  }
}

delete github.googleFonts

const typography = new Typography(github)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
