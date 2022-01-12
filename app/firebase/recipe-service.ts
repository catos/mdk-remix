import slugify from "~/lib/slugify"

export interface IRecipe {
  id: string
  // slug: string
  // TODO: published: boolean,
  // created: number
  // description: string
  // ingredients: string
  // steps: string
  name: string
  // source?: string
  image?: string
  // tags: string[]
  // time: number
  // type: number
}

const RECIPES: IRecipe[] = [
  {
    id: "1",
    name: "Oppskrift #1"
  },
  {
    id: "2",
    name: "Oppskrift #2"
  },
  {
    id: "3",
    name: "Oppskrift #3"
  },
]

export async function getRecipes(take = 10) {
  // const q = query(
  //   collection(db, "recipes"),
  //   // TODO: where("published", "==" , true)
  //   limit(take),
  //   orderBy("created", "desc")
  // )

  // const snapshot = await getDocs(q)
  // const recipes = snapshot.docs.map((doc) => {
  //   // TODO: replace id with slug
  //   const dbRecipe = doc.data()
  //   return {
  //     id: doc.id,
  //     slug: slugify(dbRecipe.name),
  //     ...dbRecipe,
  //   } as IRecipe
  // })

  return RECIPES
}

export async function getRecipe(id: string, rendered = true) {
  // const ref = doc(db, "recipes", id)
  // const snap = await getDoc(ref)

  // if (!snap.exists()) {
  //   return null
  // }

  // const dbRecipe = snap.data()
  
  // const recipe = {
  //   id: snap.id,
  //   ...dbRecipe,
  // } as IRecipe

  return RECIPES.find(p => p.id === id)
}
