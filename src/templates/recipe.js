import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const RecipeTemplate = ({ data, pageContext, location }) => {
  const recipe = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const { frontmatter } = recipe
  const mainImage =
    frontmatter.main_image && frontmatter.main_image.childImageSharp.fluid.src
  const category = frontmatter.taxonomy && frontmatter.taxonomy.category

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={frontmatter.title}
        description={recipe.excerpt}
      />
      <article>
        <header className="max-w-sm w-full lg:max-w-full mb-10">
          <div className="lg:flex overflow-hidden rounded-lg shadow-lg">
            <div
              className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover overflow-hidden"
              style={{
                backgroundImage: `url(${mainImage})`,
              }}
            ></div>
            <div className="bg-white p-5 flex flex-col justify-between leading-normal w-full">
              <h1 className="text-gray-900 font-bold text-4xl mb-2">
                {recipe.frontmatter.title}
              </h1>
              <div className="flex items-center mb-8">
                <div className="text-sm">
                  <p className="text-gray-600">{frontmatter.date}</p>
                </div>
              </div>
              <div className="flex items-center content-between divide-x divide-gray-300">
                {frontmatter.servings ? (
                  <div className="p-3 flex flex-col items-center w-full">
                    <div className="text-sm text-gray-500">Servings</div>
                    <span>{frontmatter.servings}</span>
                  </div>
                ) : (
                  ""
                )}
                {frontmatter.cooking_time ? (
                  <div className="p-3 flex flex-col items-center w-full">
                    <div className="text-sm text-gray-500">Cooking Time</div>
                    <span>{frontmatter.cooking_time}</span>
                  </div>
                ) : (
                  ""
                )}
                {category ? (
                  <div className="p-3 flex flex-col items-center w-full">
                    <div className="text-sm text-gray-500">Category</div>
                    <span>{category}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </header>
        <section
          className="markdown"
          dangerouslySetInnerHTML={{ __html: recipe.html }}
        />
        <hr />
        <footer></footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        main_image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              src
            }
          }
        }
        servings
        cooking_time
        taxonomy {
          category
          tag
        }
        ingredients
      }
    }
  }
`
