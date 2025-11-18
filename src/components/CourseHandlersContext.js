import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from "../hooks/UseFetch";

// define context
export const CourseHandlersContext = createContext({});

export const CourseHandlersProvider = ({ children }) => {
  // course data
  const [courses, setCourses] = useState([]);
  const [coursesDetails, setCourseDetails] = useState([]);
  const [myWorks, setMyworks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchApiData } = useFetch(); // 

  //sample detail data
  const sampleDetail = { id: '', courseOverview: 'This intensive course covers modern JavaScript essentials, including ES6+ features, asynchronous programming, and core concepts for building dynamic and high-performance front-end applications.', whatYouWillLearn: ['Master ES6+ features like arrow functions, destructuring, and modules.', 'Understand asynchronous programming with Promises and async/await.', 'Learn DOM manipulation and event handling.', 'Get introduced to front-end frameworks like React or Vue.js.', 'Build real-world projects to apply your knowledge.'], curriculum: ['Lesson 1: Deep Dive into ES6+ Features', 'Lesson 2: Asynchronous JavaScript: Promises and Async/Await', 'Lesson 3: Modern Array & Object Manipulation', 'Lesson 4:The Event Loop and Runtime Environment', 'Lesson 5:Module System (ESM) and Bundlers'] }
  // storage key
  const COURSE_KEY = 'courses';
  const COURSE_D_KEY = 'coursesDatail';
  const WORK_KEY = 'mywork';

  // load data
  useEffect(() => {
    const loadCourses = async () => {
      setIsLoading(true);
      const savedCourses = localStorage.getItem(COURSE_KEY);
      //for Course
      if (savedCourses) {
        setCourses(JSON.parse(savedCourses));
      } else {
        try {
          const course = await fetchApiData('/api/courses');
          setCourses(course);
          // only once save the data
          localStorage.setItem(COURSE_KEY, JSON.stringify(course));
        } catch (error) {
          console.error("faild to get course data from API:", error);
          setCourses([]); // empty array set
        }
      }
      setIsLoading(false);
    }

    const loadCoursesDetail = async () => {
      setIsLoading(true);
      const savedCoursesDetails = localStorage.getItem(COURSE_D_KEY);
      //for Course Details
      if (savedCoursesDetails) {
        setCourseDetails(JSON.parse(savedCoursesDetails));
      } else {
        try {
          const detail = await fetchApiData('/api/course-detail');
          setCourseDetails(detail);
          // only once save the data
          localStorage.setItem(COURSE_D_KEY, JSON.stringify(detail));
        } catch (error) {
          console.error("faild to get detail data from API:", error);
          setCourseDetails([]); // empty array set
        }
      }
      setIsLoading(false);
    }

    const loadMywork = async () => {
      setIsLoading(true);
      const savedCoursesDetails = localStorage.getItem(COURSE_D_KEY);
      //for My work
      if (savedCoursesDetails) {
        setCourseDetails(JSON.parse(savedCoursesDetails));
      } else {
        try {
          const work = await fetchApiData('/api/mywork');
          setMyworks(work);
          // only once save the data
          localStorage.setItem(WORK_KEY, JSON.stringify(work));
        } catch (error) {
          console.error("faild to get work data from API:", error);
          setMyworks([]); // empty array set
        }
      }
      setIsLoading(false);
    }

    loadCourses();
    loadCoursesDetail();
    loadMywork();
  }, [fetchApiData]);

  // update data in local storage
  const updateLocalStorage = useCallback((newCourses) => {
    localStorage.setItem(COURSE_KEY, JSON.stringify(newCourses));
    setCourses(newCourses); // update course state
  }, []);

  // --- CRUD handlers

  // Create course
  const handleAddCourse = useCallback((newCourseData) => {
    const newCourse = {
      ...newCourseData,
    };
    const updatedCourses = [...courses, newCourse];
    updateLocalStorage(updatedCourses);
    //cousedetail 
    const newDetail = {...sampleDetail, id:newCourse.id};
    const updateDetails = [...coursesDetails, newDetail];
    localStorage.setItem(COURSE_D_KEY, JSON.stringify(updateDetails));
    setCourseDetails(updateDetails);
  }, [courses, updateLocalStorage]);

  // Update course
  const handleEditCourse = useCallback((updatedCourseData) => {
    const updatedCourses = courses.map(course =>
      course.id === updatedCourseData.id ? updatedCourseData : course
    );
    updateLocalStorage(updatedCourses);
  }, [courses, updateLocalStorage]);

  // Delete course
  const handleDeleteCourse = useCallback((id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    updateLocalStorage(updatedCourses);
  }, [courses, updateLocalStorage]);

  // passing data and functions
  const contextValue = useMemo(() => ({
    courses,
    coursesDetails,
    myWorks,
    handleAddCourse,
    handleEditCourse,
    handleDeleteCourse,
    isLoading,
  }), [courses, coursesDetails, myWorks, handleAddCourse, handleEditCourse, handleDeleteCourse, isLoading]);

  return (
    <CourseHandlersContext.Provider value={contextValue}>
      {children}
    </CourseHandlersContext.Provider>
  );
};