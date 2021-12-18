import Grid from "@mui/material/Grid"
import React, { useState } from "react"

import UploadIcon from "../../images/upload.png"
import JyvButton from "../jyvButton"

export default function UploadArea(props) {
  const [dropDepth, setDropDepth] = useState(0)
  const [inDropZone, setInDropZone] = useState(false)

  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    setDropDepth(inDropZone + 1)
  }
  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    setDropDepth(inDropZone - 1)
    if (dropDepth > 0) return
    setInDropZone(false)
  }
  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = "copy"
    setInDropZone(true)
  }

  const handleDrop = async e => {
    e.preventDefault()
    e.stopPropagation()
    let newFiles = []
    for (var i = 0; i < e.dataTransfer.files.length; i++) {
      let file = e.dataTransfer.files.item(i)
      if (file["type"].split("/")[0] === "image") {
        newFiles.push(file)
      }
    }
    if (newFiles.length > 0) {
      const existingFiles = props.files.map(f => f.name)
      const filteredFiles = newFiles.filter(
        f => !existingFiles.includes(f.name)
      )
      const updatedFiles = [...props.files, ...filteredFiles]

      props.setFile(updatedFiles)
      setDropDepth(0)
      setInDropZone(false)
    }
  }

  const onChange = async e => {
    let newFiles = []
    for (var i = 0; i < e.target.files.length; i++) {
      let file = e.target.files.item(i)
      if (file["type"].split("/")[0] === "image") {
        newFiles.push(file)
      }
    }

    if (newFiles.length > 0) {
      const existingFiles = props.files.map(f => f.name)
      const filteredFiles = newFiles.filter(
        f => !existingFiles.includes(f.name)
      )
      const updatedFiles = [...props.files, ...filteredFiles]

      props.setFile(updatedFiles)
      setDropDepth(0)
      setInDropZone(false)
    }
  }

  // const handleRemoveFile = (file) => {
  //   const filteredFiles = props.files.filter((f) => f.name !== file.name);
  //   props.setFiles(filteredFiles);
  // };
  console.log(props.name)
  return (
    <Grid
      container
      direction="column"
      style={{
        width: "23vw",
        background: "#F0F0F0",
        borderRadius: 10,
        height: "fit-content",
      }}
    >
      <Grid item>
        <video
          id="samp"
          width="100%"
          style={{
            borderRadius: 10,
          }}
        >
          <source src={URL.createObjectURL(props.file)} type="video/mp4" />
        </video>
      </Grid>
      {/* <Grid item>Video link</Grid>
      <Grid item>{props.link}</Grid> */}
      <Grid items style={{ margin: 10 }}>
        Filename
      </Grid>
      <Grid item style={{ marginLeft: 10, marginBottom: 10 }}>
        {props.name}
      </Grid>
    </Grid>
  )
}
