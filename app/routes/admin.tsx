import { Recipe } from "@prisma/client"
import type { LoaderFunction } from "remix"
import { Link, Outlet, useLoaderData } from "remix"
import { db } from "../../prisma/db.server"

export const loader: LoaderFunction = async ({ request }) => {
  // TODO await requireUserId(request)
  return await db.recipe.findMany()  
}

export default function Admin() {
  const recipes = useLoaderData<Recipe[]>()

  return (
    <div className="container mx-auto flex gap-4">
      <nav className="border-r border-gray-600 pr-4">
        <h1>Admin</h1>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
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