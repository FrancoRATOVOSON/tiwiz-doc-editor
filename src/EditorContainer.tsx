import React, { useRef, KeyboardEvent, useState, createRef, RefObject, useEffect } from 'react'
import EditableBlock, { BlockType } from './EditableBlock';
import { addBlockToList, createNewBlock, getSelectedSpanRef, getUid, removeBlockFromList, setCaret } from './utils';

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
  const [current, setCurrent] = useState(0);
  const div = useRef<HTMLDivElement>(null);
  const span = useRef<HTMLSpanElement>(null);

  const updateEditor = (updateParams:[BlockType[],number]) => {
    const [nexBlockList, nextCurrent] = updateParams;
    setBlockList(nexBlockList);
    setCurrent(nextCurrent);
  }

  const onKeyDownHandler = (event:KeyboardEvent) => {
    switch (event.key) {
      case "Backspace":
        const currentSpan = getSelectedSpanRef();
        if (currentSpan && currentSpan.textContent?.length === 1) {
          event.preventDefault();
          if (blockList.length > 1) {
            updateEditor(removeBlockFromList(blockList, currentSpan));
          }
        }
        break;
      case "Enter":
        event.preventDefault();
        updateEditor(addBlockToList(blockList,createNewBlock()));
      default:
        break;
    }
  }

  useEffect(() => {
    const currentSpan = blockList[current].spanRef.current;
    currentSpan && setCaret(currentSpan);
    console.log(currentSpan);
  }, [current]);

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
