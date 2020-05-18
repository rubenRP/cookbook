import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const CookbookIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section class="flex flex-wrap -mx-1 lg:-mx-4">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article
                className="overflow-hidden rounded-lg shadow-lg"
                key={node.fields.slug}
              >
                <Link
                  to={node.fields.slug}
                  className="w-full h-48 block bg-cover overflow-hidden"
                  style={{
                    backgroundImage: `url(${node.frontmatter.main_image.childImageSharp.fluid.src})`,
                  }}
                ></Link>
                <div className="px-6 py-4">
                  <div className="font-light text-gray-500 text-sm mb-2">
                    {node.frontmatter.taxonomy
                      ? node.frontmatter.taxonomy.category
                      : ""}
                  </div>
                  <div className="font-bold text-2xl mb-2">
                    <Link to={node.fields.slug} className="no-underline">
                      {title}
                    </Link>
                  </div>
                </div>
                <div className="px-6 py-4 pb-2">
                  {node.frontmatter.taxonomy
                    ? node.frontmatter.taxonomy.tag.map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                          {tag}
                        </span>
                      ))
                    : ""}
                </div>
              </article>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default CookbookIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            taxonomy {
              category
              tag
            }
            main_image {
              childImageSharp {
                fluid(maxHeight: 400) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
