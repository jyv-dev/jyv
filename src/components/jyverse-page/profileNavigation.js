import Grid from "@mui/material/Grid"
import * as React from "react"

export default function ProfileNavigation(props) {
  return (
    <Grid container direction="row" style={{ margin: "20px" }}>
      <Grid container direction="row">
        <Grid item>
          <img
            src={TestImage}
            style={{
              borderRadius: "50%",
              width: 150,
              height: 150,
              marginBottom: 0,
              marginRight: 14,
            }}
          />
        </Grid>
        <Grid item>{props.profileName}</Grid>
        <Grid item>Home</Grid>
        <Grid item>Videos</Grid>
        <Grid item>Playlists</Grid>
        <Grid item>About</Grid>
        <Grid item>Search</Grid>
      </Grid>
      <Grid item>Jyverse Access</Grid>
    </Grid>
  )
}
