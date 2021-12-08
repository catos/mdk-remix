import { marked } from "marked"

function htmlEscapeToText(text: string) {
  return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
    if (escapeCode.match(/amp/)) {
      return '&';
    }

    //   return String.fromCharCode(escapeCode.match(/[0-9]+/));

    return text
  });
}

export default function Test() {

  const renderUnlink = () => {
    var render = new marked.Renderer()
    render.link = function (href, title, text) {
      // render link text in a way that is appropriate
      // for a medium that is not a computer connected
      // to the Internet
      return text + ' ( link to: ' + href + ' )'
    }
    return render
  }

  const renderPlain = () => {
    var render = new marked.Renderer()
    render.link = function (href, title, text) {
      return text
    }

    // render just the text of a paragraph
    render.paragraph = function (text) {
      return htmlEscapeToText(text) + '\r\n'
    }

    // render just the text of a heading element, but indecate level
    render.heading = function (text, level) {
      return level + ' ) ' + text
    }

    // render nothing for images
    render.image = function (href, title, text) {
      return ''
    }

    return render
  }

  // const md = 'this is some example markdown with [a link](github.com).'
  const md = '# This is the markdown! \r\n it can have [links](github.com), and images \r\n![the image](foo.png)'

  const html = marked(md, {
    // renderer: renderUnlink()
    renderer: renderPlain()
  })

  return (
    <div className="container mx-auto px-4 sm:px-0">
      <h1>Test</h1>

      <pre className="my-4">{md}</pre>

      <hr />

      <div className="my-4" dangerouslySetInnerHTML={{ __html: html }} />

    </div>
  )
}