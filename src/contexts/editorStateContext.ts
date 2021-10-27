import { EditorState } from 'draft-js'
import { createContext, SetStateAction } from 'react'

interface EditorStateContextType {
  editorstate: EditorState
  seteditorstate: (_: SetStateAction<EditorState>) => void
}

const defaultState = {
  editorstate: EditorState.createEmpty(),
  seteditorstate(_: SetStateAction<EditorState>) {},
}

const EditorStateContext = createContext<EditorStateContextType>(defaultState)

export default EditorStateContext
