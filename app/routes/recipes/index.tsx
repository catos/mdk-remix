import type { LoaderFunction } from "remix"
import { Link, useLoaderData } from "remix"
import { getRecipes, Recipe } from "~/services/recipe-service"

export const loader: LoaderFunction = () => {
  return getRecipes()
}

export default function Recipes() {
  const recipes = useLoaderData<Recipe[]>()
  
  return (
    <div className="container mx-auto p-4">
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.slug}><Link to={recipe.slug}>{recipe.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}