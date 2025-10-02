'use client';

import React, { useState, useRef, useEffect } from 'react';
import CustomDraggable from './CustomDraggable';
import { WindowProps } from '@/types/window';
import { useWindow } from '@/contexts/WindowContext';

export default function Window({
  id,
  title,
  children,
  initialWidth = 400,
  initialHeight = 300,
  initialX = 100,
  initialY = 100,
  onClose,
}: WindowProps) {
  const { windows, closeWindow, bringToFront, updateWindowPosition } = useWindow();
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  
  const windowState = windows.find(w => w.id === id);
  
  if (!windowState || !windowState.isVisible) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      closeWindow(id);
    }
  };



  const handleMouseDown = () => {
    bringToFront(id);
  };

  const handleDrag = (e: any, data: any) => {
    // Update the window position in the context
    updateWindowPosition(id, data.x, data.y);
  };


  const windowContent = (
    <div
      ref={windowRef}
      className="retro-window"
      style={{
        width: windowState.width,
        height: windowState.height,
        position: 'absolute',
        zIndex: windowState.zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="retro-window-titlebar">
        <span className="flex-1 truncate">{title}</span>
        <div className="flex space-x-1">
          <button
            onClick={handleClose}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Close"
          >
            <img src="/images/icons/close.png" alt="Close" className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="retro-window-content">
        {children}
      </div>
    </div>
  );

  if (windowState.isMaximized) {
    return windowContent;
  }

  return (
    <CustomDraggable
      position={{ x: windowState.x, y: windowState.y }}
      onDrag={handleDrag}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
      handle=".retro-window-titlebar"
      bounds="parent"
    >
      {windowContent}
    </CustomDraggable>
  );
}
