import { ContentState, EditorChangeType, EditorState, Modifier, SelectionState } from 'draft-js'
import { ReactElement } from 'react'

export interface ToolOptionType {
  label: string
  style: string
  icon: () => ReactElement
}

export function guidGenerator() {
  const S4 = () => ((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}

interface SetBlockTypeParams {
  content: ContentState
  selection: SelectionState
  blockType: string
}

interface EditorPushParams {
  editorState: EditorState
  changeType: EditorChangeType
}

export function changeBlockType(
  setBlockTypeParams: SetBlockTypeParams,
  editorPushParams: EditorPushParams
): EditorState {
  const { content, selection, blockType } = setBlockTypeParams
  const { editorState, changeType } = editorPushParams
  const newContent = Modifier.setBlockType(content, selection, blockType)
  return EditorState.push(editorState, newContent, changeType)
}
