'use client';

import React from 'react';

export default function MaryWindow() {
    return (
        <div className="h-full bg-green-600 text-black">
            {/* Game Info Header */}
            <div className="bg-green-200 border-b-2 border-black p-4 text-center">
                <h2 className="text-2xl">mary</h2>
                <p className="text-lg">by Karina Popp • Narrative • Web • Text</p>
            </div>

            {/* Embedded Game */}
            <a href="https://knarniapop.itch.io/mary">Play mary on itch.io</a>
        </div >
    );
}
