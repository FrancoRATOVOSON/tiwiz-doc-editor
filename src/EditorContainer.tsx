import React, { useState, createRef } from 'react'
import {
  ContentBlock,
  DefaultDraftBlockRenderMap,
  DraftEditorCommand,
  DraftHandleValue,
  DraftStyleMap,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js'
import { Map } from 'immutable'
import { blockStyling } from './utils/BlocTypes'
import 'draft-js/dist/Draft.css'
import './editor.css'
import MediaComponent from './components/MediaComponent'
import EditorStateContext from './contexts/editorStateContext'
import ResizableComponent from './components/ResizableComponent'
import EditorToolbar from './components/Toolbar/EditorToolbar'

function mediaRenderer(contentBlock: ContentBlock) {
  const type = contentBlock.getType()

  if (type === 'atomic') {
    return {
      component: MediaComponent,
      editable: false,
    }
  }
  return null
}

const blockRendeMap = Map({
  atomic: {
    element: 'figure',
    wrapper: <ResizableComponent />,
  },
})

const customStylesMap: DraftStyleMap = {
  LEFTALIGN: {
    textAlign: 'left',
  },
  RIGHTALIGN: {
    textAlign: 'right',
  },
  CENTERALIGN: {
    textAlign: 'center',
  },
  JUSTIFYALIGN: {
    textAlign: 'justify',
  },
}

const extendedRenderMap = DefaultDraftBlockRenderMap.merge(blockRendeMap)

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
    <EditorStateContext.Provider
      value={{ editorstate: editorState, seteditorstate: seteditorState }}
    >
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
            blockRendererFn={mediaRenderer}
            blockRenderMap={extendedRenderMap}
            customStyleMap={customStylesMap}
          />
        </div>
      </div>
    </EditorStateContext.Provider>
  )
}
