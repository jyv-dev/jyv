import Grid from "@mui/material/Grid"
import * as React from "react"

import EditName from './editName';
import EditBio from './editBio';
import EditCover from './editCover';
import EditPhoto from './editPhoto';
import EditCover from './editCover';
import EditUsername from './editUsername';
import EditSubdomain from './editSubdomain';

export default function AboutYouTab(props) {
  return (
    <Grid
      container
      direction="column"
      style={{ width: "67vw" }}
    >
      <Grid item>
          About You
      </Grid>
      <Grid item>Line</Grid>
      <EditName />
      <EditBio />
      <EditPhoto />
      <EditCover />
      <EditUsername />
      <EditSubdomain />
    </Grid>
  )
}
