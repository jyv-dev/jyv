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
        <FeaturedContent video={{title:'Out and about in NYC', plays: '8.2M', upload_date: 'November 15 2021', src: TestFeatureVideo}}/>
      </Grid>
      <Grid item>{props.playlists.map((p) => <Playlist />)}</Grid>
    </Grid>
  )
}