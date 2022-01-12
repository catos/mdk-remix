// import Markdown from "markdown-to-jsx"
import { Link, LoaderFunction, useCatch, useLoaderData, useParams } from "remix"
import invariant from "tiny-invariant"
// import RecipeMarkdown from "~/components/recipe/markdown"
import { getRecipe, IRecipe } from "~/firebase/recipe-service"

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug")
  const recipe = await getRecipe(params.slug)
  if (!recipe) {
    throw new Response(`No recipe found with id = ${params.slug}`, { status: 404 })
  }

  return recipe
}

export default function Recipe() {
  const recipe = useLoaderData<IRecipe>()

  return (
    <>
      <section className="px-4 sm:px-0">
        <div className="container mx-auto flex flex-col bg-white gap-4">
          <div className="relative h-vh33">
            {/* TODO: only show for admins */}
            <Link
              to={`/admin/recipes/${recipe.id}`}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full"
            >
              {/* <PencilAltIcon className="w-5 h-5" /> */}
              Edit
            </Link>
            {/* <RecipeMetrics recipe={recipe} /> */}
            {recipe.image && (
              <img
                className="container mx-auto object-cover h-vh33 w-full"
                src={recipe.image}
                alt={recipe.name}
              />
            )}
            <div className="text-white absolute bottom-0 text-center w-full bg-black bg-opacity-50 py-4">
              <h1 className="text-white font-serif">{recipe.name}</h1>
            </div>
          </div>
        </div>

      </section>
    </>
  )

  // return (
  //   <>
  //     <section className="px-4 sm:px-0">
  //       <div className="container mx-auto flex flex-col bg-white gap-4">
  //         <div className="relative h-vh33">
  //           {/* TODO: only show for admins */}
  //           <Link
  //             to={`/admin/recipes/${recipe.id}`}
  //             className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full"
  //           >
  //             {/* <PencilAltIcon className="w-5 h-5" /> */}
  //             Edit
  //           </Link>
  //           {/* <RecipeMetrics recipe={recipe} /> */}
  //           {recipe.image && (
  //             <img
  //               className="container mx-auto object-cover h-vh33 w-full"
  //               src={recipe.image}
  //               alt={recipe.name}
  //             />
  //           )}
  //           <div className="text-white absolute bottom-0 text-center w-full bg-black bg-opacity-50 py-4">
  //             <h1 className="text-white font-serif">{recipe.name}</h1>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="container mx-auto flex flex-wrap justify-center gap-4 p-4 bg-white">
  //         <button
  //           aria-label="legg til som favoritt"
  //           className="button flex flex-row items-center"
  //         >
  //           {/* <BookmarkIcon className="w-5 h-5" /> */}
  //           <div className="pl-2 hidden lg:block">Lagre som favoritt</div>
  //         </button>

  //         <button
  //           aria-label="legg til meny"
  //           className="button flex flex-row items-center"
  //         >
  //           {/* <BookOpenIcon className="w-5 h-5" /> */}
  //           <div className="pl-2 hidden lg:block">Legg til meny</div>
  //         </button>

  //         <button
  //           aria-label="print"
  //           className="button flex flex-row items-center"
  //         >
  //           {/* <PrinterIcon className="w-5 h-5" /> */}
  //           <div className="pl-2 hidden lg:block">Print</div>
  //         </button>

  //         <button
  //           aria-label="last ned"
  //           className="button flex flex-row items-center"
  //         >
  //           {/* <SaveIcon className="w-5 h-5" /> */}
  //           <div className="pl-2 hidden lg:block">Lagre</div>
  //         </button>

  //         {recipe.source ? (
  //           <a
  //             href={recipe.source}
  //             className="button flex flex-row items-center"
  //           >
  //             {/* <ExternalLinkIcon className="w-5 h-5" /> */}
  //             <div className="pl-2 hidden lg:block">Kilde</div>
  //           </a>
  //         ) : null}
  //       </div>
  //     </section>

  //     {recipe.description ? (
  //       <section className="hidden lg:block container mx-auto px-4 sm:px-0 bg-white text-center">
  //         <RecipeMarkdown markdown={recipe.description} />
  //       </section>
  //     ) : null}

  //     <section className="container mx-auto px-4 sm:px-0 bg-white flex flex-col sm:flex-row gap-4">

  //       <div className="sm:w-1/2 xl:w-5/12">
  //         <div className="p-2 text-lg uppercase bg-gray-100 text-gray-600">
  //           Ingredienser
  //         </div>
  //         <RecipeMarkdown markdown={recipe.ingredients} />
  //       </div>

  //       <div className="sm:w-1/2 xl:w-7/12">
  //         <div className="p-2 text-lg uppercase bg-gray-100 text-gray-600">
  //           Fremgangsmåte
  //         </div>
  //         <RecipeMarkdown markdown={recipe.steps} />
  //       </div>
  //     </section>
  //   </>
  // )
}

export function CatchBoundary() {
  const caught = useCatch();
  const { slug } = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className="error-container">
          Fant ingen oppskrift med id: "{slug}"
        </div>
      );
    }
    case 401: {
      return (
        <div className="error-container">
          Du har ikke tilgang til oppskrift med id: "{slug}"
        </div>
      );
    }
    default: {
      throw new Error(`Ukjent feil: ${caught.status}`);
    }
  }
}

// TODO: make pertier or remove to catch higher up ? (throw new Error("wooo") in loader to view)
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  const { slug } = useParams();
  return (
    <div className="error-container">Det skjedde en feil med lasting av oppskrift med id: "{slug}".</div>
  );
}