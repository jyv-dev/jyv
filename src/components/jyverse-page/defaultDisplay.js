import Grid from "@mui/material/Grid"
import * as React from "react"

export default function DefaultDisplay(props) {
  return (
    <Grid container direction="column" style={{ margin: "30px" }} justifyContent="space-between">
      <FeaturedContent isJyverse/>
      {/* TODO: Make the first playlist to be "all videos" on the DB side*/}
      <Grid item>
        {props.playlists?.map(p => (
          <Playlist playlist={p} />
        ))}
      </Grid>
    </Grid>
  )
}