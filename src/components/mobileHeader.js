import * as React from "react"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import { Link } from "gatsby"

import MobileNavigation from "./Mobile/mobileNavigation"
import JyvIcon from "../images/jyv-icon.svg"
import TestImage from "../images/test-profile-image.jpeg"
import Rectangle from "../images/rectangle.png"
import Notificaton from "../images/notification-bell.png"

const Header = props => (
  <header
    style={{
      background: `black`,
      padding: "17px",
    }}
  >
    <Grid
      container
         direction="row"
        justifyContent="center"
      alignItems="center"
     
    >
      <MobileNavigation />
    </Grid>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
