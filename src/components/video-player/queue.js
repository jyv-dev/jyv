import Grid from "@mui/material/Grid"
import * as React from "react"
import FeaturedContent from "../profile-page/featuredContent"

export default function Queue(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      style={{ padding: 20 }}
    >
      <Grid
        item
        style={{
          fontWeight: 700,
          fontSize: 17,
          color: "#545454",
          marginBottom: 15,
        }}
      >
        Up Next
      </Grid>
      {props.videos.map(v => (
        <FeaturedContent video={v} />
      ))}
    </Grid>
  )
}
