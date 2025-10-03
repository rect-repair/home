'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="retro-button px-4 py-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

