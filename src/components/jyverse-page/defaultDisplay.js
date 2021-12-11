import Grid from "@mui/material/Grid"
import * as React from "react"

import FeaturedContent from '../profile-page/featuredContent'
import TestToken from "../../images/test-token.png"
import TestFeatureVideo from "../../images/test-feature-video.png"
import Playlist from '../profile-page/playlist'

export default function DefaultDisplay(props) {
  const testVideo = 
{
    title: "Out and about in NYC",
    plays: "8.2M",
    upload_date: "November 15 2021",
    src: TestFeatureVideo,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  };
  return (
    <Grid container direction="column" style={{ margin: "30px" }} justifyContent="space-between">
      <FeaturedContent tokenSrc={TestToken} video={testVideo}/>
      {/* TODO: Make the first playlist to be "all videos" on the DB side*/}
      <Grid item>
        {props.playlists?.map(p => (
          <Playlist playlist={p} />
        ))}
      </Grid>
    </Grid>
  )
}