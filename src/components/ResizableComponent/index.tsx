import React, { HTMLAttributes, MouseEvent, useState } from 'react'
import ResizeButton from '../ResizeButton'

import './styles.css'

export default function ResizableComponent(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props
  const [drag, setDrag] = useState({
    active: false,
    x: 0,
    y: 0,
  })
  const [dims, setDims] = useState({
    w: 200,
    h: 200,
  })
  const boxStyle = {
    with: `${dims.w}px`,
    height: `${dims.h}px`,
  }

  const startResize = (event: MouseEvent) => {
    setDrag({
      active: true,
      x: event.clientX,
      y: event.clientY,
    })
  }

  const resizeFrame = (event: MouseEvent) => {
    const { active, x, y } = drag
    if (active) {
      const xDiff = Math.abs(x - event.clientX)
      const yDiff = Math.abs(y - event.clientY)

      const newW = x > event.clientX ? dims.w - xDiff : dims.w + xDiff
      const newH = y > event.clientY ? dims.h - yDiff : dims.h + yDiff

      setDrag({ ...drag, x: event.clientX, y: event.clientY })
      setDims({ w: newW, h: newH })
    }
  }

  const stopResize = () => {
    setDrag({ ...drag, active: false })
  }

  return (
    <div className="ResizableComponent" onMouseMove={resizeFrame} onMouseUp={stopResize}>
      <div className="ContentBox" style={boxStyle}>
        {children}
      </div>
      <ResizeButton className="DragButton" onMouseDown={startResize} />
    </div>
  )
}
