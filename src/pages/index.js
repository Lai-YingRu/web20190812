import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div class="container text-center">
      <h2>What We're Using</h2> 
      <div class='row'>
        <div class="col-sm-4">
          <img src="../components/image/html5.png" id="icon"></img>
        </div>
        <div class="col-sm-4">
          <img src="../components/image/html5.png" id="icon"></img>
        </div>
        <div class="col-sm-4">
          <img src="../components/image/html5.png" id="icon"></img>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
