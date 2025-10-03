'use client';

import React from 'react';

// Easy-to-update leaderboard data
const leaderboardData = [
  { rank: 1, playerName: '放屁小队', completedTime: '02:34:15', stagesCompleted: 10 },
  { rank: 2, playerName: 'Player2', completedTime: '02:45:22', stagesCompleted: 11 },
  { rank: 3, playerName: 'Player3', completedTime: '02:56:08', stagesCompleted: 10 },
];

export default function KyotoWindow() {
  return (
    <div className="h-full bg-white text-black p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-red">Leaderboard</h2>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="text-sm p-2">High scores from our kyoto treasurehunt game:</div>
      <div className="overflow-auto h-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b-1 border-black">
              <th className="text-left p-2 font-bold text-sm">Rank</th>
              <th className="text-left p-2 font-bold text-sm">Team Name</th>
              <th className="text-left p-2 font-bold text-sm">Completed Time</th>
              <th className="text-left p-2 font-bold text-sm">Stages Completed</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr 
                key={player.rank} 
                className={`border-b border-gray-300 hover:bg-gray-100 ${
                  player.rank <= 3 ? 'bg-yellow-50' : ''
                }`}
              >
                <td className="p-2 text-sm font-bold">
                  {player.rank <= 3 && '🏆 '}
                  #{player.rank}
                </td>
                <td className="p-2 text-sm text-red-600 text-bold ">{player.playerName}</td>
                <td className="p-2 text-sm text-red-600">{player.completedTime}</td>
                <td className="p-2 text-sm text-black-600">{player.stagesCompleted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
