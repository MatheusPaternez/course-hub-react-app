import React, { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.png';
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { LogOut, User, Menu, X } from 'lucide-react';

export default function Header() {
    const { user, signOut } = useAuth(); // get user and signOut from auth context
    const navigate = useNavigate();
    const [dashboardLink, setDashboardLink] = useState('/dashboard');
    const [dashboardLabel, setDashboardLabel] = useState('Dashboard');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

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
                setDashboardLink('/dashboard-admin');
                setDashboardLabel('Content Manager');
                break;
            default:
                setDashboardLink('/dashboard');
                setDashboardLabel('Dashboard');
        }
    }, [user]); // Re-run whenever user changes

    // Handle logout
    const handleLogout = () => {
        signOut();
        setShowUserMenu(false);
        setShowMobileMenu(false);
        navigate('/login');
    };

    return (
        <>
            <header className="relative bg-[#001c27]">
                {/* Top bar container */}
                <div className="max-w-10xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* LEFT: Logo */}
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt='Logo' className='w-32' />
                        {/* Brand name */}

                    </div>

                    {/* CENTER: Primary navigation (desktop only) */}
                    <nav className="hidden md:flex gap-6 text-sm text-gray-200" aria-label="Primary">
                        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                        <Link to="/courses" className="hover:text-blue-500 transition">Courses</Link>
                        <Link to={dashboardLink} className="hover:text-blue-500 transition">{dashboardLabel}</Link>
                        {/* <Link to="/team-up" className="hover:text-blue-500 transition">Team-Up</Link>  in the future*/}
                    </nav>

                    {/* RIGHT: Actions / profile */}
                    <div className="flex items-center gap-3 relative">
                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="md:hidden text-gray-200 hover:text-white"
                            aria-label="Toggle mobile menu"
                        >
                            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {user ? (
                            // User is logged in - show user menu
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserMenu(!showUserMenu)}
                                    className="flex items-center gap-2 text-sm text-gray-200 p-2 rounded-lg hover:text-white bg-blue-600 hover:bg-blue-700 
                                    text-lg font-semibold transition duration-300 ease-in-out"
                                >
                                    <User className="w-5 h-5" />
                                    {user.name}
                                </button>

                                {/* Dropdown menu */}
                                {showUserMenu && (
                                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-50">
                                        <div className="px-4 py-3 border-b">
                                            <p className="text-sm font-medium text-gray-800">{user.name}</p>
                                            <p className="text-xs text-gray-500">{user.email}</p>
                                            <p className="text-xs text-gray-400 capitalize mt-1">{user.role}</p>
                                        </div>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            // User is not logged in - show login button
                            <Link
                                to="/login"
                                className="text-sm text-gray-200 p-2 rounded-lg hover:text-white bg-blue-600 hover:bg-blue-700 
                                text-lg font-semibold transition duration-300 ease-in-out"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile menu */}
                {showMobileMenu && (
                    <nav className="md:hidden bg-[#00141a] border-t border-gray-700 px-4 py-3 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setShowMobileMenu(false)}
                            className="block text-sm text-gray-200 hover:text-blue-500 transition py-2"
                        >
                            Home
                        </Link>
                        <Link
                            to="/courses"
                            onClick={() => setShowMobileMenu(false)}
                            className="block text-sm text-gray-200 hover:text-blue-500 transition py-2"
                        >
                            Courses
                        </Link>
                        <Link
                            to={dashboardLink}
                            onClick={() => setShowMobileMenu(false)}
                            className="block text-sm text-gray-200 hover:text-blue-500 transition py-2"
                        >
                            {dashboardLabel}
                        </Link>
                        {/* <Link
                            to="/team-up"
                            onClick={() => setShowMobileMenu(false)}
                            className="block text-sm text-gray-200 hover:text-blue-500 transition py-2"
                        >
                            Team-Up
                        </Link> */}
                    </nav>
                )}
            </header>
            <Outlet />
        </>

    );
}
