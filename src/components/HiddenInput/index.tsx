import React, { createRef, useContext } from 'react'
import EditorStateContext from '../../contexts/editorStateContext'
import { insertImage } from '../../utils/BlocTypes'

export default function HiddenInput() {
  const { editorstate, seteditorstate } = useContext(EditorStateContext)
  const inputRef = createRef<HTMLInputElement>()

  const handleImageChanges = () => {
    if (inputRef.current && inputRef.current.files && inputRef.current.files.length > 0) {
      const selectedFile = inputRef.current.files[0]
      inputRef.current.value = ''
      const reader = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onload = () => {
        const imageInfos = {
          src: reader.result ? reader.result.toString() : selectedFile.name,
          alt: selectedFile.name,
        }
        seteditorstate(insertImage(editorstate, imageInfos))
      }
      reader.onerror = () => {
        alert('Something went wrong')
      }
    } else {
      alert('No file selected')
    }
  }

  return (
    <input
      id="fileUpload"
      type="file"
      className="hidden"
      ref={inputRef}
      onChange={handleImageChanges}
    />
  )
}
