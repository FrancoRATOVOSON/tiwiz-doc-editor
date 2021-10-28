import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { hideTitleList } from './components/Toolbar/BlocTools'
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
