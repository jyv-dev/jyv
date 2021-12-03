import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function EditPhoto(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ width: "100%", paddingRight: "13vw" }}
    >
      <Grid container direction="column">
        <Grid item>Cover Photo</Grid>
        <Grid item>Your cover photo appears on your Profile page.</Grid>
        <Grid item>
          Recommended size: Rectangle, 2560 x 1440 pixels (16:9 ratio). File
          type: JPG, or PNG.
        </Grid>
      </Grid>
      <Grid item>Image</Grid>
      <Grid item>
        <JyvButton text="Edit" />
      </Grid>
    </Grid>
  )
}
