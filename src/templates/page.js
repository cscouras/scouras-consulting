import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/page.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <div className={styles.mainContent}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html 
            frontmatter {
                title
            }
        }
    }
`