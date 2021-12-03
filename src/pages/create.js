import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import UploadArea from "../components/create-page/uploadArea"
import VideoDetails from "../components/create-page/videoDetails"

const Create = () => (
  // TODO: Define a render function to display the vidoe once its uploaded or editing previously uploaded content
  <Layout>
    <div
      className="page"
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        background: "#f7f8f9",
      }}
    >
      <Grid container direction="column" className="create-page-container">
        <Grid item>Upload Video</Grid>
        <Grid item>Post a video to your account</Grid>
        <Grid container direction="row" style={{ background: "#F0F0F0" }}>
          <UploadArea />
          <VideoDetails />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default Create
