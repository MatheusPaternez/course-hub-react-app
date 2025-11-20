import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import iconHtml from './icons/Html';
import iconJava from './icons/Java';
import iconJs from './icons/Js';
import iconPy from './icons/Python';
import iconCyber from './icons/Cyber';
import iconUxui from './icons/Uxui';
export default function Subvar() {
    //get the pageId from the URL parameters
    const { pageId } = useParams();
    const categories = [];
    console.log("Subvar pageId:", pageId);

    //Depending on the pageId, populate the categories array
    switch (pageId) {
        case 'courses':
            categories.push({ id: 'html', name: 'HTML/CSS', icon: iconHtml });
            categories.push({ id: 'js', name: 'JavaScript', icon: iconJs });
            categories.push({ id: 'java', name: 'Java', icon: iconJava });
            categories.push({ id: 'python', name: 'Python', icon: iconPy });
            categories.push({ id: 'hypen', name: 'hypen', icon: null });
            categories.push({ id: 'cybersecurity', name: 'CyberSecurity', icon: iconCyber });
            categories.push({ id: 'hypen', name: 'hypen', icon: null });
            categories.push({ id: 'uxui', name: 'UX/UI', icon: iconUxui });

            break;
        case 'dashboard':
            categories.push({ id: 'dashboard', name: 'Dashboard', icon: iconJava });
            break;
        case 'team-up':
            categories.push({ id: 'achevements', name: 'Achevements', icon: iconJava });
            break;
        case 'dashboard-teacher':
            categories.push({ id: 'manage-courses', name: 'Manage Courses', icon: null });
            categories.push({ id: 'manage-students', name: 'Manage Students', icon: null });
            categories.push({ id: 'gradebook', name: 'Gradebook', icon: null });
            break;
        default:
            break;
    }
    return (
        <>
            <aside className="w-full h-screen text-white flex flex-col gap-6 py-10 mt-20">

                {/* sub navigation */}
                <nav className="hidden md:flex gap-6 text-md text-gray-200 flex flex-col pl-6 space-y-4" aria-label="Sub Navigation">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return category.id === "hypen" ? (

                            <hr key={`hypen-${index}`} className="border-t border-gray-600 my-2" />
                        ) : (
                            <Link
                                key={category.id}
                                to={`/courses/${category.id}`}
                                className="flex items-center hover:text-blue-500 transition pr-6"
                            >
                                {IconComponent && <IconComponent className="h-6 w-6 mr-4" />}
                                <span className='font-medium'>{category.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside >

        </>
    );
}


