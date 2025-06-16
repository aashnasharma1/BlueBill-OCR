import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = () => {
  const [preview, setPreview] = useState(null)
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles) {
      setPreview(acceptedFiles[0].name)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} className='p-10 m-10 border border-neutral-200 border-dashed'>
      <input {...getInputProps()} />
      {
        isDragActive ?
          (
            <p>Drop the files here ...</p>
          ) :
          preview ? (
            <p className='text-gray-400 text-sm flex items-center justify-center flex-col gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
            </svg>
              {preview}</p>
          ) : (<p className='text-gray-400 text-sm flex items-center justify-center flex-col gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
            </svg>
            Drag and drop some files here, or click to select files</p>)
      }
    </div>

  )
}

export default Dropzone