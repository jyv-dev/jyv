import Layout from "../components/layout"

const Collection = () => (
  <Layout>
    <Grid
      className="page"
      container
      direction="column"
    >
     <Header />
     <Grid container direction="row">
         <CollectionCover />
         <CollectionVideos />
     </Grid>
     </Grid>
  </Layout>
)

export default Collection