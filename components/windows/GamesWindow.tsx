'use client';

import React from 'react';

const games = [
  { id: 1, title: 'deimos', url: 'https://deimosly.itch.io/', icon: '/images/icons/deimosly.png' },
  { id: 2, title: 'v10101a', url: 'http://violand.xyz/', icon: '/images/icons/v10101a.png' },
  { id: 3, title: 'jyolyu', url: 'https://jyolyu.itch.io/', icon: '/images/icons/jyolyu.png' },
  { id: 4, title: 'changbai', url: 'https://changbai.li/projects', icon: '/images/icons/changbai.png' },
  { id: 5, title: 'yufeng', url: 'https://www.yufengzhao.com/', icon: '/images/icons/yufeng.GIF' },
];

export default function GamesWindow() {
  const handleGameClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="h-full bg-white text-black p-4">
      <h2 className="text-xl font-bold text-arngren-red mb-6">🎮 Cool things from friends</h2>
      
      <div className="grid grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="retro-icon w-40 h-40 flex-col cursor-pointer transition-transform"
            onClick={() => handleGameClick(game.url)}
          >
            <div className="mb-1 flex justify-center">
              {game.icon.startsWith('/images/') ? (
                <img src={game.icon} alt={game.title} className="w-20 h-20" />
              ) : (
                <div className="text-2xl">{game.icon}</div>
              )}
            </div>
            <div className="text-xs text-center leading-tight">{game.title}</div>
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
