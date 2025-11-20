import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function CourseListSearch({ items }) {

    //navigate
    const navigate = useNavigate();

    const handleCardClick = (target) => {
        // use navigate to pass the parameter
        navigate(`/courses/${target.category}/${target.id}`, {
            state: {
               ...target
            }
        });
    };
    return (
        <section className="py-12" >
            <div className="max-w-10xl mx-auto px-20">
                {/* Heading */}
                {/* Courses grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {items?.length > 0 ? (items?.map((course) => (
                        <article
                            key={course.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] animate-fade-in"
                            aria-labelledby={`course-title-${course.id}`} onClick={() => handleCardClick(course)}
                        >
                                {/* Card image */}
                                <div className="h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                </div>

                                {/* Card body */}
                                <div className="p-4">
                                    <p className="text-xs text-gray-400 mb-2">{course.author}</p>

                                    <h3 id={`course-title-${course.id}`} className="text-sm md:text-base font-semibold text-gray-800 mb-3">
                                        {course.title}
                                    </h3>

                                    {/* Rating, hours, level */}
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            {/* Star icon (simple) */}
                                            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.445 2.676c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.57 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                                            </svg>
                                            <span>{course.rating}</span>
                                        </div>

                                        <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                                        </svg>

                                        <span>{course.hours}</span>

                                        <svg className="mx-2" width="1" height="15" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="#929292" />
                                        </svg>

                                        <span>{course.level}</span>
                                    </div>
                                </div>
                        </article>
                    ))) : (<p>No courses found.</p>)}
                </div>
            </div>
        </section >
    )
}