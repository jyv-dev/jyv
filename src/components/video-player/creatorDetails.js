import Grid from "@mui/material/Grid"
import * as React from "react"

import TestFeatureVideo from "../../images/test-feature-video.png"
import FeaturedContent from "./featuredContent"
import Playlist from "./playlist"

export default function CreatorDetails(props) {
  return (
    <Grid container direction="row">
      <Grid container direction="row">
        <ProfileImage />
        <Grid container direction="column">
          <Grid item>{props.name}</Grid>
          <Grid item>{`${props.followers}k Followers`}</Grid>
          <Grid item>{props.description}</Grid>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid container direction="row">
          <input />
          <button>Subscribe</button>
        </Grid>
        {!!props.isCreator && <button>Edit Video</button>}
      </Grid>
    </Grid>
  )
}
