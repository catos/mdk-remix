import { Link } from "remix";

export default function Index() {
  return (
    <p>
      <Link to="new">Create a new recipe</Link>
    </p>
  )
}