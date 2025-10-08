'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { WindowState } from '@/types/window';

interface WindowContextType {
    windows: WindowState[];
    openWindow: (window: Omit<WindowState, 'zIndex'>) => void;
    closeWindow: (id: string) => void;
    updateWindowPosition: (id: string, x: number, y: number) => void;
    updateWindowSize: (id: string, width: number, height: number) => void;
    bringToFront: (id: string) => void;
    setWindowFullscreen: (id: string, isFullscreen: boolean) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

type WindowAction =
    | { type: 'OPEN_WINDOW'; payload: WindowState }
    | { type: 'CLOSE_WINDOW'; payload: string }
    | { type: 'UPDATE_POSITION'; payload: { id: string; x: number; y: number } }
    | { type: 'UPDATE_SIZE'; payload: { id: string; width: number; height: number } }
    | { type: 'BRING_TO_FRONT'; payload: string }
    | { type: 'SET_FULLSCREEN'; payload: { id: string; isFullscreen: boolean } };

function windowReducer(state: WindowState[], action: WindowAction): WindowState[] {
    switch (action.type) {
        case 'OPEN_WINDOW':
            return [...state, action.payload];

        case 'CLOSE_WINDOW':
            return state.filter(window => window.id !== action.payload);

        case 'UPDATE_POSITION':
            return state.map(window =>
                window.id === action.payload.id
                    ? { ...window, x: action.payload.x, y: action.payload.y }
                    : window
            );

        case 'UPDATE_SIZE':
            return state.map(window =>
                window.id === action.payload.id
                    ? { ...window, width: action.payload.width, height: action.payload.height }
                    : window
            );

        case 'BRING_TO_FRONT':
            const maxZIndex = Math.max(...state.map(w => w.zIndex), 0);
            return state.map(window =>
                window.id === action.payload
                    ? { ...window, zIndex: maxZIndex + 1 }
                    : window
            );

        case 'SET_FULLSCREEN':
            return state.map(window =>
                window.id === action.payload.id
                    ? { ...window, isFullscreen: action.payload.isFullscreen }
                    : window
            );

        default:
            return state;
    }
}

export function WindowProvider({ children }: { children: ReactNode }) {
    const [windows, dispatch] = useReducer(windowReducer, []);

    const openWindow = (window: Omit<WindowState, 'zIndex'>) => {
        const maxZIndex = Math.max(...windows.map(w => w.zIndex), 0);
        dispatch({
            type: 'OPEN_WINDOW',
            payload: { ...window, zIndex: maxZIndex + 1 }
        });
    };

    const closeWindow = (id: string) => {
        dispatch({ type: 'CLOSE_WINDOW', payload: id });
    };

    const updateWindowPosition = (id: string, x: number, y: number) => {
        dispatch({ type: 'UPDATE_POSITION', payload: { id, x, y } });
    };

    const updateWindowSize = (id: string, width: number, height: number) => {
        dispatch({ type: 'UPDATE_SIZE', payload: { id, width, height } });
    };

    const bringToFront = (id: string) => {
        dispatch({ type: 'BRING_TO_FRONT', payload: id });
    };

    const setWindowFullscreen = (id: string, isFullscreen: boolean) => {
        dispatch({ type: 'SET_FULLSCREEN', payload: { id, isFullscreen } });
    };

    return (
        <WindowContext.Provider
            value={{
                windows,
                openWindow,
                closeWindow,
                updateWindowPosition,
                updateWindowSize,
                bringToFront,
                setWindowFullscreen,
            }}
        >
            {children}
        </WindowContext.Provider>
    );
}

export function useWindow() {
    const context = useContext(WindowContext);
    if (context === undefined) {
        throw new Error('useWindow must be used within a WindowProvider');
    }
    return context;
}
