import React, { MouseEvent } from 'react'
import StyleTypeList from '../../utils/StyleTypes'
import ToolButton from '../ToolButton'
import { ToolButtonPropType } from './EditorToolbar'

export default function StyleTools(props: ToolButtonPropType) {
  const { className, clickAction } = props
  return (
    <div className={className}>
      {StyleTypeList.map(style => (
        <ToolButton
          title={style.label}
          key={style.style}
          onMouseDown={(event: MouseEvent) => {
            event.preventDefault()
            clickAction(style.style)
          }}
        >
          <style.icon />
        </ToolButton>
      ))}
    </div>
  )
}
