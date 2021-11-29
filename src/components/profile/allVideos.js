import Grid from "@mui/material/Grid"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"
import UploadIcon from "../../images/time-button.svg"

export default function Home(props) {
  return (
    <Grid
      container
      direction="column"
      style={{ paddingLeft: "20px", marginTop: 40 }}
    >
      <Grid item>
        <Grid container direction="row">
          <Grid item>All Videos</Grid>
          <Grid item>
            <img src={PlayIcon} style={{ marginBottom: 0 }} />
          </Grid>
          <div>Play all</div>
        </Grid>
      </Grid>
      <Grid item>
          <Grid container direction="row">
              {videos.map((v) => <VideoContent />)}
          </Grid>
      </Grid>
    </Grid>
  )
}
