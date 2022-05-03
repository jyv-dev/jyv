import React from "react"
import { useMediaQuery } from "react-responsive"

const DetectDevice = () => {
  // TODO: Use later 5/3/22
  //   const isDesktopOrLaptop = useMediaQuery({
  //     query: "(min-device-width: 1224px)",
  //   })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  const device = isTabletOrMobile ? "Mobile" : "Desktop"
  return device
}

export default DetectDevice
