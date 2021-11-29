import Grid from "@mui/material/Grid"
import * as React from "react"

import VideoContent from "./videoContent"

export default function Playlist(props) {
  return (
    <Grid container direction="column" style={{ marginBottom: 40 }}>
      <Grid item style={{ marginBottom: 10 }}>
        <Grid container direction="row">
          <Grid item>
            {" "}
            <Grid container direction="row">
              <Grid item>{props.title}</Grid>
              <Grid item>
                <img src={PlayIcon} style={{ marginBottom: 0 }} />
              </Grid>
              <div>Play all</div>
            </Grid>
          </Grid>
          <Grid item> Full Playlist</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          {props.playlist.videos.map((v, i) => {
            if (i < 5) {
              return (
                <VideoContent
                  src={v.src}
                  plays={v.plays}
                  uploadDate={v.upload_date}
                />
              )
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
