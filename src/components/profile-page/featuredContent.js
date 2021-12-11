import Grid from "@mui/material/Grid"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"
import UploadIcon from "../../images/time-button.svg"

export default function FeaturedContent(props) {
  return (
    <Grid container direction="row" style={{ marginBottom: 30 }}>
      <Grid item xs={6} style={{ marginRight: 20 }}>
        <img src={props.video.src} />
      </Grid>
      <Grid item style={{ maxWidth: "40vw" }}>
        <Grid container direction="column">
          <Grid container direction="row" style={{ marginBottom: 10 }}>
            <Grid item>{props.video.title}</Grid>
            {!!props.tokenSrc && (
              <Grid item>
                <img src={props.tokenSrc} />
              </Grid>
            )}
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            <Grid container direction="row" alignItems="center">
              <Grid item style={{ marginRight: 5 }}>
                <img src={PlayIcon} style={{ marginBottom: -3, width: 20 }} />
              </Grid>
              <Grid
                item
                style={{
                  marginRight: 20,
                  color: "#B3B3B3",
                  fontWeight: 400,
                  fontSize: 17,
                }}
              >
                {props.video.plays}
              </Grid>
              <Grid item style={{ marginRight: 5 }}>
                <img src={UploadIcon} style={{ marginBottom: -3, width: 25 }} />
              </Grid>
              <Grid
                item
                style={{ color: "#B3B3B3", fontWeight: 400, fontSize: 17 }}
              >
                {props.video.upload_date}
              </Grid>
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
