'use client';

import React, { useState } from 'react';

export default function ArchiveWindow() {
  const [currentUrl, setCurrentUrl] = useState('https://rect-repair.github.io/tea-room/tea-room-archive.html');
  const [addressBar, setAddressBar] = useState(currentUrl);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = (url: string) => {
    setIsLoading(true);
    setCurrentUrl(url);
    setAddressBar(url);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNavigate(addressBar);
  };

  const handleBack = () => {
    // In a real implementation, this would use browser history
    console.log('Back clicked');
  };

  const handleForward = () => {
    // In a real implementation, this would use browser history
    console.log('Forward clicked');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleHome = () => {
    handleNavigate('https://rect-repair.github.io/tea-room/tea-room-archive.html');
  };

  const handleExternal = () => {
    window.open(currentUrl, '_blank');
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col">
      {/* Browser Chrome */}
      <div className="bg-gray-200 border-b border-gray-400 p-2">
        <div className="flex items-center space-x-2 mb-2">
          <button
            onClick={handleBack}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Back"
          >
            <img src="/images/icons/back.png" alt="Back" className="w-3 h-3" />
          </button>
          <button
            onClick={handleForward}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Forward"
          >
            <img src="/images/icons/forward.png" alt="Forward" className="w-3 h-3" />
          </button>
          <button
            onClick={handleRefresh}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Refresh"
          >
            <img src="/images/icons/refresh.png" alt="Refresh" className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={handleHome}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Home"
          >
            <img src="/images/icons/home.png" alt="Home" className="w-3 h-3" />
          </button>
        </div>
        
        <form onSubmit={handleAddressSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={addressBar}
            onChange={(e) => setAddressBar(e.target.value)}
            className="flex-1 px-2 py-1 text-xs border border-gray-400 bg-white"
            placeholder="Enter URL..."
          />
          <button
            type="button"
            onClick={handleExternal}
            className="retro-button w-6 h-6 flex items-center justify-center p-0"
            title="Open in new tab"
          >
            <img src="/images/icons/external.png" alt="External" className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Iframe Content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
            <div className="text-center">
              <img src="/images/icons/refresh.png" alt="Loading" className="w-8 h-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-gray-600">Loading...</p>
            </div>
          </div>
        )}
        <iframe
          src={currentUrl}
          className="w-full h-full border-0"
          title="Archive Browser"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t border-gray-400 px-2 py-1 text-xs text-gray-600">
        <div className="flex justify-between items-center">
          <span>Status: {isLoading ? 'Loading...' : 'Ready'}</span>
          <span>URL: {currentUrl}</span>
        </div>
      </div>
    </div>
  );
}
