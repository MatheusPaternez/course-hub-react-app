import React from "react";
import { useState } from "react";
import useFetch from "../hooks/UseFetch";

export default function CourseList({home = false}) {
    const { data:courses, loading, error } = useFetch('/api/courses'); ;
if (loading ) return <p className="max-w-10xl mx-auto px-6"> Loading ... </p> ;
if (error ) return <p>Error: {error.message}</p> ;
    return (
        <section className="bg-gray-50 py-12" >
            <div className="max-w-10xl mx-auto px-6">
                {/* Heading */}
                {home && (
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl text-gray-800">Recommended Courses</h2>
                        <p className="text-sm text-gray-500 mt-2">Boost your skills with courses built for real-world developers.</p>
                    </div>
                )}
                {/* Courses grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <article
                            key={course.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                            aria-labelledby={`course-title-${course.id}`}
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

                                    <span>•</span>

                                    <span>{course.hours}</span>

                                    <span className="mx-1">•</span>

                                    <span>{course.level}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section >
    )
}