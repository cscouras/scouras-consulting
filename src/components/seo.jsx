import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import { useSiteMetadata } from '../hooks/use-site-metadata'

// const Seo = ({description, title, keywords, children}) => {
//   const { title, description, keywords } = useSiteMetadata()

//   const seo = {
//     title: title,
//     description: description,
//     keywords: keywords,
//   }

//   return (
//     <>
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <meta name="keywords" content={seo.keywords} />
//     </>
//   )
// }

const Seo = ({ description, title, keywords, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="keywords" content={keywords || site.siteMetadata?.keywords} />
      {children}
    </>
  )
}

export default Seo
