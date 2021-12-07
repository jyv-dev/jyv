import Grid from "@mui/material/Grid"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"

export default function Home(props) {
  return (
    <Grid container direction="row">
      <Grid container direction="column">
        <Grid item>{props.name}</Grid>
        <Grid container direction="row">
          <Grid item>
            <img src={PlayIcon} style={{ marginBottom: 0, marginRight: 5 }} />
          </Grid>
          <Grid item>{props.plays}</Grid>
        </Grid>
        <Grid item>{props.uploadDate}</Grid>
      </Grid>
      <Grid container direction="row">
        {/* TODO: Make this into its own component */}
        <Grid container direction="column">
          <Grid item>
            <img src={PlayIcon} style={{ marginBottom: 10 }} />
          </Grid>
          <Grid item>{props.likes}</Grid>
        </Grid>
        {/* TODO: Make this into its own component */}
        <Grid container direction="column">
          <Grid item>
            <img src={ShareIcon} style={{ marginBottom: 10 }} />
          </Grid>
          <Grid item>{props.shares}</Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" style={{ width: "20vw" }}>
        {props.tags.map(t => (
          <Chip label={t.name} />
        ))}
      </Grid>
    </Grid>
  )
}
