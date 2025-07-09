import React, { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import Dropzone from '../dropzone/Dropzone'

const FileProcessor = () => {
    const [showCamera, setShowCamera] = useState(false)
    const [image, setImage] = useState(null)
    const webCamRef = useRef(null)
    const [uploadType, setUploadType] = useState('dropzone')
    const [facingMode, setFacingMode] = useState('user')

    /*const [hasMultipleCameras, setHasMultipleCameras] = useState(false)

    // Detect multiple video input devices
    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            const videoDevices = devices.filter((device) => device.kind === 'videoinput')
            setHasMultipleCameras(videoDevices.length > 1)
        })
    }, [])*/

    const capture = () => {
        const screenshot = webCamRef.current.getScreenshot()
        if (screenshot) {
            setImage(screenshot)
        }
    }

    const toggleCamera = () => {
        setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))
    }

    const handleUploadType = (type) => {
        setUploadType(type)
    }

    const videoConstraints = {
        facingMode: facingMode,
        width: 1280,
        height: 720,
    }

    return (
        <div>
            <div className='flex flex-row justify-center gap-10'>
                <button
                    className={`px-2 py-1 rounded-sm text-[0.9rem] ${uploadType === 'dropzone'
                        ? 'border border-[border] text-primary'
                        : 'border border-gray-400 text-gray-400'
                        }`}
                    onClick={() => handleUploadType('dropzone')}
                >
                    DropZone
                </button>
                <button
                    className={`px-2 py-1 rounded-sm text-[0.9rem] ${uploadType === 'captureImage'
                        ? 'border border-black text-black'
                        : 'border border-gray-400 text-gray-400'
                        }`}
                    onClick={() => handleUploadType('captureImage')}
                >
                    Capture Image
                </button>
            </div>

            {uploadType === 'dropzone' ? (
                <Dropzone onImageSelect={(url) => setImage(url)} />
            ) : (
                <div className='m-10 flex justify-center items-center flex-col gap-5'>
                    <div className='flex gap-4'>
                        <button
                            onClick={() => setShowCamera(!showCamera)}
                            className='p-2 bg-black text-white rounded'
                        >
                            {showCamera ? 'Close Camera' : 'Open Camera'}
                        </button>
                        {showCamera && (
                            <button
                                onClick={toggleCamera}
                                className='p-2 bg-gray-600 text-white rounded'
                            >
                                Flip Camera
                            </button>
                        )}
                    </div>

                    {showCamera && (
                        <div>
                            <Webcam
                                ref={webCamRef}
                                screenshotQuality={1}
                                videoConstraints={videoConstraints}
                                className='w-full max-w-lg rounded shadow'
                            />
                            <div className='flex justify-end mt-2'>
                                <button
                                    onClick={capture}
                                    className='px-4 py-1 bg-blue-600 text-white rounded'
                                >
                                    Capture
                                </button>
                            </div>
                        </div>
                    )}

                    {image && (
                        <div className='mt-4'>
                            <img src={image} alt="Captured" className='max-w-xs rounded border' />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default FileProcessor
