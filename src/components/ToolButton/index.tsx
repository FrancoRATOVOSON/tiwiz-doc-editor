/* eslint-disable react/jsx-props-no-spreading */
import React, { HTMLAttributes } from 'react'

export default function ToolButton(props: HTMLAttributes<HTMLButtonElement>) {
  const { children, className, ...attr } = props
  return (
    <button type="button" {...attr} className={`${className || ''} toolButton`}>
      {children}
    </button>
  )
}
