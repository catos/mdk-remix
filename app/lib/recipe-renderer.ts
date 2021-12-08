import { marked } from "marked"

export default function recipeRenderer() {
  var render = new marked.Renderer()

  // render just the text of a paragraph
  render.paragraph = function (text) {
    return `<p className="py-3">${text}</p>`
  }

  // render just the text of a heading element, but indecate level
  render.heading = function (text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-")
    return `
      <h${level}>
        <a name="${escapedText}" href="#${escapedText}">
          ${text}
        </a>
      </h${level}>`
  }

  // render nothing for images
  // render.image = function (href, title, text) {
  //   return ''
  // }

  return render
}
