'use client';

import React from 'react';

export default function BarnacleGooseWindow() {
    return (
        <div className="h-full bg-white text-black">
            {/* Game Info Header */}
            <div className="bg-white border-b-4 border-b-custom-border p-3 text-center">
                <h2 className="text-2xl">Barnacle Goose Experiment</h2>
                <p className="text-lg">by Everest Pipkin • Interactive • Web</p>
            </div>

            {/* Embedded Game */}
            <iframe
                src="https://everest-pipkin.com/barnacle-goose/"
                allowFullScreen
                width="1080"
                height="720"
                className="w-full h-full"
            >
                <a href="https://everest-pipkin.com/barnacle-goose/">Play Barnacle Goose Experiment</a>
            </iframe>
        </div>
    );
}
