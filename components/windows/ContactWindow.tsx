'use client';

import React from 'react';

const contactMethods = [
  {
    id: 1,
    name: 'Email',
    description: 'Send us a message',
    icon: '📧',
    action: 'mailto:rectanglerepair@gmail.com',
    color: 'text-arngren-blue'
  },
  {
    id: 2,
    name: 'Instagram',
    description: 'Follow our updates',
    icon: '📷',
    action: 'https://www.instagram.com/rect_repair/',
    color: 'text-arngren-red'
  },
  
  {
    id: 3,
    name: 'GitHub',
    description: 'View our projects',
    icon: '💻',
    action: 'https://github.com/rect-repair',
    color: 'text-arngren-purple'
  },

];

export default function ContactWindow() {
  const handleContactClick = (action: string) => {
    window.open(action, '_blank');
  };

  return (
    <div className="h-full bg-white text-black">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src="/images/icons/contact.png" alt="Contact" className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold text-arngren-red">Get in Touch</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white border-1 border-black p-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              onClick={() => handleContactClick(method.action)}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{method.icon}</div>
                <h3 className={`font-bold text-sm ${method.color} mb-1`}>
                  {method.name}
                </h3>
                <p className="text-xs text-black">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
