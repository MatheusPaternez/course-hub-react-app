import React from 'react';
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import { Mail, Lock, Eye } from 'lucide-react';
import LoginBackground from "../assets/img/login-background.png";
import Logo from "../assets/img/logo.png";

export default function Login() {
    return (
        // Main container for both divs sharing the screen
        <div className="flex h-screen bg-white">

            {/* Left part */}
            <div className="hidden lg:block lg:w-1/2 bg-gray-800 text-white relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${LoginBackground})` }}
                >
                    {/* For better lecture, some transparent overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative z-10 p-12 flex flex-col justify-between h-full">
                    {/* Logo */}
                    <div className="flex items-center text-xl font-bold">
                        <img src={Logo} alt='Logo' className="w-10 h-10 mr-2 text-blue-400" fill="currentColor" 
                        viewBox="0 0 24 24" />
                        <p className='text-blue-400'>Sync-Hub</p>
                    </div>

                    {/* Main text */}
                    <div className="mb-20 grid">
                        <h1 className="text-5xl font-extrabold leading-tight mb-4">
                            Code Alone, Grow Together.
                        </h1>
                        <p className="text-xl font-light">
                            From Idea to Deployment, All in Sync
                        </p>
                    </div>

                    {/* Empty div to make justify between work well */}
                    <div></div>
                </div>
            </div>

            {/* Right Part */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">Login</h2>

                    <form className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Enter email address"
                                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md 
                                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter Password"
                                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md 
                                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {/* Eye Icon for Toggle Password Visibility */}
                                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm 
                                leading-5">
                                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                {/* Checkbox "Remember Me" */}
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember Me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-500 hover:text-red-600">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        {/* Login Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                                text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 
                                focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* or continue with */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="mt-6 flex justify-center space-x-6">
                            {/* Google */}
                            <button className="text-3xl text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                                <FaGoogle />
                            </button>
                            {/* Apple */}
                            <button className="text-3xl text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                                <FaApple />
                            </button>
                            {/* Facebook */}
                            <button className="text-3xl text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out">
                                <FaFacebookF />
                            </button>
                        </div>
                    </div>

                    {/* Sign Up */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="font-medium text-blue-500 hover:text-blue-600">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}