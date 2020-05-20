import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import RecipeList from "../components/RecipeList"

const CookbookIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allRecipes = data.allMarkdownRemark.edges

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value

    // this is how we get all of our posts
    const recipes = data.allMarkdownRemark.edges || []
    // return all filtered posts
    const filteredData = recipes.filter(recipe => {
      // destructure data from post frontmatter
      const { title, taxonomy } = recipe.node.frontmatter
      const tags = taxonomy && taxonomy.tags
      const category = taxonomy && taxonomy.category

      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase())) ||
        (category &&
          category.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const recipes = hasSearchResults ? filteredData : allRecipes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Recipes" />

      <div className="flex flex-grow lg:w-3/4 xl:w-4/5 mb-10 w-full">
        <div className="w-full lg:px-6">
          <div className="relative">
            <input
              type="text"
              aria-label="Search"
              placeholder="Type to filter posts..."
              onChange={handleInputChange}
              className="transition-colors duration-100 ease-in-out focus:outline-0 border focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
            />
            <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                class="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <RecipeList recipes={recipes} />
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
