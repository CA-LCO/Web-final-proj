import { useSelector, useDispatch } from 'react-redux'
import { addLink, clearLinks, loadLinkThunk } from '../Redux/linksSlice'
import { useState } from 'react'

export default function LinksList () {
  const links = useSelector(state => state.linksStore.links)
  const dispatch = useDispatch()
  console.log(links, 'LINKS@@@')

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  return (
    <div>
      <label>Title:</label>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <label>URL:</label>
      <input type='text' value={url} onChange={e => setUrl(e.target.value)} />
      <br />
      <button onClick={() => dispatch(clearLinks())}>Clear Links</button>
      <button onClick={() => dispatch(addLink({ title, url }))}>
        Add Link{' '}
      </button>
      <button onClick={() => dispatch(loadLinkThunk())}>
        Load Links using Thunk
      </button>
      {links && links.length > 0
        ? links.map((link, i) => (
            <div key={i}>
              {link.title} - {link.url}
            </div>
          ))
        : 'No links causes error'}
    </div>
  )
}
