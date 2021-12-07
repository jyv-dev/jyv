import Grid from "@mui/material/Grid"
import * as React from "react"

import RainbowTrim from "../../images/rainbow-bar.png"

export default function CollectionCover(props) {
  return (
    <Grid container direction="column" style={{ width: "33vw" }}>
      <Grid item>
        <img src={props.src} alt="back-arrow" />
      </Grid>
      <Grid item>
        <img src={RainbowTrim} alt="back-arrow" />
      </Grid>
      <Grid
        item
        style={{ height: 30, backgroundColor: "black" }}
        alignContent="center"
      >
        {`${props.name} by ${props.handle}`}
      </Grid>
    </Grid>
  )
}
