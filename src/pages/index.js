import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import Layout from "../components/layout"
import testImage from "../images/banner.jpeg"
import TestImage from "../images/test-profile-image.jpeg"
import TestFeatureVideo from "../images/test-feature-video.png"
import Seo from "../components/seo"
import FeaturedContent from "../components/profile/featuredContent"

const IndexPage = () => (
  <Layout>
    {/* TODO: make this the bottom half color */}
    {/* <div style={{backgroundColor: '#E5E5E5'}}></div> */}
    <Grid container direction="column" style={{ width: "100%", margin: "0px" }}>
      <Grid item>
        <img
          src={testImage}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            marginBottom: 0,
          }}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ marginTop: "-60px", paddingLeft: "20px" }}
        >
          <Grid item>
            {" "}
            <img
              src={TestImage}
              style={{
                borderRadius: "50%",
                width: 150,
                height: 150,
                marginBottom: 0,
                marginRight: 14,
              }}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  style={{ marginTop: "60px", width: 1200 }}
                >
                  <Grid
                    item
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: "50px",
                      alignItems: "center",
                      color: "#545454",
                    }}
                  >
                    Emily Green
                  </Grid>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <form action="/action_page.php">
                          <input
                            type="text"
                            placeholder="Enter your email"
                            name="search"
                          />
                          <button type="submit">Subscribe</button>
                        </form>
                      </Grid>
                      <Grid item>
                        <button type="submit">Jyverse</button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Grid item style={{ marginRight: 40 }}>
                    Home
                  </Grid>
                  <Grid item style={{ marginRight: 40 }}>
                    Videos
                  </Grid>
                  <Grid item style={{ marginRight: 40 }}>
                    Playlists
                  </Grid>
                  <Grid item style={{ marginRight: 40 }}>
                    About
                  </Grid>
                  <Grid item style={{ marginRight: 40 }}>
                    Search
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Home />
    <AllVideos />
    <Playlists />
    <About />
    {/* <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
