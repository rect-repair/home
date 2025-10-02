'use client';

import React, { useState } from 'react';
import { WindowProvider, useWindow } from '@/contexts/WindowContext';
import Window from '@/components/Window';
import DesktopIcon from '@/components/DesktopIcon';
import EventsWindow from '@/components/windows/EventsWindow';
import ArchiveWindow from '@/components/windows/ArchiveWindow';
import GamesWindow from '@/components/windows/GamesWindow';
import ShopWindow from '@/components/windows/ShopWindow';
import ContactWindow from '@/components/windows/ContactWindow';

function DesktopContent() {
  const { windows, openWindow } = useWindow();

  const handleOpenWindow = (windowType: string) => {
    const existingWindow = windows.find(w => w.id === windowType);
    if (existingWindow) {
      return; // Window already open
    }

    const windowConfigs = {
      events: {
        id: 'events',
        title: 'Events Calendar',
        x: 100,
        y: 100,
        width: 800,
        height: 600,
        isMinimized: false,
        isMaximized: false,
        isVisible: true,
      },
      archive: {
        id: 'archive',
        title: 'Archive Browser',
        x: 200,
        y: 150,
        width: 800,
        height: 600,
        isMinimized: false,
        isMaximized: false,
        isVisible: true,
      },
      games: {
        id: 'games',
        title: 'Games Collection',
        x: 150,
        y: 250,
        width: 600,
        height: 500,
        isMinimized: false,
        isMaximized: false,
        isVisible: true,
      },
      shop: {
        id: 'shop',
        title: 'Retro Shop',
        x: 400,
        y: 100,
        width: 500,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        isVisible: true,
      },
      contact: {
        id: 'contact',
        title: 'Contact',
        x: 200,
        y: 150,
        width: 500,
        height: 400,
        isMinimized: false,
        isMaximized: false,
        isVisible: true,
      },
    };

    openWindow(windowConfigs[windowType as keyof typeof windowConfigs]);
  };


  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white">
        
      </div>

      {/* Desktop Icons */}
      <div className="absolute inset-0 p-4">
        <DesktopIcon
          id="events"
          label="Events"
          icon={<img src="/images/icons/events.png" alt="Events" className="w-24 h-24" />}
          onClick={() => handleOpenWindow('events')}
          x={50}
          y={50}
        />
        
        <DesktopIcon
          id="archive"
          label="Meetup Archive"
          icon={<img src="/images/icons/archive.png" alt="Archive" className="w-24 h-24" />}
          onClick={() => handleOpenWindow('archive')}
          x={150}
          y={50}
        />
        
        <DesktopIcon
          id="instagram"
          label="Instagram"
          icon={<img src="/images/icons/instagram.png" alt="Instagram" className="w-24 h-24" />}
          onClick={() => window.open('https://www.instagram.com/rect_repair/', '_blank')}
          x={250}
          y={50}
        />
        
        <DesktopIcon
          id="games"
          label="Cool things from friends"
          icon={<img src="/images/icons/games.png" alt="Games" className="w-24 h-24" />}
          onClick={() => handleOpenWindow('games')}
          x={350}
          y={50}
        />
        
        <DesktopIcon
          id="shop"
          label="Shop"
          icon={<img src="/images/icons/shop.png" alt="Shop" className="w-24 h-24" />}
          onClick={() => handleOpenWindow('')}
          x={450}
          y={50}
        />
        
        <DesktopIcon
          id="contact"
          label="Contact"
          icon={<img src="/images/icons/contact.png" alt="Contact" className="w-24 h-24" />}
          onClick={() => handleOpenWindow('contact')}
          x={550}
          y={50}
        />
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          initialX={window.x}
          initialY={window.y}
          initialWidth={window.width}
          initialHeight={window.height}
        >
          {window.id === 'events' && <EventsWindow />}
          {window.id === 'archive' && <ArchiveWindow />}
          {window.id === 'games' && <GamesWindow />}
          {window.id === 'shop' && <ShopWindow />}
          {window.id === 'contact' && <ContactWindow />}
        </Window>
      ))}

      {/* Floating Footer */}
      <div className="fixed bottom-2 left-2 text-xs text-gray-600 z-10 pointer-events-none">
        ©2025 [[rect*]]repair
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <WindowProvider>
      <DesktopContent />
    </WindowProvider>
  );
}
