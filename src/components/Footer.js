import React from "react";
import Facebook from "../assets/img/facebook-logo.png";
import Twitter from "../assets/img/twitter-icon.png";
import Vimeo from "../assets/img/vimeo-icon.png";
import Linkedin from "../assets/img/linkedin-icon.png";
import Skype from "../assets/img/skype-icon.png";
import ApiFamily from "../assets/img/api-family-logo.png";
import Logo from "../assets/img/logo.png";

export default function Footer(){
    return (
        <footer className="bg-[#001c27] text-gray-200">
            {/* Top: links grid */}
            <div className="max-w-10xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-30">
                    {/* Column: Home */}
                    <div>
                        <a className="text-white font-semibold mb-4" href="#">Home</a>
                    </div>

                    {/* Column: Course */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Course</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Javascript</a></li>
                            <li><a href="#" className="hover:text-white">Python</a></li>
                            <li><a href="#" className="hover:text-white">Html/Css</a></li>
                            <li><a href="#" className="hover:text-white">Java</a></li>
                            <li><a href="#" className="hover:text-white">Cybersecurity</a></li>
                            <li><a href="#" className="hover:text-white">UxUi</a></li>
                            <li><a href="#" className="hover:text-white">Graphic</a></li>
                            <li><a href="#" className="hover:text-white">Web</a></li>
                        </ul>
                    </div>

                    {/* Column: Dashboard */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Dashboard</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">My Course</a></li>
                            <li><a href="#" className="hover:text-white">Events</a></li>
                            <li><a href="#" className="hover:text-white">My Profile</a></li>
                        </ul>
                    </div>

                    {/* Column: Team-Up */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Team-Up</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="#" className="hover:text-white">Achievements</a></li>
                            <li><a href="#" className="hover:text-white">My Teammates</a></li>
                        </ul>
                    </div>

                    {/* Column: My Work */}
                    <div>
                        <a href="#" className="text-white font-semibold mb-4">My Work</a>
                    </div>
                </div>

                {/* Bottom row: logo and credits / social icons */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-6 border-t border-white/5">
                    {/* Left: logo and credits */}
                    <div className="flex items-center gap-4">
                        <div className="w-32 rounded-full flex items-center justify-center" aria-hidden="true">
                            <img alt="Logo" src={Logo}/>
                        </div>

                        <div className="text-sm text-gray-300">
                            <span className="mx-4">© 2025 Project by</span>
                            <span className="inline-block align-middle"><img className="w-20" alt="Api Family Logo" src={ApiFamily}/></span>
                        </div>
                    </div>

                    {/* Right: social icons */}
                    <div className="flex items-center gap-4 mt-6 md:mt-0">
                        <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                            <img src={Facebook}/>
                        </a>
                        <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                            <img src={Twitter}/>
                        </a>
                        <a href="#" aria-label="Vimeo" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                            <img src={Vimeo}/>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="w-6 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                            <img src={Linkedin}/>
                        </a>
                        <a href="#" aria-label="Skype" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                            <img src={Skype}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}