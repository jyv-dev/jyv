import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import * as React from "react"

import JyvButton from "../jyvButton"

export default function CreatorDetails(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      style={{ padding: 20 }}
    >
      <Grid item>
        <Grid container direction="row">
          {/* <ProfileImage /> */}
          <Grid container direction="column">
            <Grid
              item
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: "#545454",
              }}
            >
              {props.name}
            </Grid>
            <Grid
              item
              style={{
                fontWeight: 400,
                fontSize: 15,
                color: "#545454",
              }}
            >{`${props.followers}k Followers`}</Grid>
            <Grid
              item
              style={{
                fontWeight: 400,
                fontSize: 15,
                color: "#545454",
              }}
            >
              {props.description}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid container direction="row">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
      
            />
            <JyvButton text="Subscribe" variant="contained" />
          </Grid>
          {!!props.isCreator && (
            <JyvButton text="Subscribe" variant="contained" />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}
