import Layout from "../components/layout"
import * as React from "react"
import Grid from "@mui/material/Grid"

import Header from "../components/collection-page/header"
import CollectionCover from "../components/collection-page/cover"
import CollectionVideos from "../components/collection-page/videos"

const Collection = () => (
  <Layout>
    <Grid className="page" container direction="column">
      <Header />
      <Grid container direction="row">
        <CollectionCover />
        <CollectionVideos />
      </Grid>
    </Grid>
  </Layout>
)

export default Collection
