import Grid from "@mui/material/Grid"
import * as React from "react"

import Playlist from "./playlist"

export default function Playlists(props) {
  return (
    <Grid
      container
      direction="column"
      style={{ paddingLeft: "20px", marginTop: 40 }}
    >
      {props.playlists?.map((p) => <Playlist playlist={p}/>)}
    </Grid>
  )
}