import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined"
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import JyvIcon from "../icons/jyvLogo"

export default function IconTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log(value)

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<ForumOutlinedIcon />} style={{color: 'white'}} aria-label="feed" />
      <Tab icon={<PlaylistAddCheckOutlinedIcon />} style={{color: 'white'}} aria-label="bounties" />
      <Tab icon={<JyvIcon />} aria-label="jyv" />
      <Tab icon={<FmdGoodOutlinedIcon />} style={{color: 'white'}} aria-label="map" />
      <Tab icon={<ArchiveOutlinedIcon />} style={{color: 'white'}} aria-label="forum" />
    </Tabs>
  )
}
