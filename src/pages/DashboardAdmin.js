import UserIcon from "../assets/img/user-icon.png";
import Subvar from "../components/Subvar";

import CourseListDetail from "../components/CourseListDetail";
import { useState, useEffect, useContext } from "react";
import { CourseHandlersContext } from '../components/CourseHandlersContext';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

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
export default function DashboardAdmin() {

    //for render calendar
    const today = new Date();

    //for date
    const [date, setDate] = useState({ year: today.getFullYear(), month: today.getMonth() });

    setTimeout(() => renderCalendar(date.year, date.month), 100);


    //get data from context
    const { courses, isLoading, handleDeleteCourse } = useContext(CourseHandlersContext);

    // navigate define
    const navigate = useNavigate()

    const handlerClick = (mode, courseId = "") => {
        if (mode === "edit" || mode === "add") {
            // define navigate
            navigate(`/content/${mode}${courseId ? "/" + courseId : ""}`, {
            });
        } else if (mode === "delete") {
            handleDeleteCourse(courseId);
        }

    };


    //for overflow toggle
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const containerClasses = `h-90 min-w-full w-max flex-shrink-0 overflow-x-hidden col-span-3 
    ${isExpanded
            ? 'h-auto overflow-y-visible' //delete over-flow
            : 'h-90 overflow-y-scroll'    //normal display
        }
  `;

    if (isLoading) return <p className="max-w-10xl mx-auto px-6 center-text text-gray-400 text-xl"> Loading ... </p>;
    // if (error) return <p>Error: {error.message}</p>;


    return (
        <>
            <Header />
            <main>
                <div className="w-full h-auto pl-16 pt-4 bg-[#001c27] grid grid-cols-[100px_1fr]">
                    <Subvar />
                    <div className="mt-12 ml-30 w-9/10 pr-12 bg-gray-50 p-6 rounded-4xl col-start-2">
                        <div className="w-full items-center flex flex-row relative">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4 left-0">
                                <path d="M11 22V8.25H22V22M0 22V13.75H8.25V22M11 5.5V0H22V5.5M0 11V0H8.25V11" fill="#2D9CDB" />
                            </svg>

                            <h2 className="font-bold text-3xl col-span-2 col-start-2">Dashboard-Admin</h2>
                        </div>

                        <div className="w-full grid grid-cols-3 gap-4 items-center justify-center p-12">
                            <div className="flex flex-row justify-between col-start-1 col-span-2"><p className="font-bold">My profile</p> <a href="#" className="text-[#2D9CDB]">Edit</a></div>
                            <div className="flex flex-row justify-between col-start-3 col-span-1"><p className="font-bold">Events</p> <a href="#" className="text-[#2D9CDB]">Show all</a></div>
                            <div className="h-[21rem] min-w-full w-max flex-shrink-0 overflow-hidden shadow-md col-start-1 col-span-2 flex flex-row items-center justify-between">
                                <div className="flex flex-col flex-1 items-center justify-between">
                                    <img className="w-20 h-20 object-cover" alt="User icon" src={UserIcon}></img>
                                    <p className="font-bold text-lg">Kenta Onzo</p>
                                </div>
                                <div className="mt-4 px-2 flex-3 grid grid-cols-2 grid-rows-2 gap-2">
                                    <p className="text-lg">Teacher ID</p>
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
                            <div className="h-[21rem] min-w-full w-max flex-shrink-0 overflow-hidden shadow-md col-start-3 col-span-1">
                                <div className="p-4">
                                    <div className="flex justify-between items-center h-4 p-4 text-gray-600 rounded-t-lg">
                                        <button className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">
                                            &lt;
                                        </button>
                                        <h2 className="text-lg font-semibold">
                                            Nov. 2025
                                        </h2>
                                        <button onClick={() => { setDate(prevDate => ({ ...prevDate, month: prevDate.month + 1 })) }} className="text-xl font-bold p-2 hover:bg-blue-500 rounded-full">
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
                            <div className="flex flex-row justify-between col-start-1 col-span-3"><p className="font-bold">Course Management</p> <div onClick={toggleExpand} className="text-[#2D9CDB] cursor-pointer hover:underline hover:text-blue-800 transition duration-150">Show all</div></div>
                            <div className={containerClasses}>
                                {/* <CourseListSearch items={filteredAssignments} /> */}
                                {courses && courses.map((item, index) => (<CourseListDetail key={index} courseData={item} onEditClick={() => { handlerClick("edit", item.id) }} onDeleteClick={() => { handlerClick("delete", item.id) }} />))}

                            </div>
                            <div className="flex flex-row items-center col-start-2 justify-center">
                                <div className="flex flex-row w-full text-[#2D9CDB] text-2xl items-center cursor-pointer space-x-2 hover:underline hover:text-blue-800 transition duration-150" onClick={() => handlerClick("add")}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99984 1.66663C5.39734 1.66663 1.6665 5.39746 1.6665 9.99996C1.6665 14.6025 5.39734 18.3333 9.99984 18.3333C14.6023 18.3333 18.3332 14.6025 18.3332 9.99996C18.3332 5.39746 14.6023 1.66663 9.99984 1.66663ZM14.1665 10.8333H10.8332V14.1666H9.1665V10.8333H5.83317V9.16663H9.1665V5.83329H10.8332V9.16663H14.1665V10.8333Z" fill="#2D9CDB" />
                                    </svg>
                                    <p>Add Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}