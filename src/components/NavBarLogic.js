import React from 'react';

// links to navigate through
const navItems = [
  { name: 'HTML/CSS', icon: '💻', path: '/html-css' },
  { name: 'Java Script', icon: '📜', path: '/javascript' },
  { name: 'Java', icon: '☕', path: '/java' },
  { name: 'Python', icon: '🐍', path: '/python' },
  { name: 'Cyber Security', icon: '☁️', path: '/cyber-security' },
  { name: 'UxUi', icon: '🎨', path: '/uxui' },
  { name: 'Graphic', icon: '👤', path: '/graphic' },
  { name: 'Web design', icon: '🗓️', path: '/web-design' },
  { name: 'Help Center', icon: '❓', path: '/help' },
];

export default function NavBarLogic(){
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0">
      <nav className="p-4">
        {/* Using map to iterate through links and pages */}
        {navItems.map((item, index) => (
          <>
          {/* Logic for showing links in the navbar based on an array of obejcts (Making it dynamic for future courses) */}
          <a
            key={index}
            href={item.path}
            className="flex items-center p-3 my-2 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-200">
            <span className="mr-3 text-2xl">{item.icon}</span>
            {item.name}
            
          </a>
          <hr className="border-gray-700" />
          </>
        ))}
      </nav>
    </div>
  );
};