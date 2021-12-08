import { ActionFunction, useTransition } from "remix"
import { Form, useActionData, redirect } from "remix";
import invariant from "tiny-invariant";
import { createRecipe } from "~/services/recipe-service";

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
  await createRecipe({ title, slug, markdown })

  return redirect("/admin")
}

export default function NewPost() {
  const errors = useActionData()
  const transition = useTransition()

  return (
    <Form method="post">
      <p>
        <label htmlFor="title">
          Title:
          {errors?.title && <em>Title is required</em>}
          <input type="text" id="title" name="title" />
        </label>
      </p>
      <p>
        <label>
          {errors?.slug && <em>Slug is required</em>}
          Slug: <input type="text" name="slug" />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        {errors?.markdown && <em>Markdown is required</em>}
        <br />
        <textarea id="markdown" rows={20} name="markdown" />
      </p>
      <p>
        <button type="submit">
          {transition.submission ? "Lagrer..." : "Lagre"}
        </button>
      </p>
    </Form>
  )
}