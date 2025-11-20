import UserIcon from "../assets/img/user-icon.png";
import UseFetch from "../hooks/UseFetch";
import { useState, useEffect, useContext } from "react";
import { CourseHandlersContext } from '../components/CourseHandlersContext';
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
//images 
import IconHtmlCourse from "../assets/img/Course6.png";
import IconJavaCourse from "../assets/img/Course3.png";
import IconJSCourse from "../assets/img/js-course-icon.png";
import IconPyCourse from "../assets/img/py-course-icon.png";
import IconUxUiCourse from "../assets/img/uxui-course-icon.jpg";



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
        <div className="w-full md:h-screen h-auto text-white flex md:flex-col flex-row md:gap-6 gap-4 py-6 md:py-10 mt-4 md:mt-20 items-center md:items-start px-4 md:px-0">
            {menu.map((item) => (
                <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className="flex items-center gap-4 md:pl-6 pl-2 py-2 md:py-3 transition-all w-full md:w-auto justify-center md:justify-start"
                >
                    {/*if i click icon than show active not than show basic*/}
                    <img
                        src={active === item.key ? item.activeIcon : item.icon}
                        className={`${active === item.key ? "w-9 h-9" : "w-6 h-6"}`}
                    />
                    <span
                        className={`hidden md:inline-block font-medium ${active === item.key ? "text-[#2D9CDB] text-base" : "text-white text-sm"
                            } break-words`}
                    >
                        {item.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default function ContentManagement() {
    const navigate = useNavigate();

    //Save at local Storage
    //1. form state
    const [courseID, setCourseID] = useState("");
    const [courseName, setCourseName] = useState("");
    const [courseType, setCourseType] = useState("");
    const [courseIntro, setCourseIntro] = useState("");
    const [courseLevel, setCourseLevel] = useState("");
    const [courseTime, setCourseTime] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [date, setDate] = useState("");

    //get params
    const { mode, courseId } = useParams();
    //get data from context
    const { courses, handleAddCourse, handleEditCourse } = useContext(CourseHandlersContext);

    //edit mode flag set
    const isEditing = mode == "add" && !courseId ? false : true;

    // when edit mode set the date to form
    useEffect(() => {
        if (isEditing) {
            const courseToEdit = courses.find(c => c.id === courseId);
            if (courseToEdit) {
                setCourseID(courseToEdit.id);
                setCourseName(courseToEdit.title);
                setCourseType(courseToEdit.category);
                setCourseIntro("");
                setCourseLevel(courseToEdit.level);
                setCourseTime(courseToEdit.hours);
                setTeacherName(courseToEdit.author);
                setDate("");
            }
        }
    }, [isEditing, courseID, courses]);

    //2. Submit->save to localStorage
    const handleSubmit = (e) => {
        let imgobj = IconHtmlCourse;
        switch (courseType) {
            case "Html":
                imgobj = IconHtmlCourse;
                break;
            case "Java":
                imgobj = IconJavaCourse;
                break;
            case "Js":
                imgobj = IconJSCourse;
                break;
            case "Uxui":
                imgobj = IconUxUiCourse;
                break;
            case "Python":
                imgobj = IconPyCourse;
                break;
            default:
                break;

        }
        const data = {
            id: courseID,
            title: courseName,
            category: courseType,
            intro: courseIntro,
            level: courseLevel,
            hours: courseTime,
            author: teacherName,
            date: date,
            image: imgobj
        };



        // localStorage.setItem("courseData", JSON.stringify(data));
        // console.log("Saved Course Data:", data);
        e.preventDefault();

        if (!courseName || !courseLevel || !courseTime || !teacherName) {
            alert("You need enter the required input");
            return;
        }

        // check edit flag
        if (isEditing) {
            handleEditCourse(data);
        } else {
            handleAddCourse(data);
        }

        alert("Course saved successfully!");
        // 
        navigate('/dashboard-admin');


        //3. reset!
        setCourseID("");
        setCourseName("");
        setCourseType("");
        setCourseIntro("");
        setCourseLevel("");
        setCourseTime("");
        setTeacherName("");
        setDate("");
    };

    return (
        <><Header />
        <main>
            <div className="bg-[#001c27] min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr]">
                <Subvar />

                {/* Main content box */}
                <div className="w-full bg-gray-50 p-6 md:p-10 rounded-2xl md:rounded-3xl mr-0 md:mr-10 mt-6 md:mt-12">

                    {/* Top title */}
                    <div className="w-full flex items-center gap-3 ml-2 md:ml-20 mt-4 md:mt-10">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 22V8.25H22V22M0 22V13.75H8.25V22M11 5.5V0H22V5.5M0 11V0H8.25V11"
                                fill="#2D9CDB" />
                        </svg>
                        <h2 className="font-semibold text-2xl md:text-3xl">Contents Management</h2>
                    </div>

                    {/* Form container */}
                    <div className="bg-white p-6 md:p-10 mt-6 md:mt-10 ml-2 md:ml-20 max-w-full md:max-w-10xl rounded-lg">

                        {/* Course ID */}
                        <div className="mb-6 md:mb-10">
                            <label className="block font-medium mb-2">
                                Course ID<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className={`w-full bg-gray-100 p-3 rounded-md ${isEditing?"text-gray-500":""}`}
                                placeholder="Ex) C1..."
                                value={courseID}
                                onChange={(e) => setCourseID(e.target.value)}
                                required
                                readOnly={isEditing}
                            />
                        </div>

                        {/* Course Name + Course Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                            <div>
                                <label className="block font-medium mb-2">
                                    Course Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 p-3 rounded-md"
                                    placeholder="Type here..."
                                    value={courseName}
                                    onChange={(e) => setCourseName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Course Type</label>
                                <select
                                    className="w-full bg-gray-100 p-3 rounded-md text-gray-500"
                                    value={courseType}
                                    onChange={(e) => setCourseType(e.target.value)}
                                >
                                    <option>-Select-</option>
                                    <option value="Html">Html/Css</option>
                                    <option value="Js">Java Script</option>
                                    <option>Java</option>
                                    <option>Python</option>
                                    <option value="Uxui">UxUi</option>
                                </select>
                            </div>
                        </div>

                        {/* Course Introduce */}
                        <div className="mt-6 md:mt-8">
                            <label className="block font-medium mb-2">Course Introduce</label>
                            <textarea
                                className="w-full bg-gray-100 p-3 rounded-md h-20"
                                placeholder="Type here..."
                                value={courseIntro}
                                onChange={(e) => setCourseIntro(e.target.value)}
                            />
                        </div>

                        {/* Course Level + Course Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-8">
                            <div>
                                <label className="block font-medium mb-2">Course Level<span className="text-red-500">*</span></label>
                                <select
                                    className="w-full bg-gray-100 p-3 rounded-md text-gray-500"
                                    value={courseLevel}
                                    onChange={(e) => setCourseLevel(e.target.value)}
                                    required
                                >
                                    <option>-Select-</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Course time<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 p-3 rounded-md"
                                    placeholder="Ex)24h"
                                    value={courseTime}
                                    onChange={(e) => setCourseTime(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Teacher Name + Select Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-8">
                            <div>
                                <label className="block font-medium mb-2">Teacher Name<span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 p-3 rounded-md"
                                    placeholder="Type here..."
                                    value={teacherName}
                                    onChange={(e) => setTeacherName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">Select Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-gray-100 p-3 rounded-md text-gray-500"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-6 md:mt-10">
                            <button
                                onClick={handleSubmit}
                                className="bg-[#2D9CDB] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                            >
                                Submit →
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
        </>
    );
}
