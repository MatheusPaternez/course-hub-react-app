import Subvar from "../components/Subvar";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import CourseListSearch from "../components/CourseListSearch";
import UseFetch from "../hooks/UseFetch";
import { useState, useMemo } from "react";
import IconRenderer from "../components/IconRender";

export default function CourseDetail() {

    // 1. useLocation
    const location = useLocation();

    const navigate = useNavigate()

    // 2. location.state
    const { title, author, image, hours, level } = location.state || {};
    const { categoryId, courseId } = useParams();

    const { data: courses, loading, error } = UseFetch('/api/course-detail');

    // 2. data filtering with useMemo
    const courseDetail = useMemo(() => {
        if (!courses) {
            return []; // nothing if no data
        }
        // id filtering
        return courses.find(item => String(item.id) === String(courseId)
        );
    }, [courses, courseId]);

    const handleEnrollClick = () => {
        // define navigate
        navigate(`/courses/section/${courseDetail.id}/`, {
            state: {
               ...courseDetail, title, author, image, hours, level
            }
        });
    };

    if (loading) return <p className="max-w-10xl mx-auto px-6 center-text text-gray-400 text-xl"> Loading ... </p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className="w-full h-auto pl-8 pt-6 bg-[#001c27] grid grid-cols-[1fr_7fr] overflow-x-hidden ">
                <Subvar />
                {/*<Navbar />/* Navbar component */}
                <div className="mt-4 ml-12 w-full pr-12 min-w-[70rem] bg-gray-50 p-6 rounded-4xl col-start-2">
                    <div className="w-full grid grid-cols-[4rem_1fr_1fr] items-center justify-between relative bg-gray-50">
                        <IconRenderer iconName={categoryId}/>
                        <h2 className="font-bold text-3xl col-span-2 col-start-2">{title}</h2>
                        <div className="flex gap-4 text-gray-400 items-center mt-4" >
                            <p>{author}</p>
                            <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                            </svg>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0188 20.3508L11.0092 20.3525L10.947 20.3831L10.9295 20.3866L10.9173 20.3831L10.8552 20.3525C10.8458 20.3496 10.8388 20.351 10.8342 20.3569L10.8307 20.3656L10.8158 20.7401L10.8202 20.7576L10.8289 20.769L10.9199 20.8338L10.933 20.8373L10.9435 20.8338L11.0345 20.769L11.045 20.755L11.0485 20.7401L11.0337 20.3665C11.0313 20.3572 11.0264 20.3519 11.0188 20.3508ZM11.2507 20.2519L11.2393 20.2536L11.0774 20.335L11.0687 20.3438L11.066 20.3534L11.0818 20.7296L11.0862 20.7401L11.0932 20.7463L11.269 20.8276C11.2801 20.8305 11.2886 20.8282 11.2944 20.8206L11.2979 20.8084L11.2682 20.2711C11.2652 20.2606 11.2594 20.2542 11.2507 20.2519ZM10.625 20.2536C10.6212 20.2513 10.6166 20.2505 10.6122 20.2515C10.6078 20.2525 10.6039 20.2551 10.6014 20.2589L10.5962 20.2711L10.5664 20.8084C10.567 20.8189 10.5719 20.8259 10.5813 20.8294L10.5944 20.8276L10.7703 20.7463L10.779 20.7393L10.7825 20.7296L10.7974 20.3534L10.7948 20.3429L10.786 20.3341L10.625 20.2536Z" fill="#2D9CDB" />
                                <path d="M10.5 1.75C15.3326 1.75 19.25 5.66738 19.25 10.5C19.25 15.3326 15.3326 19.25 10.5 19.25C5.66738 19.25 1.75 15.3326 1.75 10.5C1.75 5.66738 5.66738 1.75 10.5 1.75ZM10.5 3.5C8.64348 3.5 6.86301 4.2375 5.55025 5.55025C4.2375 6.86301 3.5 8.64348 3.5 10.5C3.5 12.3565 4.2375 14.137 5.55025 15.4497C6.86301 16.7625 8.64348 17.5 10.5 17.5C12.3565 17.5 14.137 16.7625 15.4497 15.4497C16.7625 14.137 17.5 12.3565 17.5 10.5C17.5 8.64348 16.7625 6.86301 15.4497 5.55025C14.137 4.2375 12.3565 3.5 10.5 3.5ZM10.5 5.25C10.7143 5.25003 10.9212 5.32871 11.0813 5.47113C11.2415 5.61354 11.3438 5.80978 11.3689 6.02262L11.375 6.125V10.1378L13.7436 12.5064C13.9006 12.6638 13.9917 12.8751 13.9984 13.0973C14.0052 13.3195 13.9272 13.536 13.7802 13.7027C13.6331 13.8695 13.4281 13.974 13.2068 13.9951C12.9855 14.0162 12.7645 13.9522 12.5886 13.8162L12.5064 13.7436L9.88138 11.1186C9.74538 10.9825 9.65804 10.8054 9.63287 10.6146L9.625 10.5V6.125C9.625 5.89294 9.71719 5.67038 9.88128 5.50628C10.0454 5.34219 10.2679 5.25 10.5 5.25Z" fill="#2D9CDB" />
                            </svg>
                            <p>{hours}</p>
                            <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                            </svg>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="9.33337" width="4" height="4.66667" fill="#2D9CDB" />
                                <rect x="6" y="4.66663" width="4" height="9.33333" fill="#2D9CDB" />
                                <rect x="12" width="4" height="14" fill="#2D9CDB" />
                            </svg>
                            <p>{level}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 p-6 mt-6">
                        <img src={image} alt={title} className="w-full h-84 object-cover" />
                        <div className="w-full">
                            <p className="text-3xl font-medium">Course Contents</p>
                            <div className="bg-white p-8 ">
                                <ul className="list-disc list-none list-inside space-y-2">
                                    {courseDetail.curriculum && courseDetail.curriculum.length > 0 ? (
                                        courseDetail.curriculum.map((curriculum, idx) => (
                                            <li key={idx} className="text-xl flex items-start items-center">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6.78793 12 7.56815 11.8448 8.2961 11.5433C9.02405 11.2417 9.68549 10.7998 10.2426 10.2426C10.7998 9.68549 11.2417 9.02405 11.5433 8.2961C11.8448 7.56815 12 6.78793 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 -1.17411e-08 6 0C4.4087 2.37122e-08 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.84533 8.42667L9.17867 4.42667L8.15467 3.57333L5.288 7.01267L3.80467 5.52867L2.862 6.47133L4.862 8.47133L5.378 8.98733L5.84533 8.42667Z" fill="#2D9CDB" />
                                                </svg>
                                                <span>{curriculum}</span>
                                            </li>
                                        ))
                                    ) : (<p>no data</p>
                                    )}
                                </ul>
                            </div>
                            <div className="w-full flex items-center justify-center py-12">
                                <button className="w-3/4 text-white text-lg px-6 py-3 rounded-lg mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 font-semibold shadow-md justify-center" onClick={() => handleEnrollClick(handleEnrollClick)}>
                                    Enroll In Course &#8594;
                                </button>
                            </div>


                        </div>
                        <div className="col-span-2 ">
                            <p className="text-2xl font-medium mt-4 mb-6">About</p>
                            <div className="bg-white h-auto p-8">
                                <div>
                                    <div className="p-4 pl-8 flex flex-row items-center justify-start">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 mr-2">
                                            <path d="M26 6.33242L13 0.914062L0 6.33242L13 11.7508L26 6.33242ZM13 13.9141L5.6418 10.4812L0 12.8324L13 18.2508L26 12.8324L20.3582 10.4812L13 13.9141ZM13 20.4141L5.91094 16.8695L0 19.3324L13 24.7508L26 19.3324L20.0891 16.8695L13 20.4141Z" fill="#2D9CDB" />
                                        </svg>
                                        <p className="text-lg font-medium">Course OverView</p>
                                    </div>
                                    <p className="text-md mb-4 p-2 px-16">
                                        {courseDetail.courseOverview}
                                    </p>
                                </div>
                                <hr className="w-[95%] mx-auto"></hr>
                                <div>
                                    <div className="p-4 pl-8 flex flex-row items-center justify-start mt-2">
                                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 mr-2">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47148 0L11.5 1.03855L13.5285 0H23V17.6821H14.0702L11.5 19L8.92865 17.6821H0V0H9.47148ZM8.92859 2.35763H2.30002V15.3244H9.47148L10.35 15.7742V3.08613L8.92859 2.35763ZM20.7 2.35763H14.0702L12.65 3.08585V15.7742L13.5285 15.3244H20.7V2.35763ZM19.55 9.43046V11.1987H13.8V9.43046H19.55ZM9.20001 9.43046V11.1987H3.45V9.43046H9.20001ZM19.55 4.7152V6.48341H13.8V4.7152H19.55ZM9.20001 4.7152V6.48341H3.45V4.7152H9.20001Z" fill="#2D9CDB" />
                                        </svg>
                                        <p className="text-lg font-medium">By the end of this course, you will</p>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 px-20 mb-10" >
                                        {courseDetail.whatYouWillLearn && courseDetail.whatYouWillLearn.length > 0 ? (
                                            courseDetail.whatYouWillLearn.map((learn, idx) => (
                                                <li key={idx} className="text-md">{learn} </li>))) : (<p>no data</p>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}