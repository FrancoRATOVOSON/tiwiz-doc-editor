import React, { HTMLAttributes, RefObject } from 'react'

export interface EditableElementProps extends HTMLAttributes<HTMLElement> {
  spanRef: RefObject<HTMLSpanElement>
  parentRef: RefObject<HTMLParagraphElement|HTMLHeadingElement>
  textContent?: string
}

export default function EditableElement(props:EditableElementProps) {
  const { spanRef, textContent } = props;
  const text = textContent || "";

  return (
      <span
      ref={spanRef}
      data-type={"text"}
      >&#xFEFF;{text}</span>
  )
}
