import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.png';
import { Link,Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth';

export default function Header() {
    const { user } = useAuth(); // get user from auth context
    const [dashboardLink, setDashboardLink] = useState('/dashboard');
    const [dashboardLabel, setDashboardLabel] = useState('Dashboard');

    // Update dashboard link and label whenever user changes
    useEffect(() => {
        if (!user) {
            setDashboardLink('/dashboard');
            setDashboardLabel('Dashboard');
            return;
        }

        switch (user.role) {
            case 'student':
                setDashboardLink('/dashboard');
                setDashboardLabel('Dashboard');
                break;
            case 'teacher':
                setDashboardLink('/dashboard-teacher');
                setDashboardLabel('Teacher Dashboard');
                break;
            case 'admin':
                setDashboardLink('/content');
                setDashboardLabel('Content Manager');
                break;
            default:
                setDashboardLink('/dashboard');
                setDashboardLabel('Dashboard');
        }
    }, [user]); // Re-run whenever user changes

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
                        <Link to={dashboardLink} className="hover:text-blue-500 transition">{dashboardLabel}</Link>
                        <Link to="/team-up" className="hover:text-blue-500 transition">Team-Up</Link>
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
