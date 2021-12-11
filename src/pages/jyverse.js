import * as React from "react"
import Grid from "@mui/material/Grid"

import Layout from "../components/layout"
import ProfileNavigation from "../components/jyverse-page/profileNavigation"
import Header from "../components/jyverse-page/header"
import DefaultDisplay from "../components/jyverse-page/defaultDisplay"
import AllVideos from "../components/profile-page/allVideos"
import Collections from "../components/profile-page/playlists"
import { TEST_PLAYLISTS, TEST_VIDEOS, TEST_USER } from "../constants/index"

const Jyverse = () => {
  return (
    <Layout>
      <Grid className="page" container direction="column">
        <ProfileNavigation profileName={TEST_USER.name} />
        <Header handle="@test_handle" />
        <DefaultDisplay playlists={TEST_PLAYLISTS} />
        <AllVideos videos={TEST_VIDEOS} />
        <Collections playlists={TEST_PLAYLISTS} />
      </Grid>
    </Layout>
  )
}

export default Jyverse
