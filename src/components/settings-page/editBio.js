import Grid from "@mui/material/Grid"
import * as React from "react"

import JyvButton from "../jyvButton"

export default function EditBio(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ width: "100%", paddingRight: "13vw" }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid container direction="column">
        <Grid item>Bio</Grid>
        {/* TODO: Make dynamic */}
        <Grid item>Producer, musician, general creative📍 LA</Grid>
        <Grid item>Line</Grid>
        <Grid item>
        Your bio appears on your Profile. Max 200 characters 
        </Grid>
      </Grid>
      <Grid item>
        <JyvButton text="Edit" />
      </Grid>
    </Grid>
  )
}