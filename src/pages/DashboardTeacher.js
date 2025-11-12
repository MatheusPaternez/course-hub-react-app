import UserIcon from "../assets/img/user-icon.png";
import { FaStar } from 'react-icons/fa';
export default function DashboardTeacher() {
    const courses = [{ courseId: '1', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course1.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '2', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course2.png', review: 4.6, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '3', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course3.png', review: 4.2, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '4', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course4.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '5', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course5.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Intermediate' }, { courseId: '6', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course6.png', review: 4.7, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Expart' }];
    return (
        <>
            <div className="w-screen h-full pl-16 pt-16 bg-[#001c27] grid grid-cols-[100px_1fr] h-screen">
                {/*<Navbar />/* Navbar component */}
                <div className="mt-12 ml-30 w-9/10 bg-white p-6 rounded-4xl col-start-2">
                    <div className="w-fullitems-center justify-between relative bg-white">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 22V8.25H22V22M0 22V13.75H8.25V22M11 5.5V0H22V5.5M0 11V0H8.25V11" fill="#2D9CDB" />
                        </svg>

                        <h2 className="font-bold text-3xl col-span-2 col-start-2">Dashboard-Teacher</h2>
                    </div>

                    {/* This list going to be othercomponent */}
                    <div className="w-full grid grid-cols-3 gap-4 items-center justify-center p-12">
                        <div className="flex flex-row justify-between col-start-1 col-span-2"><p className="font-bold">My profile</p> <a href="#" className="text-[#2D9CDB]">Edit</a></div>
                        <div className="flex flex-row justify-between col-start-3 col-span-1"><p className="font-bold">Events</p> <a href="#" className="text-[#2D9CDB]">Show all</a></div>
                        <div className="h-[21rem] min-w-full w-max flex-shrink-0 overflow-hidden shadow-md col-start-1 col-span-2 flex flex-row items-center justify-between">
                            <div className="flex flex-col flex-1 items-center justify-between">
                                <img className="w-20 h-20 object-cover" alt="User icon"src={UserIcon}></img>
                                <p className="font-bold text-lg">Kenta Onzo</p>
                            </div>
                            <div className="mt-4 px-2 flex-3 grid grid-cols-2 grid-rows-2 gap-2">
                                <p className="font-bold text-lg">Position</p>
                                <p className="text-lg">Position</p>
                                <p className="font-bold text-lg">Email</p>
                                <p className="text-lg">Email</p>
                                <p className="font-bold text-lg">Phone</p>
                                <p className="text-lg">Phone</p>
                            </div>
                        </div>
                        <div className="h-[21rem] min-w-full w-max flex-shrink-0 overflow-hidden shadow-md col-start-3 col-span-1">

                        </div>
                        <div className="overflow-hidden shadow-md ol-start-1">
                            <p className="text-gray-400 text-md mt-4 px-2">Milad Torabi</p>
                            <p className="font-bold text-lg px-2">JavaScript for Front-end Developer</p>
                            <div className="w-full grid grid-flow-col grid-cols-[22%-22%-6%-22%-6%-22%] items-center justify-center mt-2 p-1 pr-28">
                                <FaStar className="h-6 w-6 text-amber-400 mr-1" />
                                <p className="text-sm text-gray-400 font-medium">4.6</p>
                                <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                                </svg>
                                <p className="text-sm text-gray-400 font-medium whitespace-nowrap">64 hours</p>
                                <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                                </svg>
                                <p className="text-sm text-gray-400 font-medium">Beginer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}