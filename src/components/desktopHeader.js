import * as React from "react"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import { Link } from "gatsby"

import JyvIcon from "../images/jyv-icon.svg"
import TestImage from "../images/test-profile-image.jpeg"
import Rectangle from "../images/rectangle.png"
import Notificaton from "../images/notification-bell.png"

const Header = props => (
  <header
    style={{
      background: `white`,
      padding: "17px",
    }}
  >
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <img
          src={JyvIcon}
          alt="jyv-con"
          style={{ width: "40px", height: "40px", marginBottom: 0 }}
        />
      </Grid>
      <Grid item>
        <Grid container direction="row" alignContent="center">
          <Grid item>
            {/* <Avatar
              alt={`${props.user.name}-profile-picture`}
              src={TestImage}
              sx={{ width: 40, height: 40 }}
              imgProps={{ objectFit: "cover" }}
            /> */}
            <img
              src={TestImage}
              style={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                marginBottom: 0,
                marginRight: 14,
              }}
            />
          </Grid>
          <Grid item style={{ marginRight: 14, paddingTop: 5 }}>
            {props.user.name}
          </Grid>
          <Grid item style={{paddingTop:8}}>
            <img
              src={Rectangle}
              style={{
                marginRight: 14,
                height: 20,
                marginBottom: 0,
              }}
            />
          </Grid>
          <Grid item style={{paddingTop: 5}}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                marginRight: 14,
              }}
            >
              Create
            </Link>
          </Grid>
          <Grid item style={{paddingTop: 8}}>
            <img
              src={Rectangle}
              style={{
                marginRight: 14,
                height: 20,
                marginBottom: 0,
              }}
            />
          </Grid>
          <Grid item style={{paddingTop: 7}}>
          <img
              src={Notificaton}
              style={{
                marginRight: 14,
                height: 25,
                marginBottom: 0,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
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
