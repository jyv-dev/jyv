import Grid from "@mui/material/Grid"
import * as React from "react"

import JyvButton from "../jyvButton"

export default function EditUsername(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ width: "100%", paddingRight: "13vw" }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid container direction="column">
        <Grid item>Username & URL</Grid>
        {/* TODO: Make name dynamic */}
        <Grid container direction="row">
          <Grid item>Username</Grid>
          <Grid item>emily.green</Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>URL</Grid>
          <Grid item>https://jyv.app/@emily.green</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <JyvButton text="Edit" />
      </Grid>
    </Grid>
  )
}
