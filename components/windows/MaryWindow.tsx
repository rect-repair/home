'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface MaryWindowProps {
    windowId: string;
}

export default function MaryWindow({ windowId }: MaryWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full min-h-full bg-[#3E2F28] text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-green-200 border-b-2 border-black p-4 text-center flex-shrink-0">
                    <h2 className="text-2xl">mary</h2>
                    <p className="text-lg">by Karina Popp • Narrative • Web • Text</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 bg-[#3E2F28] flex items-start justify-center pb-4">
                <iframe
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
                    allowTransparency={true}
                    allowFullScreen
                    src="https://html-classic.itch.zone/html/14788843/mary/index.html"
                    width="500"
                    height="700"
                    className="border-0">
                </iframe>
            </div>
        </div >
    );
}


