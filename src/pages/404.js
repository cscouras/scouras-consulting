import React from 'react'
import Layout from '../components/layout'
import { mainContent } from '../styles/page.module.css'

const NotFoundPage = () => (
  <Layout>
    <div className={mainContent}>
      <h1>NOT FOUND</h1>
      <p>
        Sorry, the page you are looking for can't be found. Go to our{' '}
        <a href="/">home page</a>.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
