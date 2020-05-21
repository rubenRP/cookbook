import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import QuickInfo from "../components/QuickInfo"

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
        <header className="w-full lg:max-w-full mb-10">
          <div className="lg:flex overflow-hidden rounded-lg shadow-lg">
            <div
              className="h-48 lg:h-auto lg:w-1/3 flex-none bg-cover overflow-hidden"
              style={{
                backgroundImage: `url(${mainImage})`,
              }}
            />
            <div className="bg-white px-6 py-2 flex flex-col justify-between leading-normal w-full relative">
              <h1 className="text-gray-900 font-bold text-4xl mb-2">
                {recipe.frontmatter.title}
              </h1>

              {frontmatter.source ? (
                <div className="absolute top-0 right-0 p-2">
                  <a
                    href={frontmatter.source}
                    target="_blank"
                    className="text-blue-700"
                  >
                    <svg
                      x="0px"
                      y="0px"
                      width="482.136px"
                      height="482.135px"
                      viewBox="0 0 482.136 482.135"
                      className="h-6 w-6 fill-current"
                    >
                      <g>
                        <path
                          d="M455.482,198.184L326.829,326.832c-35.535,35.54-93.108,35.54-128.646,0l-42.881-42.886l42.881-42.876l42.884,42.876
		c11.845,11.822,31.064,11.846,42.886,0l128.644-128.643c11.816-11.831,11.816-31.066,0-42.9l-42.881-42.881
		c-11.822-11.814-31.064-11.814-42.887,0l-45.928,45.936c-21.292-12.531-45.491-17.905-69.449-16.291l72.501-72.526
		c35.535-35.521,93.136-35.521,128.644,0l42.886,42.881C491.018,105.045,491.018,162.663,455.482,198.184z M201.206,366.698
		l-45.903,45.9c-11.845,11.846-31.064,11.817-42.881,0l-42.884-42.881c-11.845-11.821-11.845-31.041,0-42.886l128.646-128.648
		c11.819-11.814,31.069-11.814,42.884,0l42.886,42.886l42.876-42.886l-42.876-42.881c-35.54-35.521-93.113-35.521-128.65,0
		L26.655,283.946c-35.538,35.545-35.538,93.146,0,128.652l42.883,42.882c35.51,35.54,93.11,35.54,128.646,0l72.496-72.499
		C246.724,384.578,222.588,379.197,201.206,366.698z"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              ) : (
                ""
              )}

              <QuickInfo
                servings={frontmatter.servings}
                cooking_time={frontmatter.cooking_time}
                category={category}
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col lg:flex-row mb-10">
          <section className="w-full lg:w-1/3 px-8 py-4 bg-blue-100 mb-10 lg:mb-0">
            <h3 className="text-gray-900 font-bold text-2xl mb-4">
              Ingredients
            </h3>
            <ul className="list-disc pl-4">
              {frontmatter.ingredients.map(ingredient =>
                ingredient.includes("**") ? (
                  <li className="mb-4 mt-5 -ml-4 font-bold list-none">
                    {ingredient.split("**").join("")}
                  </li>
                ) : (
                  <li className="mb-2">{ingredient}</li>
                )
              )}
            </ul>
          </section>
          <section className="w-full lg:w-2/3 lg:ml-8">
            <h2 className="text-gray-900 font-bold text-3xl mt-0">
              Directions
            </h2>
            <hr className="mb-10" />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: recipe.html }}
            />
          </section>
          <hr className="mt-10" />
        </div>
      </article>

      <div className="inline-flex">
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
        source
      }
    }
  }
`
