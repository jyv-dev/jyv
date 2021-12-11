import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import * as React from "react"

import PlayIcon from "../../images/play-button.svg"
import ShareIcon from "../../images/share-icon.png"
import LikeIcon from "../../images/like-icon.png"

export default function VideoDetails(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      style={{ padding: 20 }}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            style={{ fontWeight: 700, fontSize: 30, marginBottom: 20 }}
          >
            {props.title}
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <img
                src={PlayIcon}
                style={{ marginBottom: 0, marginRight: 5, width: 20 }}
              />
            </Grid>
            <Grid
              item
              style={{
                fontWeight: 400,
                fontSize: 17,
                color: "#B3B3B3",
                marginBottom: 10,
              }}
            >
              {props.plays}
            </Grid>
          </Grid>
          <Grid
            item
            style={{ fontWeight: 400, fontSize: 17, color: "#B3B3B3" }}
          >
            {props.uploadDate}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <Grid container direction="row" style={{ marginRight: 15 }}>
              {/* TODO: Make this into its own component */}
              <Grid item style={{ marginRight: 15 }}>
                <Grid container direction="column">
                  <Grid item>
                    <img
                      src={LikeIcon}
                      style={{ marginBottom: 0, width: 30 }}
                    />
                  </Grid>
                  <Grid item style={{ fontWeight: 400, fontSize: 12 }}>
                    {props.likes}
                  </Grid>
                </Grid>
              </Grid>
              {/* TODO: Make this into its own component */}
              <Grid item style={{ marginRight: 5 }}>
                <Grid container direction="column">
                  <Grid item>
                    <img
                      src={ShareIcon}
                      style={{ marginBottom: 0, width: 30 }}
                    />
                  </Grid>
                  <Grid item style={{ fontWeight: 400, fontSize: 12 }}>
                    {props.shares}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" style={{ maxWidth: "30vw" }}>
              {props.tags.map(t => (
                <Chip
                  label={t.label}
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    fontSize: 12,
                    backgroundColor: 'white'
                  }}
                  variant="outlined"
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
