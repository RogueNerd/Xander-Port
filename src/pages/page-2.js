import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Writing Portfolio</h1>
    <p>Below are some of my work</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
