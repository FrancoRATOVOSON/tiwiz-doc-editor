import React, { HTMLAttributes } from 'react'
import ResizeIcon from '../../assets/icons/components/Utils/ResizeIcon'

export default function ResizeButton(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" {...props}>
      <ResizeIcon />
    </button>
  )
}
