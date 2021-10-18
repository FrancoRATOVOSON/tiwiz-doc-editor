import { DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js'
import React, { useState } from 'react'

import 'draft-js/dist/Draft.css'

export default function EditorContainer() {
  const [editorState, seteditorState] = useState(() => EditorState.createEmpty())

  const handleKeyCommand = (command:DraftEditorCommand, editorState:EditorState):DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    if (newState) {
      seteditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  const toggleBold = () => seteditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))

  return (
    <div>
      <button onClick={toggleBold}>Bold</button>
      <Editor
        editorState={editorState}
        onChange={seteditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  )
}
