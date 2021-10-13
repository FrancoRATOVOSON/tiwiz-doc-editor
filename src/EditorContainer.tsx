import React, { useRef, KeyboardEvent, useState, createRef, RefObject } from 'react'
import EditableBlock, { BlockType } from './EditableBlock';
import { addBlockToList, createNewBlock, getUid } from './utils';

const initialBlockList:BlockType[] = [
  {
    id: getUid(),
    tag: "p",
    textContent: [["normal",""]],
    spanRef: createRef<HTMLSpanElement>()
  }
]

export default function EditorContainer() {
  const [blockList, setBlockList] = useState(initialBlockList);
  const div = useRef<HTMLDivElement>(null);
  const span = useRef<HTMLSpanElement>(null);

  const onKeyDownHandler = (event:KeyboardEvent) => {
    
    switch (event.key) {
      case "Backspace":
        if (span.current && span.current.textContent?.length === 1) {
          event.preventDefault();
        }
        break;
      case "Enter":
        event.preventDefault();
        setBlockList(addBlockToList(blockList,createNewBlock()));
      default:
        break;
    }
  }

  return (
    <div
    className="block"
    ref={div}
    contentEditable={true}
    onKeyDown={onKeyDownHandler}
    suppressContentEditableWarning={true}
    role="textbox"
    spellCheck={true}
    >
      {
        blockList.map(block => <EditableBlock
        key={block.id}
        spanRef={block.spanRef}
        />)
      }
    </div>
  )
}
