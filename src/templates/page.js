import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { mainContent} from '../styles/page.module.css'

const Page = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
        <div className={mainContent}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    </Layout>
  )
}

export default Page

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