import React from "react"
import { Link } from "gatsby"

const RecipeList = ({ recipes }) => {
  return (
    <section className="flex flex-wrap -mx-1 lg:-mx-4 w-full">
      {recipes.map(({ node }) => {
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
              />
              <div className="px-6 py-4">
                <div className="font-light text-gray-500 text-sm">
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
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2">
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
