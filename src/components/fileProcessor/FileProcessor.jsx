import { Button } from '@headlessui/react'
import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import Dropzone from '../dropzone/Dropzone'

const FileProcessor = () => {
    const [showCamera, setShowCamera] = useState(false)
    const [image, setImage] = useState(null)
    const webCamRef = useRef(null)
    const [uploadType, setUploadType] = useState('dropzone')
    const capture = () => {
        const screenshot = webCamRef.current.getScreenshot()
        if (screenshot) {
            setImage(screenshot)
        }
    }
    const handleUploadType = (type) =>{
        setUploadType(type)
    }
    return (
        <div>
            <div className='flex flex-row  justify-center gap-10'>
                <button className={`px-2 py-1 rounded-sm text-[0.9rem] ${uploadType==='dropzone'?' border border-black text-black':'border border-gray-400 text-gray-400'}`} onClick={() => handleUploadType('dropzone')}>DropZone</button>
                <button className={`px-2 py-1 rounded-sm text-[0.9rem] ${uploadType==='captureImage'?'border border-black text-black':'border border-gray-400 text-gray-400'}`} onClick={() => handleUploadType('captureImage')}>Capture Image</button>
            </div>

            {
                (uploadType === 'dropzone') ? <Dropzone /> :
                    <div className={`m-10 flex justify-center items-center flex-col gap-5 ${uploadType === 'dropzone' ? 'border border-neutral-200 border-dashed': 'border-none'} `}>
                        <button onClick={() => setShowCamera(!showCamera)} className='p-2 bg-black text-white rounded w-35'>
                            {showCamera ? "Close Camera" : "Open Camera"}
                        </button>
                        {showCamera && (
                            <div>
                                <Webcam
                                    ref={webCamRef}
                                    screenshotQuality={1} 
                                    className='w-[full]'/>
                               <div className='flex justify-end'>
                                 <button onClick={capture} className='px-2 py-[.2rem] bg-blue-600 text-white rounded mt-2 '>Capture</button>
                                </div>
                            </div>
                        )}

                        {image && (
                            <div>
                                <img src={image} />
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}

export default FileProcessor