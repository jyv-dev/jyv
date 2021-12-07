import Grid from "@mui/material/Grid"
import * as React from "react"

export default function Header(props) {
  return (
    <Grid container direction="row" style={{ margin: "30px" }} justifyContent="space-between">
      <Grid item>{`${props.handle}'s Jyverse`}</Grid>
      <Grid container direction="row">
        <Grid item>
         All Videos
        </Grid>
        <Grid item>Collections</Grid>
      </Grid>
    </Grid>
  )
}
