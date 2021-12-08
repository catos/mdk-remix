import type { LoaderFunction } from "remix"
import { Link, Outlet, useLoaderData } from "remix"
import { getRecipes, Recipe } from "~/services/recipe-service"

export const loader: LoaderFunction = () => {
  return getRecipes()
}

export default function Admin() {
  const recipes = useLoaderData<Recipe[]>()

  return (
    <div className="admin">
      <nav>
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
      <main>
        <Outlet />
      </main>
    </div>
  )
}