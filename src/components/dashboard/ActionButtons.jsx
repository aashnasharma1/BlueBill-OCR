import React, { useState } from "react";
import { Download, RotateCw, ZoomIn, ZoomOut, Maximize2, Plus } from "lucide-react";
import Invoice from "../../assets/Invoice-Format.webp";

const ActionButtons = () => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));
  const handleRotate = () => setRotation((prev) => prev + 90);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Invoice;
    link.download = "Invoice.png";
    link.click();
  };
  const handleFullscreen = () => {
    const img = document.getElementById("invoice-image");
    if (img?.requestFullscreen) img.requestFullscreen();
  };

  return (
    <div className="fixed top-165 bg-white/90 backdrop-blur-md border px-2 py-3 rounded shadow-md flex flex-row gap-3 z-50">
      <button onClick={handleZoomOut} title="Zoom Out">
        <ZoomOut size={18} />
      </button>
      <span className="text-xs text-center text-gray-900">{Math.round(zoom * 100)}%</span>
      <button onClick={handleZoomIn} title="Zoom In">
        <Plus size={18} />
      </button>
      <button onClick={handleRotate} title="Rotate">
        <RotateCw size={18} />
      </button>
      <button onClick={handleDownload} title="Download">
        <Download size={18} />
      </button>
      <button onClick={handleFullscreen} title="Fullscreen">
        <Maximize2 size={18} />
      </button>
    </div>
  );
};

export default ActionButtons;
