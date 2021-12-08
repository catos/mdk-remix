import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore"
import { marked } from "marked"
import recipeRenderer from "~/lib/recipe-renderer"
import slugify from "~/lib/slugify"
import { db } from "./firebase"

export interface IRecipe {
  id: string
  slug: string
  // TODO: published: boolean,
  created: number
  description: string
  ingredients: string
  steps: string
  name: string
  source?: string
  image: string
  tags: string[]
  time: number
  type: number
}

export async function getRecipes(take = 10) {
  console.log(take);
  
  const q = query(
    collection(db, "recipes"),
    // TODO: where("published", "==" , true)
    limit(take),
    orderBy("created", "desc")
  )

  const snapshot = await getDocs(q)
  const recipes = snapshot.docs.map((doc) => {
    // TODO: replace id with slug
    const dbRecipe = doc.data()
    return {
      id: doc.id,
      slug: slugify(dbRecipe.name),
      ...dbRecipe,
    } as IRecipe
  })

  return recipes
}

export async function getRecipe(id: string, rendered = true) {
  const ref = doc(db, "recipes", id)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    return null
  }

  const dbRecipe = snap.data()
  
  const recipe = {
    id: snap.id,
    ...dbRecipe,
  } as IRecipe

  return rendered
    ? {
        ...recipe,
        description: marked(dbRecipe.description, {
          renderer: recipeRenderer(),
        }),
        ingredients: marked(dbRecipe.ingredients, {
          renderer: recipeRenderer(),
        }),
        steps: marked(dbRecipe.steps, { renderer: recipeRenderer() }),
      }
    : recipe
}
