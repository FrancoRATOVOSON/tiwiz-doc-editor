// eslint-disable-next-line no-use-before-define
import React, { MouseEvent } from 'react'
import BlocTools from './BlocTools'
import ToolButton from './components/ToolButton'

type ActionClickType = (_: string) => any

type ToolOptionType = {
  label: string
  style: string
  icon: string
}

const textFormat: ToolOptionType[] = [
  {
    label: 'Bold',
    style: 'BOLD',
    icon: 'B',
  },
  {
    label: 'Italic',
    style: 'ITALIC',
    icon: 'I',
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
    icon: 'U',
  },
  {
    label: 'Align Left',
    style: 'left',
    icon: 'aL',
  },
  {
    label: 'Align Right',
    style: 'right',
    icon: 'aR',
  },
  {
    label: 'Align Center',
    style: 'right',
    icon: 'aC',
  },
]

interface EditorToolbarProps {
  toggleInlineStyle: ActionClickType
  toggleBlockType: ActionClickType
}

interface ToolZoneProps {
  className: string
  toolList: ToolOptionType[]
  clickAction: ActionClickType
}

export default function EditorToolbar(props: EditorToolbarProps) {
  const { toggleBlockType, toggleInlineStyle } = props

  const ToolZone = ({ className, toolList, clickAction }: ToolZoneProps) => (
    <div className={className}>
      {toolList.map(tool => (
        <ToolButton
          key={tool.label}
          onMouseDown={(event: MouseEvent) => {
            event.preventDefault()
            clickAction(tool.style)
          }}
        >
          {tool.icon}
        </ToolButton>
      ))}
    </div>
  )

  return (
    <div className="toolBar shape">
      {/* <ToolZone className="BlockListZone" toolList={blocType} clickAction={toggleBlockType} /> */}
      <BlocTools className="toolMenu" clickAction={toggleBlockType} />
      <div className="separator" />
      <ToolZone className="toolMenu" toolList={textFormat} clickAction={toggleInlineStyle} />
    </div>
  )
}
