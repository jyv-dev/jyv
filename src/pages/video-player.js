import * as React from "react"
import Grid from "@mui/material/Grid"
import ReactPlayer from "react-player"

import TestVideo from "../videos/test_video.mp4"
import Layout from "../components/layout"
import VideoDetails from "../components/video-player/videoDetails"
import CreatorDetails from "../components/video-player/creatorDetails"
import Queue from "../components/video-player/queue"
import { TEST_VIDEOS, TEST_USER, TEST_TAGS } from "../constants/index"

const VideoPlayer = () => {
  // const video = URL.createObjectURL(TestVideo)
  return (
    <Layout>
      <Grid
        className="page"
        container
        direction="column"
        style={{ backgroundColor: "#f7f8f9" }}
      >
        <video id="samp" width="100%"  controls>
          <source src={TestVideo} type="video/mp4" />
        </video>
        {/* <ReactPlayer url={TestVideo} width="100%" style={{width:'fill-content'}}/> */}
        {/* <ReactPlayer url={[{ src: { TestVideo }, type: "video/mp4" }]} /> */}
        <VideoDetails
          title={TEST_VIDEOS[0].title}
          plays={TEST_VIDEOS[0].plays}
          uploadDate={TEST_VIDEOS[0].upload_date}
          likes={TEST_VIDEOS[0].likes}
          shares={TEST_VIDEOS[0].shares}
          tags={TEST_TAGS}
        />
        <div
          style={{ height: 1, width: "100%", backgroundColor: "#C4C4C4" }}
        ></div>
        <CreatorDetails
          name={TEST_USER.name}
          follower={TEST_USER.followers}
          description={TEST_USER.description}
        />
        <div
          style={{ height: 1, width: "100%", backgroundColor: "#C4C4C4" }}
        ></div>
        <Queue videos={TEST_VIDEOS} />
      </Grid>
    </Layout>
  )
}

export default VideoPlayer
