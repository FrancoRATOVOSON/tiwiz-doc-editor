import React from 'react';
import ReactDOM from 'react-dom';
import EditorContainer from './EditorContainer';

import "./index.css"

export default function App() {
  return (
    <>
      <EditorContainer/>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));