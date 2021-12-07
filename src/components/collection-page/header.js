import Grid from "@mui/material/Grid"
import * as React from "react"

export default function CollectionHeader(props) {
  return (
    <Grid container direction="row">
      <Grid item>
        <img src={BackArrow} alt="back-arrow" />
        Back
      </Grid>
      <Grid item>{props.name}</Grid>
    </Grid>
  )
}
