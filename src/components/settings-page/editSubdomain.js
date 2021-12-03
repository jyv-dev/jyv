import Grid from "@mui/material/Grid"
import * as React from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function EditSubdomain(props) {
  return (
    <Grid
      container
      direction="row"
      style={{ width: "100%", paddingRight: "13vw" }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Grid container direction="column">
        <Grid item>Claim Subdomain</Grid>
        <Grid item>
          Change your URL from jyv.app/@username to a username.jyv.app. Note:
          new profile pages on a subdomain can take longer to rank in Google
          search compared to a profile page under the jyv.app domain.
        </Grid>
      </Grid>
      <Grid item>
        <JyvButton text="Claim Subdomain" />
      </Grid>
    </Grid>
  )
}
