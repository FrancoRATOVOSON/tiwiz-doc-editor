// eslint-disable-next-line no-use-before-define
import React from 'react'
import BlocTools from './BlocTools'
import StyleTools from './StyleTools'

export interface ToolButtonPropType {
  className: string
  clickAction: (_: string) => any
}

type ActionClickType = (_: string) => any

interface EditorToolbarProps {
  toggleInlineStyle: ActionClickType
  toggleBlockType: ActionClickType
}

export default function EditorToolbar(props: EditorToolbarProps) {
  const { toggleBlockType, toggleInlineStyle } = props

  return (
    <div className="toolBar shape">
      <BlocTools className="toolMenu" clickAction={toggleBlockType} />
      <div className="separator" />
      <StyleTools className="toolMenu" clickAction={toggleInlineStyle} />
    </div>
  )
}
