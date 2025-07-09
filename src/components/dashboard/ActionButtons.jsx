import React, { useState, useEffect } from "react";
import { Download, RotateCw, RotateCcw, ZoomIn, ZoomOut, Maximize2, Plus } from "lucide-react";
import Invoice from "../../assets/Invoice-Format.webp";

const ActionButtons = ({ imageRef }) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `scale(${zoom}) rotate(${rotation}deg)`;
      imageRef.current.style.transformOrigin = "center";
    }
  }, [zoom, rotation, imageRef]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));
  const handleRotate = () => setRotation((prev) => prev + 90);
  const handleRotateCCW = () => setRotation((prev) => prev - 90);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Invoice;
    link.download = "Invoice.png";
    link.click();
  };
  const handleFullscreen = () => {
    if (!imageRef.current) return;


    const clone = imageRef.current.cloneNode(true);
    clone.style.transform = "none";
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.objectFit = "contain";
    clone.style.border = "none";
    clone.style.transition = "transform 0.3s ease, opacity 0.3s ease";

    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.style.backgroundColor = "#000";
    fullscreenContainer.style.display = "flex";
    fullscreenContainer.style.justifyContent = "center";
    fullscreenContainer.style.alignItems = "center";
    fullscreenContainer.style.width = "100%";
    fullscreenContainer.style.height = "100%";

    fullscreenContainer.appendChild(clone);
    document.body.appendChild(fullscreenContainer);


    if (fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen();
    }


    const cleanup = () => {
      if (document.fullscreenElement === fullscreenContainer) {
        document.exitFullscreen();
      }
      fullscreenContainer.remove();
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };

    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        cleanup();
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
  };


  return (
    <div className="fixed top-168  flex flex-row gap-3 z-50">

      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md border px-2 py-1 rounded shadow-md">
        <button onClick={handleZoomOut} title="Zoom Out">
          <ZoomOut size={18} />
        </button>
        <span className="text-xs text-center text-gray-900">{Math.round(zoom * 100)}%</span>
        <button onClick={handleZoomIn} title="Zoom In">
          <ZoomIn size={18} />
        </button>
      </div>

      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border px-2 py-1 rounded shadow-md">
        <button onClick={handleRotate} title="Rotate">
          <RotateCw size={18} />
        </button>
        <button onClick={handleRotateCCW} title="Rotate Counterclockwise">
          <RotateCcw size={18} />
        </button>
      </div>

      <button onClick={handleDownload} title="Download" className="bg-white/90 backdrop-blur-md border px-2 py-1 rounded shadow-md">
        <Download size={18} />
      </button>
      <button onClick={handleFullscreen} title="Fullscreen" className="bg-white/90 backdrop-blur-md border px-2 py-1 rounded shadow-md">
        <Maximize2 size={18} />
      </button>
    </div>
  );
};

export default ActionButtons;
