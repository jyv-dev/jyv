import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function UploadArea() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{
        width: "23vw",
        background: "#F0F0F0",
        height: 600,
      }}
    >
      <Grid item>
        <img
          src={UploadIcon}
          style={{ width: 40, marginTop: 90, marginBottom: 10 }}
          alt="upload icon"
        />
      </Grid>
      <Grid item style={{ marginBottom: 10 }}>
        Select video to upload
      </Grid>
      <Grid item style={{ marginBottom: 110 }}>
        Or drag and drop a file
      </Grid>
      <Grid item style={{ marginBottom: 5 }}>MP4 or WebM</Grid>
      <Grid item style={{ marginBottom: 5 }}>720x128 resolution or higher</Grid>
      <Grid item style={{ marginBottom: 5 }}>Up to 180 seconds</Grid>
      <Grid item style={{ marginBottom: 20 }}>Less than 1GB</Grid>
      <Grid >
        <JyvButton text="Select File" variant="contained" />
      </Grid>
    </Grid>
  )
}
