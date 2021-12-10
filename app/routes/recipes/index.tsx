import type { LoaderFunction } from "remix"
import { useLoaderData } from "remix"
import { getRecipes, IRecipe } from "~/firebase/recipe-service.server"
import RecipeCard from "~/components/recipe-card"

export const loader: LoaderFunction = () => {
  return getRecipes(12)
}

export default function Recipes() {
  const recipes = useLoaderData<IRecipe[]>()

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

