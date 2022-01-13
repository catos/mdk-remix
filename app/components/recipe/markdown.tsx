import React from "react"
import Markdown from "markdown-to-jsx"
import slugify from "~/utils/slugify"
import Timer from "./timer"

type PropsType = {
  markdown: string
}

export default function RecipeMarkdown({ markdown }: PropsType) {
  return <Markdown
    children={markdown}
    options={{
      overrides: {
        h1: {
          component: H1
        },
        li: {
          component: ListItem
        },
        code: {
          component: Code
        }
      }
    }}
  />
}

type MarkdownComponentType = {
  children: string
}

function H1({ children }: MarkdownComponentType) {
  return (
    <h3 className="text-sm uppercase text-gray-500 pb-0 pt-4">
      {children}
    </h3>
  )
}

function ListItem({ children }: MarkdownComponentType) {
  const [checked, setChecked] = React.useState(false)

  const id = slugify(children[0])
  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <li className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        name={id}
        className="checkbox"
      />
      <label
        htmlFor={id}
        className={`p-3 text-base inline-block cursor-pointer whitespace-normal flex-grow ${checked ? "text-gray-500" : "inherit"}`}
      >
        {children}
      </label>
    </li>
  )
}

function Code({ children }: MarkdownComponentType) {
  const timer = parseInt(children.replace("timer:", ""))
  console.log(timer);
  if (children.startsWith("timer:")) {
    return <Timer value={timer} />
  }

  return null
}