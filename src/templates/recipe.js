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
      <SEO title={frontmatter.title} description={recipe.excerpt} />
      <article className="w-full">
        <header className="max-w-sm w-full lg:max-w-full mb-10">
          <div className="lg:flex overflow-hidden rounded-lg shadow-lg">
            <div
              className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover overflow-hidden"
              style={{
                backgroundImage: `url(${mainImage})`,
              }}
            ></div>
            <div className="bg-white px-6 py-2 flex flex-col justify-between leading-normal w-full">
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
        <div className="flex mb-10">
          <section className="lg:w-1/3 px-8 py-4 bg-blue-100">
            <h3 className="text-gray-900 font-bold text-2xl mb-4">
              Ingredients
            </h3>
            <ul className="list-disc pl-4">
              {frontmatter.ingredients.map(ingredient => (
                <li className="mb-2">{ingredient}</li>
              ))}
            </ul>
          </section>
          <section className="lg:w-2/3 ml-8">
            <h2 className="text-gray-900 font-bold text-3xl mt-0">
              Directions
            </h2>
            <hr className="mb-10" />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: recipe.html }}
            />
          </section>
          <hr />
        </div>
      </article>

      <div class="inline-flex">
        {previous && (
          <Link
            to={previous.fields.slug}
            rel="prev"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            ← {previous.frontmatter.title}
          </Link>
        )}

        {next && (
          <Link
            to={next.fields.slug}
            rel="next"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            {next.frontmatter.title} →
          </Link>
        )}
      </div>
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
