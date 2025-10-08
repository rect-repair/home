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
    const { windows, closeWindow, bringToFront, updateWindowPosition, updateWindowSize } = useWindow();
    const [isDragging, setIsDragging] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const windowRef = useRef<HTMLDivElement>(null);
    const [originalPosition, setOriginalPosition] = useState({ x: initialX, y: initialY });
    const [originalSize, setOriginalSize] = useState({ width: initialWidth, height: initialHeight });

    const windowState = windows.find(w => w.id === id);

    if (!windowState || !windowState.isVisible) return null;

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            closeWindow(id);
        }
    };

    const handleFullscreen = () => {
        if (isFullscreen) {
            // Restore to original size and position
            updateWindowPosition(id, originalPosition.x, originalPosition.y);
            updateWindowSize(id, originalSize.width, originalSize.height);
            setIsFullscreen(false);
        } else {
            // Save current position and size
            setOriginalPosition({ x: windowState.x, y: windowState.y });
            setOriginalSize({ width: windowState.width, height: windowState.height });
            // Go fullscreen
            updateWindowPosition(id, 0, 0);
            updateWindowSize(id, window.innerWidth, window.innerHeight);
            setIsFullscreen(true);
        }
        bringToFront(id);
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
                <div className="flex space-x-2">
                    <button
                        onClick={handleFullscreen}
                        className="retro-button w-8 h-8 flex items-center justify-center p-0"
                        title={isFullscreen ? "Restore" : "Maximize"}
                    >
                        {isFullscreen ? <img src="/images/icons/smol.png" alt="Fullscreen" className="w-8 h-8" /> : <img src="/images/icons/square.png" alt="Fullscreen" className="w-8 h-8" />}
                    </button>
                    <button
                        onClick={handleClose}
                        className="retro-button w-8 h-8 flex items-center justify-center p-0"
                        title="Close"
                    >
                        <img src="/images/icons/x.png" alt="Close" className="w-8 h-8" />
                    </button>
                </div>
            </div>
            <div className="retro-window-content">
                {children}
            </div>
        </div>
    );

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
