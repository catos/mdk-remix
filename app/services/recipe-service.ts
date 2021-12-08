import path from "path"
import fs from "fs/promises"
import parseFrontMatter from "front-matter"
import invariant from "tiny-invariant"
import { marked } from "marked"

export type Recipe = {
  slug: string
  title: string
  html: string
}

export type RecipeMarkdownAttributes = {
  title: string
}

function isValidPostAttributes(
  attributes: any
): attributes is RecipeMarkdownAttributes {
  return attributes?.title
}

const recipesPath = path.join(__dirname, "..", "recipes")

export async function getRecipes() {
  const dir = await fs.readdir(recipesPath)

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(recipesPath, filename))
      const { attributes } = parseFrontMatter(file.toString())

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      )

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      }
    })
  )
}

export async function getRecipe(slug: string) {
  const filePath = path.join(recipesPath, slug + ".md")
  const file = await fs.readFile(filePath)
  const { attributes, body } = parseFrontMatter(file.toString())

  invariant(
    isValidPostAttributes(attributes),
    `Recipe ${filePath} is missing attributes`
  )

  const html = marked(body)

  return { slug, title: attributes.title, html }
}

type NewRecipe = {
  title: string
  slug: string
  markdown: string
}

export async function createRecipe(recipe: NewRecipe) {
  const md = `---\ntitle: ${recipe.title}\n---\n\n${recipe.markdown}`

  const filename = path.join(recipesPath, recipe.slug + ".md")
  await fs.writeFile(filename, md)

  return getRecipe(recipe.slug)
}