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
        <Grid item>Photo</Grid>
        <Grid item>
          Your photo appears on your Profile page and with your videos across
          Jyv
        </Grid>
        <Grid item>
          Recommended size: Square, at least 1000 pixels per side. File type:
          JPG, PNG, or GIF.
        </Grid>
      </Grid>
      <Grid item>Image</Grid>
      <Grid item>
        <JyvButton text="Edit" />
      </Grid>
    </Grid>
  )
}
