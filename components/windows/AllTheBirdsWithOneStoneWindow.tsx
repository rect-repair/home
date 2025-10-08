'use client';

import React from 'react';

export default function AllTheBirdsWithOneStoneWindow() {
    return (
        <div className="h-full bg-white text-black">
            {/* Game Info Header */}
            <div className="bg-white border-b-2 border-black p-4 text-center">
                <h2 className="text-2xl">All The Bird With One Stone</h2>
                <p className="text-lg">by Chia Amisola • Text • Web • Narrative</p>
            </div>

            {/* Embedded Game */}
            <iframe
                src="https://html-classic.itch.zone/html/10378363/all-the-birds-with-one-stone/bird.html?=0"
                allowFullScreen
                width="1080"
                height="720"
                className="w-full h-full"
            >
                <a href="https://chi.itch.io/all-the-birds-with-one-stone">Play All The Birds With One Stone on itch.io</a>
            </iframe>
        </div>
    );
}
