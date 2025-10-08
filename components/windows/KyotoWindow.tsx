'use client';

import React from 'react';

// Easy-to-update leaderboard data
const leaderboardData = [
  { rank: 1, playerName: 'Aurora二次方', completedTime: '03:02:00', stagesCompleted: 17, dateCompleted: '2024-10-07' },
  { rank: 2, playerName: '小八兔击队', completedTime: '03:39:00', stagesCompleted: 17, dateCompleted: '2024-10-05' },
  { rank: 3, playerName: '浴莉', completedTime: '03:44:00', stagesCompleted: 17, dateCompleted: '2024-10-03' },
  { rank: 4, playerName: '毛茸茸小队', completedTime: '03:53:00', stagesCompleted: 17, dateCompleted: '2024-10-05' },
  { rank: 5, playerName: '794小队', completedTime: '04:01:00', stagesCompleted: 17, dateCompleted: '2024-10-05' },
  { rank: 6, playerName: '一只小猫', completedTime: '04:16:00', stagesCompleted: 17, dateCompleted: '2024-10-03' },
  { rank: 7, playerName: '临时的king', completedTime: '04:20:00', stagesCompleted: 17, dateCompleted: '2024-10-07' },
  { rank: 8, playerName: 'bespa', completedTime: 'N/A', stagesCompleted: 17, dateCompleted: '2024-10-03' },
  { rank: 9, playerName: '放屁小队', completedTime: 'N/A', stagesCompleted: 11, dateCompleted: '2024-10-02' },
  { rank: 10, playerName: '口口口小队', completedTime: 'N/A', stagesCompleted: 9, dateCompleted: '2024-10-06' },


];

export default function KyotoWindow() {
  return (
    <div className="h-full bg-white text-black p-4">
      <div className="mb-6">
        <div className="border border-black flex">
          <div className="flex-1 px-2 py-1 border-r border-black">
            <h2 className="text-xl font-bold text-custom-red">入职任务绩效排行榜</h2>
          </div>
          <div className="px-2 py-1">
            <div className="text-x text-custom-red">Last updated: {new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
      <div className="text-sm p-2"></div>
      <div className="overflow-auto h-full">
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr className="bg-gray-200 border-b border-black">
              <th className="text-left p-2 font-bold text-sm">Rank</th>
              <th className="text-left p-2 font-bold text-sm">Team Name</th>
              <th className="text-left p-2 font-bold text-sm">Completion Time</th>
              <th className="text-left p-2 font-bold text-sm">Stages Completed</th>
              <th className="text-left p-2 font-bold text-sm">Date Completed</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr 
                key={player.rank} 
                className={`border-b border-black bg-white hover:bg-gray-100 ${
                  player.rank <= 3 ? 'bg-yellow-50' : ''
                }`}
              >
                <td className="p-2 text-sm font-bold">
                  #{player.rank}
                </td>
                <td className="p-2 text-sm text-custom-red text-bold">{player.playerName}</td>
                <td className="p-2 text-sm text-custom-red">{player.completedTime}</td>
                <td className="p-2 text-sm text-black-600">{player.stagesCompleted}</td>
                <td className="p-2 text-sm text-gray-600">{player.dateCompleted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
