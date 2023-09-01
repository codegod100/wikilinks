import { useStorage } from "@plasmohq/storage/hook"
function IndexPopup() {
  const [url, setUrl] = useStorage("url", "https://anagora.org")
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 500
      }}>
      <h1>Set agora url</h1>
      <input type="text" value={url} onChange={e => setUrl (e.target.value)}  />
    </div>


  )
}

export default IndexPopup
