'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface StellataWaterwayWindowProps {
    windowId: string;
}

export default function StellataWaterwayWindow({ windowId }: StellataWaterwayWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full bg-green-600 text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-custom-body border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl">Stellata Waterway</h2>
                    <p className="text-lg">by matt mora • Action • Web • Arcade</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 min-h-0">
                <iframe
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
                    allowTransparency={true}
                    allowFullScreen
                    src="https://html-classic.itch.zone/html/6996731/index.html"
                    className="w-full h-full border-0">
                </iframe>
            </div>
        </div>
    );
}
