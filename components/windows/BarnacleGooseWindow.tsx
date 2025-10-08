'use client';

import React from 'react';
import { useWindow } from '@/contexts/WindowContext';

interface BarnacleGooseWindowProps {
    windowId: string;
}

export default function BarnacleGooseWindow({ windowId }: BarnacleGooseWindowProps) {
    const { windows } = useWindow();
    const windowState = windows.find(w => w.id === windowId);
    const isFullscreen = windowState?.isFullscreen || false;

    return (
        <div className="h-full bg-white text-black flex flex-col">
            {/* Game Info Header - hidden in fullscreen */}
            {!isFullscreen && (
                <div className="bg-white border-b-4 border-b-custom-border p-3 text-center flex-shrink-0">
                    <h2 className="text-2xl">Barnacle Goose Experiment</h2>
                    <p className="text-lg">by Everest Pipkin • Interactive • Web</p>
                </div>
            )}

            {/* Embedded Game */}
            <div className="flex-1 min-h-0">
                <iframe
                    src="https://everest-pipkin.com/barnacle-goose/"
                    allowFullScreen
                    className="w-full h-full border-0"
                >
                    <a href="https://everest-pipkin.com/barnacle-goose/">Play Barnacle Goose Experiment</a>
                </iframe>
            </div>
        </div>
    );
}
