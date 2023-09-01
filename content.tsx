import * as $ from "jquery"

import ReactDomServer from 'react-dom/server';
import { useStorage } from "@plasmohq/storage/hook"

function render(url) {
  $('p:contains("[[")').map(function () {
    let text = this.innerHTML
    text = text.replace(/\[\[(.*?)\]\]/g,`[[<a href='${url}/$1'>$1</a>]]`)
    this.innerHTML = text
  })
}

  function Content() {
    let [url] = useStorage("url")
    if(!url){return }
    setTimeout(() => render(url), 1000)
  return <span></span>
}

export default Content

