import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 class="homepage__title">I'm Faus, full-stack UI/UX Desinger based in Córdoba, Argentina</h1>
    <p class="homepage__paragraph">Welcome to your new Gatsby site.</p>
    <p class="homepage__paragraph">Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: `0 auto` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
