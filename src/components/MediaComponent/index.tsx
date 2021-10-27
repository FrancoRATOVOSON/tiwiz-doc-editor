import { ContentBlock, ContentState } from 'draft-js'
import React from 'react'
import ImageComponent from './ImageComponent'

export interface MediaComponentProps {
  contentState: ContentState
  block: ContentBlock
}

export default function MediaComponent(props: MediaComponentProps) {
  const { contentState, block } = props
  const entity = contentState.getEntity(block.getEntityAt(0))
  const { src, alt } = entity.getData()

  return <ImageComponent src={src} alt={alt} />
}
