import type { LoaderFunction } from "remix"
import { Link, Outlet, useLoaderData } from "remix"
import { getRecipes, Recipe } from "~/services/recipe-service"

export const loader: LoaderFunction = () => {
  return getRecipes()
}

export default function Admin() {
  const recipes = useLoaderData<Recipe[]>()

  return (
    <div className="container mx-auto p-4 flex gap-4">
      <nav className="border-r border-gray-600 pr-4">
        <h1>Admin</h1>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.slug}>
              <Link to={`/oppskrifter/${recipe.slug}`}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}