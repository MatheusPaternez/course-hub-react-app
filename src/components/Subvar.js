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

    //Depending on the pageId, populate the categories array
    switch (pageId) {
        case 'course':
            categories.push({ id: 'html', name: 'HTML/CSS', icon: iconHtml });
            categories.push({ id: 'javascript', name: 'JavaScript', icon: iconJs });
            categories.push({ id: 'java', name: 'Java', icon: iconJava });
            categories.push({ id: 'python', name: 'Python', icon: iconPy });
            categories.push({ id: 'hypen', name: 'hypen', icon: iconPy });
            categories.push({ id: 'cybersecurity', name: 'CyberSecurity', icon: iconCyber });
            categories.push({ id: 'hypen', name: 'hypen', icon: iconPy });
            categories.push({ id: 'uxui', name: 'UX/UI', icon: iconUxui });

            break;
        case 'dashboard':
            categories.push({ id: 'dashboard', name: 'Dashboard', icon: iconJava });
            break;
        case 'team-up':
            categories.push({ id: 'achevements', name: 'Achevements', icon: iconJava });
            break;
        default:
            break;
    }
    return (
        <>
            <aside className="w-64 bg-[#001c27] text-gray-200 min-h-screen p-4">

                {/* sub navigation */}
                <nav className="hidden md:flex gap-6 text-md text-gray-200 flex flex-col px-6" aria-label="Sub Navigation">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return category.id === "hypen" ? (

                            <hr key={`hypen-${index}`} className="border-t border-gray-600 my-2" />
                        ) : (
                            <Link
                                key={category.id}
                                to={`/course/${category.id}`}
                                className="flex items-center hover:text-blue-500 transition"
                            >
                                {IconComponent && <IconComponent className="h-5 w-5 mr-2" />}
                                <span>{category.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </aside >
            <Outlet />
        </>
    );
}


