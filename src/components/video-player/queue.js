import Grid from "@mui/material/Grid"
import * as React from "react"
import FeaturedContent from "../profile-page/featuredContent"

export default function Queue(props) {
  return (
    <Grid container direction="row" justifyContent="flex-start">
      <Grid item>Up Next</Grid>
      {props.videos.map(v => (
        <FeaturedContent video={v} />
      ))}
    </Grid>
  )
}
