import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = ({ onImageSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      const imageUrl = URL.createObjectURL(file)
      setPreviewUrl(imageUrl)
      onImageSelect && onImageSelect(imageUrl)
    }
  }, [onImageSelect])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    }
  })

  return (
    <div
      {...getRootProps()}
      className='p-10 m-10 border border-neutral-200 border-dashed rounded-md cursor-pointer hover:border-gray-400 transition-all duration-300 flex justify-center items-center flex-col gap-4'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className='text-gray-500'>Drop the image here ...</p>
      ) : previewUrl ? (
        <div className='flex flex-col items-center gap-3'>
          <img
            src={previewUrl}
            alt="Preview"
            className='max-w-xs max-h-60 border rounded shadow'
          />
          <p className='text-gray-400 text-sm'>Click again to change image</p>
        </div>
      ) : (
        <div className='text-gray-400 text-sm flex items-center justify-center flex-col gap-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
          <p>Drag and drop an image here, or click to select</p>
        </div>
      )}
    </div>
  )
}

export default Dropzone
