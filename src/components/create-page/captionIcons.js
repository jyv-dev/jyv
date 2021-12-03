import AlternateEmailIcon from "@mui/icons-material/AlternateEmail"
import TagIcon from "@mui/icons-material/Tag"
import Grid from "@mui/material/Grid"
import * as React from "react"

export default function CaptionIcons(props) {
  return (
    <Grid container direction="row">
      <Grid item>
        <AlternateEmailIcon />
      </Grid>
      <Grid item>
        <TagIcon />
      </Grid>
    </Grid>
  )
}
