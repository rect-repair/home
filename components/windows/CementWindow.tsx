'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface CementWindowProps {
    windowId: string;
}

export default function CementWindow({ windowId }: CementWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full bg-green-600 text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-custom-body border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl text-custom-green underline"><a href="https://hatimb00.itch.io/cement" target="_blank" rel="noopener noreferrer" className="hover:text-custom-body hover:bg-custom-green">cement</a></h2>
                    <p className="text-lg">by hatimb00 • Abstract • Web • Narrative</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 min-h-0 flex items-center justify-center bg-[#B3D5DB]">
                <iframe
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
                    allowTransparency={true}
                    allowFullScreen
                    src="https://html-classic.itch.zone/html/11540856/index.html"
                    width="530"
                    height="530"
                    className="border-0">
                </iframe>
            </div>
        </div>
    );
}
