// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { hideTitleList } from './BlocTools'
import EditorContainer from './EditorContainer'
import './index.css'

export default function App() {
  useEffect(() => {
    window.addEventListener('mousedown', () => hideTitleList())
  }, [])

  return (
    <>
      <EditorContainer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
