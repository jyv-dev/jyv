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

  const handleDrop = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let newFiles = []
    for (var i = 0; i < e.dataTransfer.files.length; i++) {
      let file = e.dataTransfer.files.item(i)
      if (file["type"].split("/")[0] === "video") {
        newFiles.push(file)
      }
    }
    if (newFiles.length > 0) {
    //   const existingFiles = props.file.map(f => f.name)
    //   const filteredFiles = newFiles.filter(
    //     f => !existingFiles.includes(f.name)
    //   )
    //   const updatedFiles = [...props.file, ...filteredFiles]

      props.setFile(newFiles[0])
      props.setHasFiles(true);
      setDropDepth(0)
      setInDropZone(false)
    }
  }

  const onChange = async e => {
      console.log('onchange')
    let newFiles = []
    for (var i = 0; i < e.target.files.length; i++) {
      let file = e.target.files.item(i)
      if (file["type"].split("/")[0] === "image") {
        newFiles.push(file)
      }
    }

    if (newFiles.length > 0) {
      const existingFiles = props.file.map(f => f.name)
      const filteredFiles = newFiles.filter(
        f => !existingFiles.includes(f.name)
      )
      const updatedFiles = [...props.file, ...filteredFiles]

      props.setFile(updatedFiles)
      props.setHasFiles(true);
      setDropDepth(0)
      setInDropZone(false)
    }
  }

  // const handleRemoveFile = (file) => {
  //   const filteredFiles = props.files.filter((f) => f.name !== file.name);
  //   props.setFiles(filteredFiles);
  // };
  return (
    <div
    onDrop={(e) => handleDrop(e)}
    onDragOver={(e) => handleDragOver(e)}
    onDragEnter={(e) => handleDragEnter(e)}
    onDragLeave={(e) => handleDragLeave(e)}
      style={{
        width: "23vw",
        background: "#F0F0F0",
        height: 600,
        borderRadius: 10,
      }}
    >
      <input
        id="upload-area"
        style={{ display: "none" }}
        type="file"
        onChange={onChange}
      />
      <label htmlFor="upload-area">
        <Grid
          container
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <img
              src={UploadIcon}
              style={{ width: 40, marginTop: 90, marginBottom: 10 }}
              alt="upload icon"
            />
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            <span style={{ textDecoration: "underline", color: "#003366" }}>
              {" "}
              Select{" "}
            </span>{" "}
            video to upload
          </Grid>
          <Grid item style={{ marginBottom: 110 }}>
            Or drag and drop a file
          </Grid>
          <Grid item style={{ marginBottom: 5 }}>
            MP4 or WebM
          </Grid>
          <Grid item style={{ marginBottom: 5 }}>
            720x128 resolution or higher
          </Grid>
          <Grid item style={{ marginBottom: 5 }}>
            Up to 180 seconds
          </Grid>
          <Grid item style={{ marginBottom: 20 }}>
            Less than 1GB
          </Grid>
        </Grid>
      </label>
    </div>
  )
}
