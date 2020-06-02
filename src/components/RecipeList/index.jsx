import React from "react"
import { Link } from "gatsby"

const RecipeList = ({ recipes }) => {
  return (
    <section className="flex flex-wrap -mx-1 lg:-mx-4 w-full">
      <h2 className="font-bold text-l w-full py-2 mx-1 mb-2 lg:mx-4 border-b-2 border-gray-300">
        Recipes
      </h2>
      {recipes.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden" key={node.fields.slug}>
              <Link
                to={node.fields.slug}
                className="w-full h-48 block bg-cover overflow-hidden"
                style={{
                  backgroundImage: `url(${node.frontmatter.main_image.childImageSharp.fluid.src})`,
                }}
              />
              <div className="py-2">
                <div className="font-bold text-l">
                  <Link to={node.fields.slug} className="no-underline">
                    {title}
                  </Link>
                </div>
                <div className="font-light text-gray-500 text-xs">
                  {node.frontmatter.taxonomy
                    ? node.frontmatter.taxonomy.category
                    : ""}
                </div>
              </div>
              <div className="py-2">
                {node.frontmatter.taxonomy
                  ? node.frontmatter.taxonomy.tag.map(tag => (
                      <span className="inline-block font-light border border-gray-500 rounded px-1 py text-xs text-gray-700 mr-2 mb-2">
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
  )
}

export default RecipeList
