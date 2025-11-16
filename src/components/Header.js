import React from 'react';
import Logo from '../assets/img/logo.png';
import Settings from '../assets/img/settings-icon.png';
import { Link,Outlet } from "react-router-dom";
export default function Header() {
    return (
        <>
                <header className="relative bg-[#001c27]">
            {/* Top bar container */}
            <div className="max-w-10xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* LEFT: Logo */}
                <div className="flex items-center gap-3">
                    <img src={Logo} alt='Logo' />
                    {/* Brand name */}
                    
                </div>

                {/* CENTER: Primary navigation */}
                <nav className="hidden md:flex gap-6 text-sm text-gray-200" aria-label="Primary">
                    <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                    <Link to="/courses" className="hover:text-blue-500 transition">Courses</Link>
                    <Link to="/dashboard" className="hover:text-blue-500 transition">Dashboard</Link>
                    <Link to="/team-up" className="hover:text-blue-500 transition">Team-Up</Link>
                    {/*For teachers menu below */}
                    <Link to="/dashboard-teacher" className="hover:text-blue-500 transition">Dashboard:Teacher</Link>
                </nav>

                {/* RIGHT: Actions / profile */}
                <div className="flex items-center gap-3">
                    {/* Login link */}
                    <a href="#" className="text-sm text-gray-200 p-2 rounded-lg hover:text-white bg-blue-600 hover:bg-blue-700 
                    text-lg font-semibold transition duration-300 ease-in-out">Login</a>
                </div>
            </div>
        </header>
        <Outlet />
        </>

    );
}
