'use client';

import React from 'react';

export default function StellataWaterwayWindow() {
    return (
        <div className="h-full bg-green-600 text-black">
            {/* Game Info Header */}
            <div className="bg-custom-body border-b-4 border-b-custom-border p-3 text-center">
                <h2 className="text-2xl">Stellata Waterway</h2>
                <p className="text-lg">by matt mora • Action • Web • Arcade</p>
            </div>

            {/* Embedded Game */}
            <iframe
                src="https://itch.io/embed-upload/14359941?color=0415b1"
                allowFullScreen
                width="1000"
                height="700"
                className="w-full h-full"
            >
                <a href="https://sandpills.itch.io/bodybuilding-web">Play Body Building (Web) on itch.io</a>
            </iframe>
        </div>
    );
}
