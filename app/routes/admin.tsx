import type { LoaderFunction } from "remix"
import { Link, Outlet, useLoaderData } from "remix"
import { getRecipes, IRecipe } from "~/firebase/recipe-service.server"
import { requireUserId } from "~/firebase/session.server"

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  
  // TODO: load more than 20 recipes...
  return getRecipes(50)
}

export default function Admin() {
  const recipes = useLoaderData<IRecipe[]>()

  return (
    <div className="container mx-auto flex gap-4">
      <nav className="border-r border-gray-600 pr-4">
        <h1>Admin</h1>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.slug}>
              <Link to={`/admin/${recipe.id}`}>
                {recipe.name}
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