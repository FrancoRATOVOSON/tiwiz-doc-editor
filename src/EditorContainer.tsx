import { DraftEditorCommand, DraftHandleValue, Editor, EditorState, RichUtils } from 'draft-js'
// eslint-disable-next-line no-use-before-define
import React, { useState, createRef } from 'react'
import EditorToolbar from './EditorToolbar'

import 'draft-js/dist/Draft.css'
import './editor.css'
import { blockStyling } from './BlocTypes'

// interface SyntheticKeyboardEvent extends KeyboardEvent {}

export default function EditorContainer() {
  const [editorState, seteditorState] = useState(() => EditorState.createEmpty())
  const editorRef = createRef<Editor>()

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorstate: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorstate, command)

    if (newState) {
      seteditorState(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  const toggleInlineStyle = (style: string) =>
    seteditorState(RichUtils.toggleInlineStyle(editorState, style))

  const toggleBlockType = (block: string) =>
    seteditorState(RichUtils.toggleBlockType(editorState, block))

  return (
    <div className="editor-container">
      <EditorToolbar toggleInlineStyle={toggleInlineStyle} toggleBlockType={toggleBlockType} />
      <div className="editor shape" onClick={() => editorRef.current?.focus()}>
        <Editor
          editorState={editorState}
          onChange={seteditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Write here..."
          ref={editorRef}
          blockStyleFn={blockStyling}
        />
      </div>
    </div>
  )
}
