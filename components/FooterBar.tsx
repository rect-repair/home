'use client';

import React, { useState, useEffect } from 'react';

export default function FooterBar() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-green-700 border-b-4 border-t-4 border-green-800 text-white px-4 py-2 flex justify-between items-center text-xl" style={{ fontFamily: 'FusionPixel, monospace' }}>
            <div className="flex items-center space-x-4">
                <span className="text-green-200">CEDAR-OS</span>
                <span className="text-green-800">|</span>
                <span className="text-green-200">Ⓒ2025 [[rect*]]repair</span>
            </div>

            <div className="flex items-center space-x-4">
                <div className="text-4xl bg-green-800 px-3 py-1 rounded-md" style={{ fontFamily: 'FusionPixel, monospace' }}>
                    {formatTime(currentTime)}
                </div>
            </div>
        </div>
    );
}
