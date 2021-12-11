import Grid from "@mui/material/Grid"
import * as React from "react"
import TestImage from "../../images/test-profile-image.jpeg"
import TestBanner from "../../images/banner.jpeg"

export default function ProfileNavigation(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ margin: "20px", backgroundImage: `url(${TestBanner})` }}
    >
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <img
            src={TestImage}
            style={{
              borderRadius: "50%",
              width: 50,
              height: 50,
              marginBottom: 0,
              marginRight: 20,
            }}
          />
        </Grid>
        <Grid item style={{ marginRight: 45, fontWeight: 700 }}>
          {props.profileName}
        </Grid>
        <Grid item style={{ marginRight: 45 }}>
          Home
        </Grid>
        <Grid item style={{ marginRight: 45 }}>
          Videos
        </Grid>
        <Grid item style={{ marginRight: 45 }}>
          Playlists
        </Grid>
        <Grid item style={{ marginRight: 45 }}>
          About
        </Grid>
        <Grid item>Search</Grid>
      </Grid>
      <Grid item>Jyverse Access</Grid>
    </Grid>
  )
}
