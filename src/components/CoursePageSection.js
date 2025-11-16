import React from "react";

export default function CoursePageSection({ course }) {
    // Destructuring the course prop received
    const { title, author = {}, students = 0, duration = "", poster = "", content = [] } =
        course || {};

    return (
        <section className="max-w-6xl mx-auto p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{title || "Untitled Course"}</h1>
                <div className="text-sm text-gray-600 mt-2">
                    <span>{author.name || "Unknown Author"}</span>
                    <span className="mx-2">•</span>
                    <span>{students} students</span>
                    <span className="mx-2">•</span>
                    <span>{duration || "—"}</span>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                            {content.length === 0 && (
                                <li className="p-4 text-sm text-gray-500">No content available.</li>
                            )}

                            {content.map((lesson, i) => (
                                <li
                                    key={lesson.id ?? i}
                                    className="p-3 flex justify-between items-center"
                                >
                                    <div>
                                        <div className="text-sm font-medium text-gray-800">{lesson.title}</div>
                                        <div className="text-xs text-gray-500">{lesson.duration || ""}</div>
                                    </div>
                                    <div className="text-xs text-gray-400">{lesson.completed ? "Done" : ""}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}

// default props for development / fallback data
CoursePageSection.defaultProps = {
    course: {
        title: "Basic Html Theory for Beginners",
        author: { name: "Dougal MacGregor" },
        students: 500,
        duration: "64 hours",
        poster: "",
        content: [
            { id: 1, title: "01: Introduction to HTML", duration: "10:03", videoUrl: "", completed: true },
            { id: 2, title: "02: Setting Up Your First Webpage", duration: "15:21", videoUrl: "", completed: false },
            { id: 3, title: "03: Understanding Tags and Elements", duration: "14:21", videoUrl: "", completed: false },
        ],
    },
};