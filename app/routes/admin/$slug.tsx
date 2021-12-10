import type { LoaderFunction } from "remix"
import { Form, useLoaderData, useTransition } from "remix"
import invariant from "tiny-invariant"
import Input from "~/components/ui/input"
import { getRecipe, IRecipe } from "~/firebase/recipe-service.server"

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug")

  const recipe = await getRecipe(params.slug, false)
  if (!recipe) {
    throw new Response(`No recipe found with id = ${params.slug}`, { status: 404 })
  }

  return recipe
}

export default function Edit() {
  const recipe = useLoaderData<IRecipe>()
  const transition = useTransition()

  return (
    <div className="container">
      <h1>Edit: {recipe.name}</h1>

      <Form method="post" className="flex flex-col gap-4">
        <Input name="name" label="Name" value={recipe.name} />
        <Input name="image" label="Image" value={recipe.image} />
        <Input name="source" label="Source" value={recipe.source} />
        <Input name="time" label="time" value={recipe.time} />
        <Input name="type" label="type" value={recipe.type} />
        <Input name="tags" label="tags" value={recipe.tags} />


        <label className="label" htmlFor="ingredients">
          Ingredients
          <textarea className="input h-20" id="ingredients" rows={20} name="ingredients">
            {recipe.ingredients}
          </textarea>
          {/* {errors?.markdown && <div>Markdown is required</div>} */}
        </label>

        <button className="button-primary" type="submit">
          {transition.submission ? "Lagrer..." : "Lagre"}
        </button>
      </Form>

    </div>
  )
}