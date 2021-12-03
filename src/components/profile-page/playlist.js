import Grid from "@mui/material/Grid"
import * as React from "react"

import VideoContent from "./videoContent"
import PlayIcon from "../../images/play-button.svg"

export default function Playlist(props) {
  return (
    <Grid container direction="column" style={{ marginBottom: 40 }}>
      <Grid item style={{ marginBottom: 10 }}>
        <Grid container direction="row" style={{width: '90vw'}} justifyContent="space-between">
          <Grid item>
            {" "}
            <Grid container direction="row">
              <Grid item>{props.title}</Grid>
              <Grid item>
                <img src={PlayIcon} style={{ marginBottom: 0, marginRight: 5 }} />
              </Grid>
              <div>Play all</div>
            </Grid>
          </Grid>
          <Grid item> Full Playlist</Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" style={{width: '90vw', overflowX: 'scroll', flexWrap: 'nowrap'}} className="scroll">
          {props.playlist.content.map((c, i) => {
            if (i < 5) {
              return (
                <VideoContent
                  src={c.src}
                  plays={c.plays}
                  uploadDate={c.upload_date}
                />
              )
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
