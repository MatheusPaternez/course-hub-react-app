import UserIcon from "../assets/img/user-icon.png";
import Subvar from "../components/Subvar";

import UseFetch from "../hooks/UseFetch";
import CourseListDetail from "../components/CourseListDetail";
import { useState, useEffect, useMemo } from "react";

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
        emptyCell.textContent = ''; // または前月の日付
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
    //load assignment data from local storage or fetch
    const savedCourseData = localStorage.getItem('courses');
    const courses = !savedCourseData  ? savedCourseData :[{ courseId: '1', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course1.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '2', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course2.png', review: 4.6, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' },{courseId:'3', CourseTitle:'Java Script for Front-End Developer', imgPath:'../assets/img/Course3.png', review:4.2, teacher:'Milad torabi', estimatedTime:64, difficulty:'Beginer'},{courseId:'4', CourseTitle:'Java Script for Front-End Developer', imgPath:'../assets/img/Course4.png', review:4.5, teacher:'Milad torabi', estimatedTime:64, difficulty:'Beginer'},{ courseId: '5', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course5.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Intermediate' }, { courseId: '6', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course6.png', review: 4.7, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Expart' }];


    // useEffect(() => {
    //     if (savedCourseData) {
    //         localStorage.setItem('courses', JSON.stringify(courses));

    //     }
    // }, [work, assignments]);

    // if (loading || loadingCourse) return <p className="max-w-10xl mx-auto px-6 center-text text-gray-400 text-xl"> Loading ... </p>;
    // if (error || errorCourse) return <p>Error: {error.message}</p>;
    //update grade for save to local storage
    // const handleGradeUpdate = (targetId, newGrade) => {
    //     const updatedAssignments = assignments.map(assignment => {
    //         if (assignment.courseId === targetId) {
    //             return { ...assignment, grade: newGrade, status: 'Graded' };
    //         }
    //         return assignment;
    //     });
    //     setAssignments(updatedAssignments);
    //     localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
    // };

    //for render calendar
    const today = new Date();

    setTimeout(() => renderCalendar(today.getFullYear(), today.getMonth()), 100);
    return (
        <main>
            <div className="w-full h-auto pl-16 pt-4 bg-[#001c27] grid grid-cols-[100px_1fr]">
                <Subvar />
                <div className="mt-12 ml-30 w-full pr-12 bg-gray-50 p-6 rounded-4xl col-start-2">
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
                        <div className="flex flex-row justify-between col-start-1 col-span-3"><p className="font-bold">Course Management</p> <a href="#" className="text-[#2D9CDB]">Show all</a></div>
                        <div className="h-auto min-w-full w-max flex-shrink-0 overflow-hidden shadow-md col-span-3">
                            {/* <CourseListSearch items={filteredAssignments} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}