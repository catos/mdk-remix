import { Link } from "remix";
import { IRecipe } from "~/firebase/recipe-service";

export default function RecipeCard({ recipe }: { recipe: IRecipe }) {
  return (
    <Link
      to={recipe.id}
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <img
        className="w-full h-64 object-cover"
        src={recipe.image}
        alt={recipe.name}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute right-2 bottom-2 left-2 z-10 text-white uppercase text-center text-base">
        {recipe.name}
      </div>
    </Link>
  )
}