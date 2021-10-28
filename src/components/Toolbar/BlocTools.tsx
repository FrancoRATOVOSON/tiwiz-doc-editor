import React, { MouseEvent } from 'react'
import ImageIcon from '../../assets/icons/components/Blocs/ImageIcon'
import Title from '../../assets/icons/components/Titles/Title'
import { BlocTypeList, TitleList } from '../../utils/BlocTypes'
import HiddenInput from '../HiddenInput'
import ToolButton from '../ToolButton'
import './BlocTools.css'
import { ToolButtonPropType } from './EditorToolbar'

const toggleTitleList = (show: boolean) => {
  const titleList = document.getElementById('titleList')
  if (titleList) {
    const clasToAdd = show ? 'menu-show' : 'hidden'
    const classToRemove = show ? 'hidden' : 'menu-show'
    titleList.classList.remove(classToRemove)
    titleList.classList.add(clasToAdd)
  }
}

export const showTitleList = () => toggleTitleList(true)

export const hideTitleList = () => toggleTitleList(false)

export default function BlocTools(props: ToolButtonPropType) {
  const { className, clickAction } = props

  const TitleListView = () => (
    <div
      id="titleList"
      className="hidden"
      onBlur={() => hideTitleList()}
      onMouseLeave={() => hideTitleList()}
    >
      {TitleList.map(title => (
        <ToolButton
          title={title.label}
          key={title.style}
          onMouseDown={(event: MouseEvent) => {
            event.preventDefault()
            clickAction(title.style)
            hideTitleList()
          }}
        >
          <title.icon />
        </ToolButton>
      ))}
    </div>
  )

  const BlockListView = () => (
    <>
      {BlocTypeList.map(title => (
        <ToolButton
          title={title.label}
          key={title.style}
          onMouseDown={(event: MouseEvent) => {
            event.preventDefault()
            clickAction(title.style)
          }}
        >
          <title.icon />
        </ToolButton>
      ))}
    </>
  )

  return (
    <div className={className}>
      <TitleListView />
      <ToolButton
        onMouseOver={(event: MouseEvent) => {
          showTitleList()
          event.stopPropagation()
        }}
      >
        <Title />
      </ToolButton>
      <BlockListView />
      <ToolButton
        title="Image"
        onMouseDown={(event: MouseEvent) => {
          event.preventDefault()

          document.getElementById('fileUpload')?.click()
        }}
      >
        <ImageIcon />
        <HiddenInput />
      </ToolButton>
    </div>
  )
}
