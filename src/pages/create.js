import * as React from "react"
import { Link } from "gatsby"
import Grid from "@mui/material/Grid"

import Layout from "../components/layout"
import UploadArea from "../components/create-page/uploadArea"
import VideoDetails from "../components/create-page/videoDetails"

const Create = () => {
  // TODO: Define a render function to display the vidoe once its uploaded or editing previously uploaded content
  return (
    <Layout>
      <div
        className="page"
        style={{
          backgroundColor: "#f7f8f9",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
        }}
      >
        <Grid
          container
          direction="column"
          className="create-page-container"
          style={{
            padding:30,
            backgroundColor: "white",
          }}
        >
          <Grid item style={{ marginBottom: 5 }}>
            Upload Video
          </Grid>
          <Grid item style={{ marginBottom: 15 }}>
            Post a video to your account
          </Grid>
          <Grid container direction="row">
            <UploadArea />
            <VideoDetails />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Create
