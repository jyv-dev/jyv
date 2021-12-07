import * as React from "react"

import Layout from "../components/layout"

const Jyverse = () => (
  <Layout>
    <Grid className="page" container direction="column">
      <ProfileNavigation />
      <Header />
      <DefaultDisplay />
      <AllVideos />
      <Collections />
    </Grid>
  </Layout>
)

export default Jyverse
