import React, { useState, useEffect, useRef } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaSearchMinus,
  FaSearchPlus,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

interface ImageModalProps {
  isOpen: boolean;
  imgSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  isOpen,
  imgSrc,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, [imgSrc]);

  useEffect(() => {
    if (zoom < 1) {
      setOffset({ x: 0, y: 0 });
    }
  }, [zoom]);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    startPos.current = {
      x: clientX - offset.x,
      y: clientY - offset.y,
    };

    if (e.type === "touchstart") {
      e.preventDefault();
    }
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDragging || !imgRef.current) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const newX = clientX - startPos.current.x;
    const newY = clientY - startPos.current.y;

    // Calculate boundaries
    const imgRect = imgRef.current.getBoundingClientRect();
    const scaledWidth = imgRect.width * zoom;
    const scaledHeight = imgRect.height * zoom;

    const maxX = Math.max(0, (scaledWidth - window.innerWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - window.innerHeight) / 2);

    const clampedX = Math.max(-maxX, Math.min(maxX, newX));
    const clampedY = Math.max(-maxY, Math.min(maxY, newY));

    setOffset({ x: clampedX, y: clampedY });

    if (e.type === "touchmove") {
      e.preventDefault();
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onMouseMove={handleMove}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      onTouchMove={handleMove}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          ref={imgRef}
          src={imgSrc}
          alt="Enlarged view"
          className="select-none"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "auto",
            transition: isDragging
              ? "none"
              : "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            touchAction: "none",
            userSelect: "none",
          }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/50 text-black rounded-full p-3 hover:bg-gray-200 shadow-lg transition-colors cursor-pointer"
        >
          <FaTimes />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-black rounded-full p-3 hover:bg-gray-200 shadow-lg transition-colors cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-black rounded-full p-3 hover:bg-gray-200 shadow-lg transition-colors cursor-pointer"
        >
          <FaChevronRight />
        </button>

        {/* Controls Container */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/50 rounded-lg p-2 shadow-lg backdrop-blur-sm">
          <button
            onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.2))}
            className="px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <FaSearchMinus /> Zoom Out
          </button>
          <button
            onClick={() => setZoom((prev) => Math.min(3, prev + 0.2))}
            className="px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <FaSearchPlus /> Zoom In
          </button>
          <button
            onClick={handleFullscreen}
            className="px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />} Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
}
