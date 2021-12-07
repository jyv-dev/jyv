import Grid from "@mui/material/Grid"
import * as React from "react"
import FeaturedContent from "../profile-page/featuredContent"

export default function CollectionVideos(props) {
  return (
    <Grid container direction="column" style={{ width: "33vw" }}>
      {props.videos.map(v => (
        <FeaturedContent video={v} />
      ))}
    </Grid>
  )
}
