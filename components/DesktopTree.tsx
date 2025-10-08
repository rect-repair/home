'use client';

import React, { useState, useEffect, useRef } from 'react';
import CustomDraggable from './CustomDraggable';

export default function DesktopTree() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const hasMovedRef = useRef(false);
    const dragStartRef = useRef({ x: 0, y: 0 });


    const handleDrag = (e: MouseEvent, data: { x: number; y: number }) => {
        setPosition({ x: data.x, y: data.y });
        const distance = Math.sqrt(
            Math.pow(data.x - dragStartRef.current.x, 2) +
            Math.pow(data.y - dragStartRef.current.y, 2)
        );
        if (distance > 5) {
            hasMovedRef.current = true;
        }
    };

    const handleDragStart = () => {
        setIsDragging(true);
        hasMovedRef.current = false;
        dragStartRef.current = { x: position.x, y: position.y };
    };

    const handleDragStop = () => {
        setIsDragging(false);
        setTimeout(() => {
            hasMovedRef.current = false;
        }, 100);
    };

    const handleClick = (e: React.MouseEvent) => {
        // Only trigger animation if we haven't moved during drag
        if (!hasMovedRef.current) {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
            // TODO: Add leaf animation here
        }
    };

    const treeComponent = (
        <div
            className="tree-container draggable-handle"
            onClick={handleClick}
            style={{
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
        >
            <svg
                width="200"
                height="200"
                style={{
                    transform: isShaking ? 'rotate(-8deg)' : 'rotate(0deg)',
                    transition: isShaking ? 'transform 0.1s ease-in-out' : 'transform 0.3s ease-in-out',
                }}
            >
                <filter id="glow">
                    <feGaussianBlur stdDeviation="1" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="1" />
                    </feComponentTransfer>
                </filter>
                <image href="/cedar-os/images/icons/tree.svg" width="200" height="200" filter="url(#glow)" />
            </svg>
        </div>
    );

    return (
        <>
            {/* Mobile - not draggable */}
            <div className="md:hidden absolute bottom-16 left-0">
                {treeComponent}
            </div>
            {/* Desktop - draggable but constrained to bottom area */}
            <div className="hidden md:block absolute bottom-16 left-0 right-0 h-[200px] pointer-events-none">
                <div className="relative w-full h-full pointer-events-auto">
                    <CustomDraggable
                        position={position}
                        onDrag={handleDrag}
                        onStart={handleDragStart}
                        onStop={handleDragStop}
                        handle='.draggable-handle'
                        bounds='parent'
                        className=''
                    >
                        {treeComponent}
                    </CustomDraggable>
                </div>
            </div>
        </>
    );
}
