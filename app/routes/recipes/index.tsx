import type { LoaderFunction } from "remix"
import { useLoaderData } from "remix"
import RecipeCard from "~/components/recipe-card"
import { db } from "../../../prisma/db.server"
import { Recipe } from "@prisma/client"

export const loader: LoaderFunction = async () => {
  // TODO: const data: LoaderData, check JokesApp
  return await db.recipe.findMany()
}

export default function Recipes() {
  const recipes = useLoaderData<Recipe[]>()
  
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

