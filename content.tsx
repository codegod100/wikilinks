import * as $ from "jquery"

import { useStorage } from "@plasmohq/storage/hook"

function render(url) {
  console.log("render")
  $('p:contains("[[")').map(function () {
    let text = this.innerHTML
    text = text.replace(
      /\[\[([a-zA-Z0-9  -/]+?)\]\]/g,
      `[[<a href='${url}/$1'>$1</a>]]`
    )
    this.innerHTML = text
  })
}
let interval
function Content() {
  if (interval) {
    clearInterval(interval)
  }
  let [url] = useStorage("url")
  console.log({ url })
  // url = url || "https://anagora.org"
  if (url) {
    interval = setInterval(() => render(url), 1000)
  }
  return <span></span>
}

export default Content
