'use client';

import React from 'react';

const games = [
  { id: 1, title: 'deimosly', url: 'https://deimosly.itch.io/', icon: '🎮' },
];

export default function GamesWindow() {
  const handleGameClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="h-full bg-white text-black p-4">
      <h2 className="text-xl font-bold text-arngren-red mb-6">🎮 Cool Games</h2>
      
      <div className="grid grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="retro-icon w-20 h-20 flex-col cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleGameClick(game.url)}
          >
            <div className="text-2xl mb-1">{game.icon}</div>
            <div className="text-xs text-center leading-tight">{game.title}</div>
            <img src="/images/icons/external.png" alt="External" className="w-3 h-3 mt-1" />
          </div>
        ))}
      </div>
      
      {/* <div className="mt-6 p-3 bg-black bg-opacity-20 border border-retro-green border-opacity-30 rounded">
        <p className="text-xs text-retro-green text-center">
          💾 Click any game to play on itch.io
        </p>
      </div> */}
    </div>
  );
}
