import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function UploadArea(props) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ width: "55vw" }}
    >
      <Grid item>Caption</Grid>
      <Grid item>
        <TextField InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CaptionIcons />
            </InputAdornment>
          ),
        }}/>
      </Grid>
      <Grid item>Description</Grid>
      <Grid item>
        <TextField />
      </Grid>
      <Grid item>Cover Image</Grid>
      <Grid item style={{ width: "100%", padding: 10 }}>
        <div
          style={{
            with: "12vw",
            height: "12vw",
            background: "f2f2f2",
            borderStyle: "solid",
            borderWidth: 1,
          }}
        ></div>
      </Grid>
      <Grid item>Who can view this video</Grid>
      <Grid item style={{ width: "100%" }}>
        <Select
        // labelId="audience-select"
        // id="audience-select"
        // value={}
        // label="Audience Select"
        // onChange={handleChange}
        >
          <MenuItem value={"public"}>Public</MenuItem>
          <MenuItem value={"private"}>Public</MenuItem>
        </Select>
      </Grid>
      <Grid item>Add to playist</Grid>
      <Grid item style={{ width: "100%" }}>
        <Select
        // labelId="audience-select"
        // id="audience-select"
        // value={}
        // label="Audience Select"
        // onChange={handleChange}
        >
          <MenuItem value={"playlist 1"}>Playlist 1</MenuItem>
          <MenuItem value={"playlist 2"}>Playlist 2</MenuItem>
          <MenuItem value={"add"}>+ Add New Playlist</MenuItem>
        </Select>
      </Grid>
      <Grid item>Set as main video on page?</Grid>
      <Grid item style={{ width: "100%" }}>
        <Select
        // labelId="audience-select"
        // id="audience-select"
        // value={}
        // label="Audience Select"
        // onChange={handleChange}
        >
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
      </Grid>

      <Grid container direction="row" justifyContent="flex-start">
        <JyvButton text="Cancel" variant="contained" />
        <JyvButton text="Post" variant="contained" />
      </Grid>
    </Grid>
  )
}
