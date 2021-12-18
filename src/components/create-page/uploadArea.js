import Grid from "@mui/material/Grid"
import React, { useState } from "react"

import EditFile from "./editFile"
import NoFile from "./noFile"
import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function UploadArea(props) {
  const [hasFiles, setHasFiles] = useState(props.file.length > 0)
  // const renderFile = () => {
  //   console.log(props.file)
  //   if (props.file.length > 0) {
  //     return <EditFile />
  //   } else {
  //     return <NoFile file={props.file} setFile={props.setFile} />
  //   }
  // }
  console.log(props.file)
  return (
    <div style={{marginTop: 35}}>
      {hasFiles ? (
        <EditFile file={props.file} name={props.file.name} />
      ) : (
        <NoFile
          file={props.file}
          setFile={props.setFile}
          setHasFiles={setHasFiles}
        />
      )}{" "}
    </div>
  )
}
