import React from 'react'

export interface ImageComponentProps {
  src: string
  alt: string
}

export default function ImageComponent(props: ImageComponentProps) {
  const { src, alt } = props
  return <img src={src} alt={alt} />
}
