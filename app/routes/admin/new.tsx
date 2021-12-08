import { ActionFunction, useTransition } from "remix"
import { Form, useActionData, redirect } from "remix";
import invariant from "tiny-invariant";
// import { createRecipe } from "~/services/recipe-service";

type PostError = {
  title?: boolean
  slug?: boolean
  markdown?: boolean
}

export const action: ActionFunction = async ({ request }) => {
  await new Promise(res => setTimeout(res, 1000))

  const formData = await request.formData()

  const title = formData.get("title")
  const slug = formData.get("slug")
  const markdown = formData.get("markdown")

  const errors: PostError = {}
  if (!title) errors.title = true
  if (!slug) errors.slug = true
  if (!markdown) errors.markdown = true

  if (Object.keys(errors).length) {
    return errors
  }

  invariant(typeof title === "string")
  invariant(typeof slug === "string")
  invariant(typeof markdown === "string")
  // await createRecipe({ title, slug, markdown })

  return redirect("/admin")
}

export default function NewPost() {
  const errors = useActionData()
  const transition = useTransition()

  return (
    <Form method="post" className="flex flex-col gap-4">
      <label className="label" htmlFor="title">
        Title:
        <input className="input" type="text" id="title" name="title" />
        {errors?.title && <div>Title is required</div>}
      </label>

      <label className="label">
        Slug: <input className="input" type="text" name="slug" />
        {errors?.slug && <div>Slug is required</div>}
      </label>

      <label className="label" htmlFor="markdown">Markdown:
        <textarea className="input h-20" id="markdown" rows={20} name="markdown" />
        {errors?.markdown && <div>Markdown is required</div>}
      </label>

      <button className="button" type="submit">
        {transition.submission ? "Lagrer..." : "Lagre"}
      </button>
    </Form>
  )
}