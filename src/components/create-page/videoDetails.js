import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import * as React from "react"

import CaptionIcons from "./captionIcons"
import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function VideoDetails(props) {
  const handleCaptionChange = e => {
    props.setCaption(e.target.value)
  }

  const handleDescriptionChange = e => {
    props.setDescription(e.target.value)
  }

  const handleAccessChange = e => {
    props.setAccess(e.target.value)
  }

  const handlePlaylistChange = e => {
    props.setPlaylist(e.target.value)
  }

  const handleMainVideoChange = e => {
    props.setIsMainVideo(e.target.value)
  }
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      style={{ width: "55vw", marginLeft: 25 }}
    >
      <Grid item style={{ marginBottom: 10 }}>
        Caption
      </Grid>
      <Grid item>
        <TextField
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <CaptionIcons />
          //     </InputAdornment>
          //   ),
          // }}
          onChange={handleCaptionChange}
          value={props.caption}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item style={{ marginBottom: 10, marginTop: 20 }}>
        Description
      </Grid>
      <Grid item>
        <TextField
          style={{ width: "100%" }}
          onChange={handleDescriptionChange}
          value={props.description}
        />
      </Grid>
      <Grid item style={{ marginBottom: 10, marginTop: 20 }}>
        Cover Image
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <div
          style={{
            with: "12vw",
            height: "12vw",
            background: "f2f2f2",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 10,
          }}
        >
          {"  "}
        </div>
      </Grid>
      <Grid item style={{ marginBottom: 10, marginTop: 20 }}>
        Who can view this video
      </Grid>
      <Grid item>
        <Select
          // labelId="audience-select"
          // id="audience-select"
          value={props.access}
          // label="Audience Select"
          onChange={handleAccessChange}
          style={{ width: "100%" }}
        >
          <MenuItem value={"public"}>Public</MenuItem>
          <MenuItem value={"private"}>Private</MenuItem>
        </Select>
      </Grid>
      <Grid item style={{ marginBottom: 10, marginTop: 20 }}>
        Add to playist
      </Grid>
      <Grid item>
        <Select
          // labelId="audience-select"
          // id="audience-select"
          value={props.playlist}
          label="Audience Select"
          onChange={handlePlaylistChange}
          style={{ width: "100%" }}
        >
          <MenuItem value={"playlist 1"}>Playlist 1</MenuItem>
          <MenuItem value={"playlist 2"}>Playlist 2</MenuItem>
          <MenuItem value={"add"}>+ Add New Playlist</MenuItem>
        </Select>
      </Grid>
      <Grid item style={{ marginBottom: 10, marginTop: 20 }}>
        Set as main video on page?
      </Grid>
      <Grid item>
        <Select
          // labelId="audience-select"
          // id="audience-select"
          value={props.isMainVideo}
          // label="Audience Select"
          onChange={handleMainVideoChange}
          style={{ width: "100%" }}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        style={{ marginTop: 20 }}
      >
        <JyvButton text="Cancel" variant="contained" />
        <JyvButton text="Post" variant="contained" />
      </Grid>
    </Grid>
  )
}
