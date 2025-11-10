import React from 'react';
import NavBarLogic from './NavBarLogic';

export default function NavBar({ children }){
  return (
    <div className="flex">
      <NavBarLogic />
      
      {/* Grants that the real content will start after the side bar */}
      <main className="flex-1 ml-64 p-8">
        {children} {/* There goes the page content */}
      </main>
    </div>
  );
};