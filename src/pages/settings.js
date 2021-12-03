import * as React from "react"

import Layout from "../components/layout"

const Settings = () => (
  <Layout>
    <div
      className="page"
      style={{
        paddingTop: 30,
        background: "#f7f8f9",
      }}
    >
      <Grid container direction="row" style={{ width: "33vw" }}>
        <Grid container direction="column">
          <Grid item>Settings</Grid>
          <Grid item>Connected Accounts</Grid>
          <Grid item>Audience</Grid>
          <Grid item>Security</Grid>
          <Grid item>Upcoming Features</Grid>
        </Grid>
        {tab === "about-you" && <AboutYou />}
      </Grid>
    </div>
  </Layout>
)

export default Create
