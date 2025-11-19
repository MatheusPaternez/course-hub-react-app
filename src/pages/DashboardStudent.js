import UserIcon from "../assets/img/user-icon.png";
import UseFetch from "../hooks/UseFetch";
import { useState, useEffect } from "react";
import Header from "../components/Header";

// My Work
import CompletedIcon from "../assets/img/completed-solid.png";
import StarIcon from "../assets/img/star.png";

// My Profile
import UserEditIcon from "../assets/img/user-icon-edit.png";

// Course image
import Course1 from "../assets/img/Course1.png";
import Course2 from "../assets/img/Course2.png";
import Course3 from "../assets/img/Course3.png";

// Side bar - unselected
import Dashboard from "../assets/img/Dashboard.png";
import MyProfile from "../assets/img/MyProfile.png";
import MyCourse from "../assets/img/MyCourse.png";
import MyWork from "../assets/img/MyWork.png";
import Event from "../assets/img/Event.png";

// Side bar - selected
import SDashboard from "../assets/img/Select-Dashboard.png";
import SMyProfile from "../assets/img/Select-MyProfile.png";
import SMyCourse from "../assets/img/Select-MyCourse.png";
import SMyWork from "../assets/img/Select-MyWork.png";
import SEvents from "../assets/img/Select-Events.png";


/* Sidebar */
function Subvar() {
    const [active, setActive] = useState("dashboard");

    const menu = [
        { key: "dashboard", label: "Dashboard", icon: Dashboard, activeIcon: SDashboard },
        { key: "profile", label: "My Profile", icon: MyProfile, activeIcon: SMyProfile },
        { key: "course", label: "My Course", icon: MyCourse, activeIcon: SMyCourse },
        { key: "work", label: "My Work", icon: MyWork, activeIcon: SMyWork },
        { key: "events", label: "Events", icon: Event, activeIcon: SEvents },
    ];

    return (
        <div className="w-full h-screen text-white flex flex-col gap-6 py-10 mt-20">
            {menu.map((item) => (
                <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`flex items-center gap-4 pl-6 py-3 transition-all
                    `}
                >
                    <img
                    src={active === item.key ? item.activeIcon : item.icon}
                    className={`${active === item.key ? "w-9 h-9" : "w-6 h-6"}`}
                    />
                    <span
                    className={`
                        font-medium
                        ${active === item.key 
                        ? "text-[#2D9CDB] text-base"   // select
                        : "text-white text-sm"         // unselect
                        }
                        break-words   
                    `}
                    >
                    {item.label}
                    </span>
                </button>
            ))}
        </div>
    );
}


function renderCalendar(year, month) {
    const gridContainer = document.getElementById("calendar-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "p-2 text-center text-gray-400";
        gridContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.className = "p-2 text-center h-10 cursor-pointer hover:bg-gray-100 transition-colors";
        cell.textContent = day;

        const today = new Date();
        const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        if (isToday) {
            cell.classList.add("bg-blue-500", "text-white", "font-bold");
            cell.classList.remove("hover:bg-gray-100");
        }

        gridContainer.appendChild(cell);
    }
}


/* DashboardStudent Component */
export default function DashboardStudent() {
    const today = new Date();
    setTimeout(() => renderCalendar(today.getFullYear(), today.getMonth()), 100);

    return (
        <>
        <Header />
        <main>
            <div className="bg-[#001c27] min-h-screen grid grid-cols-[250px_1fr]">
         <Subvar />
        <div className="w-full bg-gray-50 p-10 rounded-3xl mt-12">
            <div className="w-full flex items-center gap-3 pl-10 mt-10">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 22V8.25H22V22M0 22V13.75H8.25V22M11 5.5V0H22V5.5M0 11V0H8.25V11" fill="#2D9CDB" />
                </svg>
                <h2 className="font-semibold text-3xl">Dashboard-Student</h2>
            </div>

                    {/*  Profile & Events */}
                    <div className="w-full grid grid-cols-3 gap-8 items-center justify-center p-20">


                        {/* LEFT->PROFILE */}
                        <div className="flex flex-row justify-between col-span-2 mb-[-20px]">
                            <p className="font-medium text-2xl">My profile</p>
                            <a href="#" className="text-[#2D9CDB] pt-6">Add/Edit</a>
                        </div>

                        <div className="flex flex-row justify-between mb-[-20px]">
                            <p className="font-medium text-2xl">Events</p>
                            <a href="#" className="text-[#2D9CDB] pt-6">Show all</a>
                        </div>

                        {/* Profile card */}
                        <div className="h-[21rem] w-full shadow-md col-span-2 bg-white flex flex-row items-center p-1 gap-1">
                            <div className="flex flex-col items-center w-[180px] min-w-[180px]">
                                <a href="#">
                                    <img src={UserEditIcon} className="w-19 h-19 object-cover" />
                                </a>
                                <p className="font-normal text-lg mt-5">Kenta Onzo</p>
                            </div>

                            <div className="grid grid-cols-[130px_1fr] gap-y-4 gap-x-4 flex-1">
                                <p className="text-lg font-normal">Student ID</p>
                                <p className="text-lg font-normal text-[#929292]">S-0123</p>

                                <p className="text-lg font-normal">Position</p>
                                <p className="text-lg font-normal text-[#929292]">Front developer</p>

                                <p className="text-lg font-normal">E-mail</p>
                                <p className="text-lg font-normal text-[#929292] truncate">kentakentakenta@gmail.com</p>

                                <p className="text-lg font-normal">Phone</p>
                                <p className="text-lg font-normal text-[#929292]">+1 778-778-7788</p>

                                <p className="text-lg font-normal">Portfolio</p>
                                <p className="text-lg font-normal text-[#929292] truncate">https://github.com/MatheusPaternez</p>
                            </div>
                        </div>


                        {/* Calendar */}
                        <div className="h-[21rem] w-full shadow-md bg-white">
                            <div className="p-4">
                                <div className="flex justify-between items-center h-4 p-4 text-gray-600">
                                    <button className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">&lt;</button>
                                    <h2 className="text-lg font-semibold">Nov. 2025</h2>
                                    <button className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">&gt;</button>
                                </div>

                                <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 border-b">
                                    <div className="p-2">Sun</div><div className="p-2">Mon</div>
                                    <div className="p-2">Tue</div><div className="p-2">Wed</div>
                                    <div className="p-2">Thu</div><div className="p-2">Fri</div>
                                    <div className="p-2">Sat</div>
                                </div>

                                <div id="calendar-grid" className="grid grid-cols-7 border-t border-gray-200"></div>
                            </div>
                        </div>


                        {/*My Course & My Work*/}
                        <div className="col-span-3 grid grid-cols-3 gap-8 mt-5">

                            {/* MY COURSE */}
                            <div className="col-span-2">
                                <div className="flex flex-row justify-between mb-4">
                                    <p className="font-medium text-2xl">My Course</p>
                                    <a href="#" className="text-[#2D9CDB] pt-6">Explore All Courses</a>
                                </div>

                                <div className="flex flex-col gap-4">

                                    {/* COURSE 1 */}
                                    <div className="bg-white shadow-md flex overflow-hidden">
                                        <img src={Course1} className="w-[40%] h-[140px] object-cover block" />
                                        <div className="flex flex-col w-full p-4">
                                            <p className="text-gray-500 text-sm">Milad Torabi</p>
                                            <p className="font-bold">Java Script for Front Developer</p>

                                            <div className="w-fit bg-gray-200 text-[#929292] px-3 py-1 text-xs mt-2 rounded-full">
                                                In Progress
                                            </div>

                                            {/* progress bar */}
                                            <div className="flex items-center gap-2 mt-2 w-full">
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-[#2D9CDB] h-full rounded-full" style={{ width: "93%" }} />
                                                </div>
                                                <p className="text-sm text-[#2D9CDB] font-medium w-10 text-right">93%</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* COURSE 2 */}
                                    <div className="bg-white shadow-md flex overflow-hidden">
                                        <img src={Course2} className="w-[32%] h-[140px] object-cover block" />
                                        <div className="flex flex-col w-full p-4">
                                            <p className="text-gray-500 text-sm">Aiya Tosaphone</p>
                                            <p className="font-bold">Figma for UX/UI Designer</p>

                                            <div className="w-fit bg-gray-200 text-[#929292] px-3 py-1 text-xs mt-2 rounded-full">
                                                In Progress
                                            </div>

                                            {/* progress bar */}
                                            <div className="flex items-center gap-2 mt-2 w-full">
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-[#2D9CDB] h-full rounded-full" style={{ width: "51%" }} />
                                                </div>
                                                <p className="text-sm text-[#2D9CDB] font-medium w-10 text-right">51%</p>
                                            </div>
                                        </div>
                                    </div>


                                    {/* COURSE 3 */}
                                    <div className="bg-[#ECECEC] shadow-md flex overflow-hidden">
                                        <img src={Course3} className="w-[40%] h-[140px] object-cover block" />
                                        <div className="flex flex-col w-full p-4">
                                            <p className="text-gray-500 text-sm">Shintaro Miyata</p>
                                            <p className="font-bold">React for Front Developer</p>

                                            <div className="w-fit bg-[#D6D6D6] text-[#929292] px-3 py-1 text-xs mt-2 rounded-full">
                                                Done
                                            </div>

                                            {/* progress bar */}
                                            <div className="flex items-center gap-2 mt-2 w-full">
                                                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                                                    <div className="bg-[#2D9CDB] h-full rounded-full" style={{ width: "100%" }} />
                                                </div>
                                                <p className="text-sm text-[#2D9CDB] font-medium w-10 text-right">100%</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            {/* RIGHT->MY WORK */}
                            <div className="col-span-1">
                                <div className="flex flex-row justify-between mb-4">
                                    <p className="font-medium text-2xl">My Work</p>
                                    <a href="#" className="text-[#2D9CDB] pt-6">Show All</a>
                                </div>

                                <div className="flex flex-col gap-4">

                                    {/*1 */}
                                    <a href="#">
                                        <div className="bg-white shadow p-4 flex justify-between items-center">
                                            <div>
                                                <span className="bg-[#2D9CDB] text-white px-3 py-1 rounded-full text-sm">
                                                    Java Script Course
                                                </span>
                                                <p className="font-semibold mt-2">App Tracker Task</p>
                                                <p className="text-[#929292] text-xs mt-1">Oct 15 2025</p>
                                            </div>
                                            <div className="w-2 h-2 bg-[#68CFFF] rounded-full"></div>
                                        </div>
                                    </a>

                                    {/*2 */}
                                    <a href="#">
                                        <div className="bg-[#D6D6D6]/50 p-4 shadow flex justify-between items-center">
                                            <div>
                                                <span className="bg-[#2D9CDB] text-white px-3 py-1 rounded-full text-sm">
                                                    Java Script Course
                                                </span>
                                                <p className="font-semibold mt-2 line-through">App Tracker Task</p>
                                                <p className="text-[#929292] text-xs mt-1">Oct 15 2025</p>
                                            </div>
                                            <img src={CompletedIcon} className="w-6 h-6" />
                                        </div>
                                    </a>

                                    {/*3 */}
                                    <a href="#">
                                        <div className="bg-[#D6D6D6]/50 p-4 shadow flex justify-between items-center">
                                            <div>
                                                <span className="bg-[#2D61DB] text-white px-3 py-1 rounded-full text-sm">
                                                    Cyber Security Course
                                                </span>
                                                <p className="font-semibold mt-2 line-through">API Task</p>
                                                <p className="text-[#929292] text-xs mt-1">Oct 7 2025</p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <img src={StarIcon} className="w-6 h-6" />
                                                <img src={CompletedIcon} className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}
