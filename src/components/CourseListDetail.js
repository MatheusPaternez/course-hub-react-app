import React, { useState } from 'react';
import UserIcon from "../assets/img/user-icon.png";
export default
  function CourseListDetail({ courseData }) {
  // edit state
  const [isEditing, setIsEditing] = useState(false);

  // status management state
  const [status, setStatus] = useState(courseData.status);

  console.log('items' + JSON.stringify(courseData));

  // button click handler
  const handleEditClick = () => {
    // change isEdting 
    setIsEditing(true);
  };


  // save handler
  const handleSave = () => {


  }

  return (
    <div className="border border-gray-200 shadow-sm bg-white mb-4 transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">

        <div className="w-full h-32 md:w-48 flex-shrink-0">
          <img
            src={courseData.image}
            alt="Milad Torabi"
            className="w-full h-32 md:h-full object-cover"
          />
        </div>

        <div className="flex-grow p-4">
          <p className="text-sm text-gray-600 mb-1">{courseData.author}</p>

          <h2 className="text-2xl font-bold mb-3">{courseData.title}</h2>

          <div className="flex items-center text-sm font-medium text-gray-400 space-x-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill='#2D9CDB' />
              </svg>
              <span>500 students</span>
            </div>

            <span className="text-gray-400">|</span> <div className="flex items-center gap-2">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0188 20.3508L11.0092 20.3525L10.947 20.3831L10.9295 20.3866L10.9173 20.3831L10.8552 20.3525C10.8458 20.3496 10.8388 20.351 10.8342 20.3569L10.8307 20.3656L10.8158 20.7401L10.8202 20.7576L10.8289 20.769L10.9199 20.8338L10.933 20.8373L10.9435 20.8338L11.0345 20.769L11.045 20.755L11.0485 20.7401L11.0337 20.3665C11.0313 20.3572 11.0264 20.3519 11.0188 20.3508ZM11.2507 20.2519L11.2393 20.2536L11.0774 20.335L11.0687 20.3438L11.066 20.3534L11.0818 20.7296L11.0862 20.7401L11.0932 20.7463L11.269 20.8276C11.2801 20.8305 11.2886 20.8282 11.2944 20.8206L11.2979 20.8084L11.2682 20.2711C11.2652 20.2606 11.2594 20.2542 11.2507 20.2519ZM10.625 20.2536C10.6212 20.2513 10.6166 20.2505 10.6122 20.2515C10.6078 20.2525 10.6039 20.2551 10.6014 20.2589L10.5962 20.2711L10.5664 20.8084C10.567 20.8189 10.5719 20.8259 10.5813 20.8294L10.5944 20.8276L10.7703 20.7463L10.779 20.7393L10.7825 20.7296L10.7974 20.3534L10.7948 20.3429L10.786 20.3341L10.625 20.2536Z" fill="#2D9CDB" />
                <path d="M10.5 1.75C15.3326 1.75 19.25 5.66738 19.25 10.5C19.25 15.3326 15.3326 19.25 10.5 19.25C5.66738 19.25 1.75 15.3326 1.75 10.5C1.75 5.66738 5.66738 1.75 10.5 1.75ZM10.5 3.5C8.64348 3.5 6.86301 4.2375 5.55025 5.55025C4.2375 6.86301 3.5 8.64348 3.5 10.5C3.5 12.3565 4.2375 14.137 5.55025 15.4497C6.86301 16.7625 8.64348 17.5 10.5 17.5C12.3565 17.5 14.137 16.7625 15.4497 15.4497C16.7625 14.137 17.5 12.3565 17.5 10.5C17.5 8.64348 16.7625 6.86301 15.4497 5.55025C14.137 4.2375 12.3565 3.5 10.5 3.5ZM10.5 5.25C10.7143 5.25003 10.9212 5.32871 11.0813 5.47113C11.2415 5.61354 11.3438 5.80978 11.3689 6.02262L11.375 6.125V10.1378L13.7436 12.5064C13.9006 12.6638 13.9917 12.8751 13.9984 13.0973C14.0052 13.3195 13.9272 13.536 13.7802 13.7027C13.6331 13.8695 13.4281 13.974 13.2068 13.9951C12.9855 14.0162 12.7645 13.9522 12.5886 13.8162L12.5064 13.7436L9.88138 11.1186C9.74538 10.9825 9.65804 10.8054 9.63287 10.6146L9.625 10.5V6.125C9.625 5.89294 9.71719 5.67038 9.88128 5.50628C10.0454 5.34219 10.2679 5.25 10.5 5.25Z" fill="#2D9CDB" />
              </svg>
              <span>{courseData.hours}</span>
            </div>

            <span className="text-gray-400">|</span> <div className="flex items-center gap-2">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="9.33337" width="4" height="4.66667" fill="#2D9CDB" />
                <rect x="6" y="4.66663" width="4" height="9.33333" fill="#2D9CDB" />
                <rect x="12" width="4" height="14" fill="#2D9CDB" />
              </svg>
              <span>{courseData.level}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}