import * as $ from "jquery"

import Wikilink from "./wikilink"
import ReactDomServer from 'react-dom/server';
import { useStorage } from "@plasmohq/storage/hook"

function render(wikilink) {
  $('p:contains("[[")').map(function () {
    let text = this.innerHTML
    text = text.replace(/\[\[(.*?)\]\]/g, ReactDomServer.renderToString(wikilink))
    this.innerHTML = text
  })
}


function Wikilink({url}){
  url = `${url}/$1`
  return (
    <span>[[<a href={url}>$1</a>]]</span>
    )
  }
  
  function foo() {
    let [url] = useStorage("url")
    if(!url){return }
    let wikilink = <Wikilink url={url} />
    setTimeout(() => render(wikilink), 100)
  return <span></span>
}

export default foo

