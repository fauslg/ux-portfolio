import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 class="homepage__title">
    I'm <span class="homepage__title--black">Faustino</span>, a full-stack product designer in Argentina.
    </h1>
    <h2 class="homepage__subheading">I enjoy creating easy-to-use user interfaces founded on evidence. I advocate Design Systems. I love coffee, and pugs.</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: `0 auto` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
