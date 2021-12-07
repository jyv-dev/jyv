import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const VideoPlayer = () => (
  <Layout>
    <Grid className="page" container direction="column">
      <Video style={{ height: 1000 }} />
      <VideoDetails />
      <CreatorDetails />
      <Queue />
    </Grid>
  </Layout>
)

export default VideoPlayer
