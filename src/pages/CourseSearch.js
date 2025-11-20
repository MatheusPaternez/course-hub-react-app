import Subvar from "../components/Subvar";
import CourseListSearch from "../components/CourseListSearch";

import { useState, useMemo, useContext } from "react";
import { useParams } from 'react-router-dom';
import IconRenderer from "../components/IconRender";
import { CourseHandlersContext } from '../components/CourseHandlersContext';
import Header from "../components/Header";

export default function CourseSearch() {
    const { categoryId = "html" } = useParams();

    const [searchText, setSearchText] = useState('');
    const { courses } = useContext(CourseHandlersContext);
    
    // handle search input change
    const handleSearchChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };


    const titleMap = {html: {title:"HTML/CSS", detail:"Build real websites from scratch using HTML and CSS."}, js:{title:"Java Script", detail:"Bring your websites to life with interactive features using JavaScript."}, cybersecurity:{title:"Cyber Security", detail:"Protect systems and data through ethical hacking and secure coding."}, java:{title:"Java", detail:"Learn to build powerful applications and back-end systems with Java."}, python:{title:"Python", detail:"Master Python to automate tasks, analyze data, and build smart applications."},uxui:{title:"UxUi Design", detail:"Design user-friendly and visually engaging digital experiences."}}
    
    
    // data filtering with useMemo
    const filteredList = useMemo(() => {
        if (!courses) {
        return [];
        }
        if (!searchText && categoryId == "") {
            return courses; // everything if no search text
        }
        // title filtering
        return courses.filter(item =>(searchText == ""? true:
            item.title.toLowerCase().includes(searchText)) && item.category.toLowerCase().includes(categoryId)
        );
    }, [courses,searchText, categoryId]);
    // return the loading or error state
    return (
        <>
            <div className="w-full h-auto bg-[#001c27] grid grid-cols-[250px_7fr] overflow-x-hidden ">
                {/*<Navbar />/* Navbar component */}
                <Subvar />
                <div className="p-10 w-full bg-gray-50 pr-12 rounded-4xl col-start-2 mt-12">
                    <div className="w-full grid grid-cols-[4rem_1fr_1fr] items-center justify-between relative bg-gray-50  mt-10 ml-20">
                        <IconRenderer iconName={categoryId}/>
                        <h2 className="font-medium text-3xl  col-span-2 col-start-2">{titleMap[categoryId]?.title}</h2>
                        <p className="text-xl font-semibold col-span-1 ">{titleMap[categoryId]?.detail}</p>
                        <div className="bg-gray-200 w-1/3 h-12 col-span-1 rounded-xl flex items-center justify-center absolute left-[50rem] top-0 mt-6 ml-6">
                            <svg className="mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="#929292" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className="mx-2" width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                            </svg>
                            <input type="text" className="w-[80%] focus:outline-none" onChange={handleSearchChange} placeholder="Search the Course"></input>
                        </div>
                    </div>

                    {/* This list going to be othercomponent */}
                    <CourseListSearch items={filteredList} />
                </div>
            </div>
        </>
    );
}