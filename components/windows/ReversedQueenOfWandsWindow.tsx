'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface ReversedQueenOfWandsWindowProps {
    windowId: string;
}

export default function ReversedQueenOfWandsWindow({ windowId }: ReversedQueenOfWandsWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full bg-green-600 text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-custom-body border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl text-custom-green underline"><a href="https://tuniks.itch.io/reversed-queen-of-wands" target="_blank" rel="noopener noreferrer" className="hover:text-custom-body hover:bg-custom-green">The Reversed Queen of Wands</a></h2>
                    <p className="text-lg">by Tuniks • Web • Abstract</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 min-h-0">
                <iframe
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
                    allowTransparency={true}
                    allowFullScreen
                    src="https://html-classic.itch.zone/html/12019029/index.html"
                    className="w-full h-full border-0">
                </iframe>
            </div>
        </div>
    );
}
