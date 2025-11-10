import Course1 from "../assets/img/Course1.png";
import Course2 from "../assets/img/Course2.png";
import Course3 from "../assets/img/Course3.png";
import { FaStar } from 'react-icons/fa';
export default function CourseSearch() {
    const courses = [{ courseId: '1', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course1.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' }, { courseId: '2', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course2.png', review: 4.6, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Beginer' },{courseId:'3', CourseTitle:'Java Script for Front-End Developer', imgPath:'../assets/img/Course3.png', review:4.2, teacher:'Milad torabi', estimatedTime:64, difficulty:'Beginer'},{courseId:'4', CourseTitle:'Java Script for Front-End Developer', imgPath:'../assets/img/Course4.png', review:4.5, teacher:'Milad torabi', estimatedTime:64, difficulty:'Beginer'},{ courseId: '5', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course5.png', review: 4.5, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Intermediate' }, { courseId: '6', CourseTitle: 'Java Script for Front-End Developer', imgPath: '../assets/img/Course6.png', review: 4.7, teacher: 'Milad torabi', estimatedTime: 64, difficulty: 'Expart' }];
    return (
        <>
            <div className="w-screen h-full pl-16 pt-16 bg-[#001c27] grid grid-cols-[100px_1fr] h-screen">
                {/*<Navbar />/* Navbar component */}
                <div className="mt-12 ml-30 w-9/10 bg-white p-6 rounded-4xl col-start-2">
                    <div className="w-screen grid grid-cols-[4rem_1fr_1fr] items-center justify-between relative bg-white">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 col-start-1 row-span-2 mb-6">
                            <g clipPath="url(#clip0_67_68)">
                                <path d="M16.6667 37.8833C16.0212 37.6179 15.4495 37.2005 15 36.6667H5C4.55797 36.6667 4.13405 36.4911 3.82149 36.1785C3.50893 35.866 3.33333 35.442 3.33333 35V8.75C3.33333 8.63949 3.37723 8.53351 3.45537 8.45537C3.53351 8.37723 3.63949 8.33333 3.75 8.33333H36.25C36.3605 8.33333 36.4665 8.37723 36.5446 8.45537C36.6228 8.53351 36.6667 8.63949 36.6667 8.75V17.3667L40 18.7833V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H21.6667L16.6667 37.8833ZM17.5 2.5C17.942 2.5 18.3659 2.67559 18.6785 2.98816C18.9911 3.30072 19.1667 3.72464 19.1667 4.16667C19.1667 4.60869 18.9911 5.03262 18.6785 5.34518C18.3659 5.65774 17.942 5.83333 17.5 5.83333C17.058 5.83333 16.634 5.65774 16.3215 5.34518C16.0089 5.03262 15.8333 4.60869 15.8333 4.16667C15.8333 3.72464 16.0089 3.30072 16.3215 2.98816C16.634 2.67559 17.058 2.5 17.5 2.5ZM11.6667 2.5C12.1087 2.5 12.5326 2.67559 12.8452 2.98816C13.1577 3.30072 13.3333 3.72464 13.3333 4.16667C13.3333 4.60869 13.1577 5.03262 12.8452 5.34518C12.5326 5.65774 12.1087 5.83333 11.6667 5.83333C11.2246 5.83333 10.8007 5.65774 10.4882 5.34518C10.1756 5.03262 10 4.60869 10 4.16667C10 3.72464 10.1756 3.30072 10.4882 2.98816C10.8007 2.67559 11.2246 2.5 11.6667 2.5ZM5.83333 2.5C6.27536 2.5 6.69928 2.67559 7.01184 2.98816C7.3244 3.30072 7.5 3.72464 7.5 4.16667C7.5 4.60869 7.3244 5.03262 7.01184 5.34518C6.69928 5.65774 6.27536 5.83333 5.83333 5.83333C5.39131 5.83333 4.96738 5.65774 4.65482 5.34518C4.34226 5.03262 4.16667 4.60869 4.16667 4.16667C4.16667 3.72464 4.34226 3.30072 4.65482 2.98816C4.96738 2.67559 5.39131 2.5 5.83333 2.5Z" fill="#2D9CDB" />
                                <path d="M40 22.6166C39.9997 22.2895 39.9031 21.9696 39.7224 21.697C39.5416 21.4243 39.2845 21.2109 38.9833 21.0833L28.9833 16.7999C28.7777 16.7128 28.5566 16.668 28.3333 16.668C28.11 16.668 27.8889 16.7128 27.6833 16.7999L17.6833 21.0833C17.382 21.2109 17.125 21.4243 16.9442 21.697C16.7634 21.9696 16.6669 22.2895 16.6666 22.6166V34.0499C16.6669 34.3771 16.7634 34.6969 16.9442 34.9696C17.125 35.2423 17.382 35.4557 17.6833 35.5833L27.6833 39.8666C27.8889 39.9537 28.11 39.9986 28.3333 39.9986C28.5566 39.9986 28.7777 39.9537 28.9833 39.8666L38.9833 35.5833C39.2845 35.4557 39.5416 35.2423 39.7224 34.9696C39.9031 34.6969 39.9997 34.3771 40 34.0499V22.6166ZM28.3333 20.1499L34.1 22.6166L28.3333 25.0999L22.5666 22.6166L28.3333 20.1499ZM20 25.1499L26.6666 27.9999V35.7999L20 32.9499V25.1499ZM30 35.7999V27.9999L36.6666 25.1499V32.9499L30 35.7999Z" fill="#2D9CDB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_67_68">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className="font-bold text-3xl col-span-2 col-start-2">HTML/CSS</h2>
                        <p className="text-xl font-semibold col-span-1 ">Build real websites from scratch using HTML and CSS.</p>
                        <div className="bg-gray-200 w-84 h-12 col-span-1 rounded-xl flex items-center justify-center absolute left-1/2 ">
                            <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="#929292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className="mx-2" width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                            </svg>
                            <input type="text" className="w-[80%] focus:outline-none" placeholder="Search the Course and Teacher"></input>
                        </div>
                    </div>

                    {/* This list going to be othercomponent */}
                    <div className="w-full grid grid-cols-3 items-center justify-center p-12">
                        <div className="h-[21rem] w-80 overflow-hidden shadow-md">
                            <img className="w-full h-3/5 object-cover" src={Course1}></img>
                            <p className="text-gray-400 text-md mt-4 px-2">Milad Torabi</p>
                            <p className="font-bold text-lg px-2">JavaScript for Front-end Developer</p>
                            <div className="w-full grid grid-flow-col grid-cols-[22%-22%-6%-22%-6%-22%] items-center justify-center mt-2 p-1 pr-28">
                                <FaStar className="h-6 w-6 text-amber-400 mr-1" />
                                <p className="text-sm text-gray-400 font-medium">4.5</p>
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
                        <div className="h-[21rem] w-80 overflow-hidden shadow-md">
                            <img className="w-full h-3/5 object-cover" src={Course2}></img>
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
                        <div className="h-[21rem] w-80 overflow-hidden shadow-md">
                            <img className="w-full h-3/5 object-cover" src={Course3}></img>
                            <p className="text-gray-400 text-md mt-4 px-2">Milad Torabi</p>
                            <p className="font-bold text-lg px-2">JavaScript for Front-end Developer</p>
                            <div className="w-full grid grid-flow-col grid-cols-[22%-22%-6%-22%-6%-22%] items-center justify-center mt-2 p-1 pr-28">
                                <FaStar className="h-6 w-6 text-amber-400 mr-1" />
                                <p className="text-sm text-gray-400 font-medium">4.2</p>
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