import Grid from "@mui/material/Grid"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"
import UploadIcon from "../../images/time-button.svg"

export default function FeaturedContent(props) {
  return (
    <Grid container direction="row">
      <Grid item xs={6} style={{ marginRight: 20 }}>
        <img src={props.video.src} />
      </Grid>
      <Grid item style={{ maxWidth: "40vw" }}>
        <Grid container direction="column">
          <Grid item style={{ marginBottom: 10 }}>
            {props.video.title}
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            <Grid container direction="row">
              <Grid item style={{ marginRight: 5 }}>
                <img src={PlayIcon} style={{ marginBottom: 0 }} />
              </Grid>
              <Grid item style={{ marginRight: 20 }}>
                {props.video.plays}
              </Grid>
              <Grid item style={{ marginRight: 5 }}>
                <img src={UploadIcon} style={{ marginBottom: 0 }} />
              </Grid>
              <Grid item>{props.video.upload_date}</Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            {props.video.description}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
