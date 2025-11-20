import UserIcon from "../assets/img/user-icon.png";
// import Subvar from "../components/Subvar";
import CourseListSearch from "../components/CourseListSearch";
import {useFetch} from "../hooks/UseFetch";
import Assignment from "../components/Assignment";
import { useState, useEffect, useMemo, useContext } from "react";
import { CourseHandlersContext } from '../components/CourseHandlersContext';
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import useAuth from '../hooks/useAuth';


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
        <div className="w-full md:h-screen h-auto text-white flex md:flex-col flex-row md:gap-6 gap-4 py-6 md:py-10 mt-4 md:mt-20 items-center md:items-start px-4 md:px-0">
            {menu.map((item) => (
                <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`flex items-center gap-4 md:pl-6 pl-2 py-2 md:py-3 transition-all w-full md:w-auto justify-center md:justify-start
                    `}
                >
                    <img
                    src={active === item.key ? item.activeIcon : item.icon}
                    className={`${active === item.key ? "w-9 h-9" : "w-6 h-6"}`}
                    />
                    <span
                    className={`hidden md:inline-block font-medium
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
    const gridContainer = document.getElementById('calendar-grid');
    if (!gridContainer) return; // find container

    gridContainer.innerHTML = ''; // clear carendar

    // first day of month
    const firstDayOfMonth = new Date(year, month, 1);

    // day of week
    const startDayOfWeek = firstDayOfMonth.getDay();

    // number of days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // --- make padding ---
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'p-2 text-center text-gray-400';
        emptyCell.textContent = ''; 
        gridContainer.appendChild(emptyCell);
    }

    // --- making cell of days---
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');

        // common classes
        dateCell.className = 'p-2 text-center h-10 cursor-pointer hover:bg-gray-100 transition-colors duration-150';
        dateCell.textContent = day;

        // for today highlight
        const today = new Date();
        const isToday = (day === today.getDate() && month === today.getMonth() && year === today.getFullYear());

        if (isToday) {
            dateCell.classList.add('bg-blue-500', 'text-white', 'font-bold');
            dateCell.classList.remove('hover:bg-gray-100'); // stop hover effect for today
        }

        gridContainer.appendChild(dateCell);
    }
}
export default function DashboardTeacher() {
    const { user, signOut } = useAuth(); // get user and signOut from auth context

    //load assignment data from local storage or fetch
    const savedData = localStorage.getItem('assignments');
    const initialData = savedData ? JSON.parse(savedData) : null;

    const [assignments, setAssignments] = useState(initialData);

    const { courses, work } = useContext(CourseHandlersContext);


    // useMemo for filtering assignments for a specific student
    const filteredAssignments = useMemo(() => {
        if (!courses) {
            return []; // return empty array if courses data is not available
        }
        // execute filtering
        return courses.filter(item =>
            item.author.includes('Tiana') // test filter condition it should be dynamic
        );
    }, [courses]);

    //assignment data set
    useEffect(() => {
        if (work && assignments == null) {
            setAssignments(work);
            localStorage.setItem('assignments', JSON.stringify(work));

        }
    }, [work, assignments]);

    //update grade for save to local storage
    const handleGradeUpdate = (targetId, newGrade) => {
        const updatedAssignments = assignments.map(assignment => {
            if (assignment.courseId === targetId) {
                return { ...assignment, grade: newGrade, status: 'Graded' };
            }
            return assignment;
        });
        setAssignments(updatedAssignments);
        localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
    };

    //for render calendar
    const today = new Date();

    setTimeout(() => renderCalendar(today.getFullYear(), today.getMonth()), 100);
    return (
        <>
        <Header/>
        <main>
            <div className="w-full h-auto bg-[#001c27] grid grid-cols-1 md:grid-cols-[250px_1fr]">
                <Subvar />
                <div className="w-full mt-6 md:mt-12 p-6 md:p-10 pr-4 md:pr-12 bg-gray-50 rounded-2xl md:rounded-4xl col-start-2">
                    <div className="w-full items-center flex flex-row relative mt-4 md:mt-10 ml-2 md:ml-20">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4 left-0">
                            <path d="M11 22V8.25H22V22M0 22V13.75H8.25V22M11 5.5V0H22V5.5M0 11V0H8.25V11" fill="#2D9CDB" />
                        </svg>

                        <h2 className="font-medium text-2xl md:text-3xl col-span-2 col-start-2 ">Dashboard-Teacher</h2>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center p-6 md:p-20">
                        <div className="flex flex-row justify-between md:col-start-1 md:col-span-2"><p className="font-medium text-xl md:text-2xl">My profile</p> <a href="#" className="text-[#2D9CDB]">Edit</a></div>
                        <div className="flex flex-row justify-between md:col-start-3 md:col-span-1"><p className="font-medium text-xl md:text-2xl">Events</p> <a href="#" className="text-[#2D9CDB]">Show all</a></div>
                        <div className="md:h-[21rem] h-auto w-full flex-shrink-0 overflow-hidden shadow-md md:col-start-1 md:col-span-2 flex flex-row items-center justify-between bg-white p-4 rounded-lg">
                            <div className="flex flex-col flex-1 items-center justify-between">
                                <img className="w-20 h-20 object-cover" alt="User icon" src={UserIcon}></img>
                                <p className="font-bold text-lg">{user?.name}</p>
                            </div>
                            <div className="mt-4 px-2 flex-3 grid grid-cols-2 grid-rows-2 gap-2">
                                <p className="text-lg">{user?.role} ID</p>
                                <p className="text-lg text-gray-500">T-0923</p>
                                <p className="text-lg">Department</p>
                                <p className="text-lg text-gray-500">Frontend</p>
                                <p className="text-lg">Experience</p>
                                <p className="text-lg text-gray-500">3 years teaching experience</p>
                                <p className="text-lg">Specialization</p>
                                <p className="text-lg text-gray-500">React, Java Script</p>
                                <p className="text-lg">Phone</p>
                                <p className="text-lg text-gray-500">+1 778-778-7788</p>
                            </div>
                        </div>
                        <div className="md:h-[21rem] h-auto w-full flex-shrink-0 overflow-hidden shadow-md md:col-start-3 md:col-span-1 bg-white rounded-lg">
                            <div className="p-4">
                                <div className="flex justify-between items-center h-4 p-4 text-gray-600 rounded-t-lg">
                                    <button className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">
                                        &lt;
                                    </button>
                                    <h2 className="text-lg font-semibold">
                                        Nov. 2025
                                    </h2>
                                    <button className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">
                                        &gt;
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 border-b">
                                    <div className="p-2">Sun</div>
                                    <div className="p-2">Mon</div>
                                    <div className="p-2">Tue</div>
                                    <div className="p-2">Wed</div>
                                    <div className="p-2">Thu</div>
                                    <div className="p-2">Fri</div>
                                    <div className="p-2">Sat</div>
                                </div>
                                <div id="calendar-grid" className="grid grid-cols-7 border-t border-gray-200">
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between md:col-start-1 md:col-span-3"><p className="font-medium text-xl md:text-2xl">Course Management</p><Link to="/courses"  className="text-[#2D9CDB]">Explore All Courses</Link></div>
                        <div className="h-auto min-w-full w-full flex-shrink-0 overflow-hidden col-span-3 shadow-sm bg-white rounded-lg p-4">
                            <CourseListSearch items={filteredAssignments} />
                        </div>
                        <div className="flex flex-row justify-between md:col-start-1 md:col-span-3"><p className="font-medium text-xl md:text-2xl">Assignments & Grading</p> <select defaultValue="default" className="w-40 max-w-40 overflow-hidden text-ellipsis whitespace-nowrap bg-white px-4 py-2 rounded-lg border border-gray-300 text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="default" disabled hidden>Status　　&#8897;</option>
                            <option value="active">ClassName</option>
                            <option value="pending">Status</option>
                            <option value="completed">Grade</option>
                        </select>
                        </div>
                        <div className="h-auto min-w-full w-full flex-shrink-0 overflow-hidden col-span-3">
                            <div className="flex-shrink-0">
                                <ul className="w-full text-gray-600 flex flex-row flex-wrap md:flex-nowrap flex-grow items-center justify-between p-4 px-4 md:px-12 font-bold text-center">
                                    <li className="flex-1 text-center">Name</li>
                                    <li className="flex-1 text-center">ClassName</li>
                                    <li className="flex-1 text-center">Status</li>
                                    <li className="flex-1 text-center">Grade</li>
                                    <li className="flex-1 text-center">Action</li>
                                </ul>
                                <hr className="w-full border-t border-gray-300" />
                                {assignments && assignments.map((item, index) => (
                                    <Assignment key={index} studentData={item} onGradeUpdate={handleGradeUpdate} />))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}