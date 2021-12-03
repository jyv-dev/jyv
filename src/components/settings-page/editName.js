import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function EditName(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ width: "100%", paddingRight: "13vw" }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid container direction="column">
        <Grid item>Name</Grid>
        {/* TODO: Make name dynamic */}
        <Grid item>Emily Green</Grid>
        <Grid item>Line</Grid>
        <Grid item>
          Your name appears on your Profile page. It is a required field.
        </Grid>
      </Grid>
      <Grid item>
        <JyvButton text="Edit" />
      </Grid>
    </Grid>
  )
}
