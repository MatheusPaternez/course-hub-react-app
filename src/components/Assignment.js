import React, { useState } from 'react';
import UserIcon from "../assets/img/user-icon.png";
export default
function EditableGrade({ studentData ,onGradeUpdate}) {
  // edit state
  const [isEditing, setIsEditing] = useState(false);
  
  // grade state
  const [grade, setGrade] = useState(studentData.grade);
  // status management state
  const [status, setStatus] = useState(studentData.status);

  // button click handler
  const handleEditClick = () => {
    // change isEdting 
    setIsEditing(true);
  };
  
  // input handler
  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };
  
  // save handler
  const handleSave = () => {

    setIsEditing(false); // End editing mode
    setStatus('Graded'); // Update status to Graded
    onGradeUpdate(studentData.courseId, grade); // Notify parent of grade update
  };

  return (
<ul className="text-gray-800 flex flex-row flex-grow items-center justify-between p-4 px-12 hover:bg-gray-100 shadow-sm mb-2 bg-white">
            <li className="flex flex-row items-center w-1/5"><img className="w-12 h-12 object-cover mr-8" alt="User icon" src={UserIcon}></img>{studentData.author}</li>
            <li className="text-center items-center w-1/5"><div className="flex items-center justify-center bg-[#2D9CDB] h-8 text-white rounded-lg text-md">{studentData.category}</div></li>
            <li className={`w-1/5 text-center ${status === "Graded" ? "graded" : "unGrade"} `}>{status}</li>
      {isEditing ? (
        // --- isEditing === true ---
        <li className="flex w-2/5 items-center justify-center space-x-40">
          <input
            type="text"
            value={grade}
            onChange={handleGradeChange}
            className="border border-gray-300 p-1 w-24 rounded focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 text-sm rounded hover:bg-green-600"
          >
            Save
          </button>
        </li>
      ) : (
        // --- isEditing === false ---
        <li className="flex w-2/5 items-center justify-center space-x-28">
          {/* Currentry Grade */}
          <span className="font-bold text-lg min-w-8 text-gray-800">{grade}</span>

          {/* button */}
          <button
            onClick={handleEditClick}
            className="text-blue-600 underline text-sm hover:text-blue-800 focus:outline-none"
          >
            Grade
          </button>
        </li>
      )}
    </ul>
  );
}