import React, { HTMLAttributes, RefObject, useRef, KeyboardEvent, createElement } from 'react'
import EditableElement from './EditableElement';
import { insertAfter } from './utils';

export interface BlockType {
  id: string
  tag: "p"|"h1"
  textContent: [string,string][],
  spanRef: RefObject<HTMLSpanElement>
}

export interface EditableBlockProps extends HTMLAttributes<HTMLElement> {
  spanRef: RefObject<HTMLSpanElement>
}

export default function EditableBlock(props:EditableBlockProps) {
  const { spanRef } = props
  const thisRef = useRef<HTMLDivElement>(null);

  return (
    <p
    ref={thisRef}
    >
      <EditableElement
      spanRef={spanRef}
      parentRef={thisRef}
      />
    </p>
  )
}
