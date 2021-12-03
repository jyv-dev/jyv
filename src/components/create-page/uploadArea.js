import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function UploadArea(props) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ width: "16vw", marginRight: 10, marginLeft: 10 }}
    >
      <Grid item>
        <img src={UploadIcon} alt="upload icon" />
      </Grid>
      <Grid item>Select video to upload</Grid>
      <Grid item>Or drag and drop a file</Grid>
      <Grid item>
        MP4 or WebM 720x128 resolution or higher Up to 180 seconds Less than 1GB
      </Grid>
      <Grid item>
        <JyvButton text="Select File" variant="contained" />
      </Grid>
    </Grid>
  )
}
