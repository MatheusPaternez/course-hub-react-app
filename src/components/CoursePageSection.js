import React from "react";
import { useLocation } from "react-router-dom"
import Subvar from "./Subvar";

export default function CoursePageSection() {

    // useLocation
    const location = useLocation();

    // Destructuring the course prop received
    const { title, author = "", poster = "", curriculum = [], hours = 0, level = "" } = location.state || {};
    return (
        <div className="w-full h-auto bg-[#001c27] grid grid-cols-[250px_1fr] overflow-x-hidden ">
            <Subvar />
            <section className="mt-12 p-10 w-full pr-12 min-w-[70rem] bg-gray-50 rounded-4xl col-start-2">
                <header className="mb-6 mt-10 ml-20">
                    <h1 className="text-3xl font-medium text-gray-800">{title || "Untitled Course"}</h1>
                    <div className="text-sm text-gray-600 flex flex-row items-center mt-2 space-x-2">
                        <span>{author || "Unknown Author"}</span>
                        <span className="mx-2">                            <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                        </svg></span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0188 20.3508L11.0092 20.3525L10.947 20.3831L10.9295 20.3866L10.9173 20.3831L10.8552 20.3525C10.8458 20.3496 10.8388 20.351 10.8342 20.3569L10.8307 20.3656L10.8158 20.7401L10.8202 20.7576L10.8289 20.769L10.9199 20.8338L10.933 20.8373L10.9435 20.8338L11.0345 20.769L11.045 20.755L11.0485 20.7401L11.0337 20.3665C11.0313 20.3572 11.0264 20.3519 11.0188 20.3508ZM11.2507 20.2519L11.2393 20.2536L11.0774 20.335L11.0687 20.3438L11.066 20.3534L11.0818 20.7296L11.0862 20.7401L11.0932 20.7463L11.269 20.8276C11.2801 20.8305 11.2886 20.8282 11.2944 20.8206L11.2979 20.8084L11.2682 20.2711C11.2652 20.2606 11.2594 20.2542 11.2507 20.2519ZM10.625 20.2536C10.6212 20.2513 10.6166 20.2505 10.6122 20.2515C10.6078 20.2525 10.6039 20.2551 10.6014 20.2589L10.5962 20.2711L10.5664 20.8084C10.567 20.8189 10.5719 20.8259 10.5813 20.8294L10.5944 20.8276L10.7703 20.7463L10.779 20.7393L10.7825 20.7296L10.7974 20.3534L10.7948 20.3429L10.786 20.3341L10.625 20.2536Z" fill="#2D9CDB" />
                            <path d="M10.5 1.75C15.3326 1.75 19.25 5.66738 19.25 10.5C19.25 15.3326 15.3326 19.25 10.5 19.25C5.66738 19.25 1.75 15.3326 1.75 10.5C1.75 5.66738 5.66738 1.75 10.5 1.75ZM10.5 3.5C8.64348 3.5 6.86301 4.2375 5.55025 5.55025C4.2375 6.86301 3.5 8.64348 3.5 10.5C3.5 12.3565 4.2375 14.137 5.55025 15.4497C6.86301 16.7625 8.64348 17.5 10.5 17.5C12.3565 17.5 14.137 16.7625 15.4497 15.4497C16.7625 14.137 17.5 12.3565 17.5 10.5C17.5 8.64348 16.7625 6.86301 15.4497 5.55025C14.137 4.2375 12.3565 3.5 10.5 3.5ZM10.5 5.25C10.7143 5.25003 10.9212 5.32871 11.0813 5.47113C11.2415 5.61354 11.3438 5.80978 11.3689 6.02262L11.375 6.125V10.1378L13.7436 12.5064C13.9006 12.6638 13.9917 12.8751 13.9984 13.0973C14.0052 13.3195 13.9272 13.536 13.7802 13.7027C13.6331 13.8695 13.4281 13.974 13.2068 13.9951C12.9855 14.0162 12.7645 13.9522 12.5886 13.8162L12.5064 13.7436L9.88138 11.1186C9.74538 10.9825 9.65804 10.8054 9.63287 10.6146L9.625 10.5V6.125C9.625 5.89294 9.71719 5.67038 9.88128 5.50628C10.0454 5.34219 10.2679 5.25 10.5 5.25Z" fill="#2D9CDB" />
                        </svg>
                        <span>{hours || "—"}</span>
                        <span className="mx-2">                            <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                        </svg></span>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="9.33337" width="4" height="4.66667" fill="#2D9CDB" />
                            <rect x="6" y="4.66663" width="4" height="9.33333" fill="#2D9CDB" />
                            <rect x="12" width="4" height="14" fill="#2D9CDB" />
                        </svg>
                        <span>{level} </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-20">
                    {/* Video area */}
                    <div className="lg:col-span-2">
                        <div className="bg-black rounded overflow-hidden">
                            <video
                                controls
                                className="w-full h-64 lg:h-96 bg-black"
                                poster={poster}
                            >
                                {/* Video source will be added later when logic is implemented */}
                            </video>
                        </div>

                        <div className="mt-3">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Course video
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                                Video source and lesson details will be added later.
                            </p>
                        </div>
                    </div>

                    {/* Lessons list (static - no interaction logic) */}
                    <aside>
                        <div className="border rounded bg-white">
                            <div className="px-4 py-3 border-b">
                                <h3 className="font-medium text-gray-700">Course Content</h3>
                            </div>
                            <ul className="divide-y max-h-96 overflow-auto">
                                {curriculum.length === 0 && (
                                    <li className="p-4 text-sm text-gray-500">No content available.</li>
                                )}

                                {curriculum.map((lesson, i) => (
                                    <li
                                        key={lesson ?? i}
                                        className="p-3 flex justify-between items-center"
                                    >
                                        <div>
                                            <div className="text-sm font-medium text-gray-800">{lesson}</div>
                                        </div>
                                        <div className="text-xs text-gray-400">{lesson ? "Done" : ""}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
            </div>
            );
};