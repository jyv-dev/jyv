import * as React from "react"
import Grid from "@mui/material/Grid"

import Jyv from "../../images/jyv-icon.svg"


const JyvIcon = props => (
  <Grid item>
    <img
      src={Jyv}
      alt="jyv-con"
      style={{ width: "40px", height: "40px", marginBottom: 0 }}
    />
  </Grid>
)

export default JyvIcon
