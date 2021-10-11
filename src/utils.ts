import crypto from "crypto";
import { createRef, ReactNode } from "react";
import { BlockType } from "./EditableBlock";

export function getUid() {
  return crypto.randomBytes(16).toString("hex");
}

export function createNewBlock(tag:"p"|"h1"="p"):BlockType {
  return {
    id: getUid(),
    tag,
    textContent: [["normal",""]],
    spanRef: createRef<HTMLSpanElement>()
  }
}

export function insertAfter(newNode:Element, referenceNode:Element) {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
}

export function getSelectedSpanRef() {
  const sel = window.getSelection();
  let range = [];
  if (sel?.rangeCount)
    for (let i = 0; i < sel.rangeCount; ++i)
      range.push(sel.getRangeAt(i));

  return range[0].commonAncestorContainer.parentElement;
}

export function addBlockToList(blockList:BlockType[],newBlock:BlockType):BlockType[] {
  const refList = blockList.map(b => b.spanRef.current);
  const index = refList.indexOf(getSelectedSpanRef());

  const newBlockList = [...blockList];
  newBlockList.splice(index+1, 0, newBlock);
  newBlockList[index+1].spanRef.current?.focus();

  return newBlockList;
}