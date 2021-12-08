import { LoaderFunction, useLoaderData } from "remix"
import invariant from "tiny-invariant"
import { getRecipe, Recipe } from "~/services/recipe-service"

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug")
  return getRecipe(params.slug)
}

export default function Recipe() {
  const recipe = useLoaderData<Recipe>()

  return (
    <div className="container mx-auto p-4">
      <div dangerouslySetInnerHTML={{__html: recipe.html}} />
    </div>
  )
}