'use client';

import React from 'react';

const products = [
  { id: 1, name: 'Vaporwave T-Shirt', price: '$29.99', image: '👕', category: 'Apparel' },
  { id: 2, name: 'Neon Poster', price: '$19.99', image: '🖼️', category: 'Art' },
  { id: 3, name: 'Synthwave Vinyl', price: '$24.99', image: '💿', category: 'Music' },
  { id: 4, name: 'Retro Mug', price: '$14.99', image: '☕', category: 'Accessories' },
  { id: 5, name: '80s Sticker Pack', price: '$9.99', image: '🏷️', category: 'Accessories' },
  { id: 6, name: 'Cyberpunk Hoodie', price: '$49.99', image: '🧥', category: 'Apparel' },
];

export default function ShopWindow() {
  return (
    <div className="h-full bg-white text-black p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-arngren-red">🛒 Shop</h2>
        <button className="retro-button flex items-center space-x-1">
          <img src="/images/icons/shop.png" alt="Shop" className="w-4 h-4" />
          <span>Cart (0)</span>
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white  p-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{product.image}</div>
              <h3 className="font-bold text-arngren-yellow text-sm mb-1">{product.name}</h3>
              <p className="text-arngren-green text-xs mb-2">{product.category}</p>
              <p className="text-arngren-red font-bold text-sm mb-2">{product.price}</p>
              <button className="retro-button text-xs px-2 py-1 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
        {/* <div className="mt-6 p-3 bg-black bg-opacity-20 border border-retro-green border-opacity-30 rounded">
          <p className="text-xs text-retro-green text-center">
            💳 Click "Add to Cart" to purchase items
          </p>
        </div> */}
    </div>
  );
}
