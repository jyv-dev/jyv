import Grid from "@mui/material/Grid"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"
import UploadIcon from "../../images/time-button.svg"

export default function VideoContent(props) {
  return (
    <Grid container direction="column" style={{ marginBottom: 30 }}>
      <Grid item style={{ marginBottom: 10 }}>
        <img src={props.src} />
      </Grid>
      <Grid item style={{ marginBottom: 10 }}>
        {props.title}
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item style={{ marginRight: 5 }}>
            <img src={PlayIcon} style={{ marginBottom: 0 }} />
          </Grid>
          <Grid item style={{ marginRight: 20 }}>
            {props.plays}
          </Grid>
          <Grid item style={{ marginRight: 5 }}>
            <img src={UploadIcon} style={{ marginBottom: 0 }} />
          </Grid>
          <Grid item>{props.uploadDate}</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
