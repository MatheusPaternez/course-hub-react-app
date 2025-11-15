import { useState, useEffect } from "react";
import IconJSCourse from "../assets/img/js-course-icon.png";
import IconPyCourse from "../assets/img/py-course-icon.png";
import IconUxUiCourse from "../assets/img/uxui-course-icon.jpg";
import IconHtmlCourse from "../assets/img/Course6.png";
// import axios from "axios";
export default function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url) {
      setLoading(false);
      return
    };
    // axios.get(url)
    //   .then(response => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     setLoading(false);
    //   });
    setTimeout(() => {
      switch (url) {
        case '/api/courses':
          setData([
            {
              id: 'c1',
              author: 'Milad Torabi',
              category: 'Js',
              title: 'Java Script for Front Developer',
              rating: 4.9,
              hours: '64 hours',
              level: 'Beginner',
              image: IconJSCourse
            },
            {
              id: 'c2',
              author: 'Kenta Onzoshi',
              category: 'Python',
              title: 'Python for Engineer',
              rating: 4.9,
              hours: '64 hours',
              level: 'Beginner',
              image: IconPyCourse
            },
            {
              id: 'c3',
              author: 'Aiya Tosaphone',
              category: 'Design',
              title: 'Figma for UXUI Designer',
              rating: 4.9,
              hours: '64 hours',
              level: 'Beginner',
              image: IconUxUiCourse
            },
            {
              id: 'c4',
              author: 'Dougal Do',
              category: 'Html',
              title: 'Basic HTML Theory for Beginners',
              rating: 4.9,
              hours: '64 hours',
              level: 'Beginner',
              image: IconHtmlCourse
            }]);
          setLoading(false);
          break;
        case '/api/mywork':
          setData([{ courseId: 1, author: "Aiya Tosaphone", workTitle: 'CreateBankApplication', like: '1036', team: 'API x FAMILY', category: 'Cyber Security Course', imgPath: 'thinking....', status: 'Ungraded', grade: 9.5 }, { courseId: 2, author: "Kenta Onzo", workTitle: 'CreateE-commerceApplication', like: '935', team: 'ABCDEFG', category: 'HTML/CSS Course', imgPath: 'thinking....', status: 'Ungraded', grade: 9.5 }, { courseId: 3, author: "Baby Matheus", workTitle: 'CreateCourseApplication', like: '820', team: 'ShintaroBossBaby', category: 'JavaScriptCourse', imgPath: 'thinking....', status: 'Ungraded', grade: 9.5 }, { courseId: 4, author: "Palmeiras", workTitle: 'CreateCourseApplication', like: '750', team: 'Catlovers', category: 'UX/UI DesignCourse', imgPath: 'thinking....', status: 'Ungraded', grade: 9.5 }]);
          setLoading(false);
          break;
        case '/api/course-detail':
          setData([{ id: 'c1', courseOverview: 'This intensive course covers modern JavaScript essentials, including ES6+ features, asynchronous programming, and core concepts for building dynamic and high-performance front-end applications.', whatYouWillLearn: ['Master ES6+ features like arrow functions, destructuring, and modules.', 'Understand asynchronous programming with Promises and async/await.', 'Learn DOM manipulation and event handling.', 'Get introduced to front-end frameworks like React or Vue.js.', 'Build real-world projects to apply your knowledge.'], curriculum: ['Lesson 1: Deep Dive into ES6+ Features', 'Lesson 2: Asynchronous JavaScript: Promises and Async/Await', 'Lesson 3: Modern Array & Object Manipulation', 'Lesson 4:The Event Loop and Runtime Environment', 'Lesson 5:Module System (ESM) and Bundlers'] }, {
            id: 'c2', courseOverview: 'This course provides essential Python skills for engineers, focusing on data manipulation, automation, script optimization, and leveraging popular libraries for complex system tasks and analysis.', whatYouWillLearn: [
              'Master fundamental Python syntax, data structures, and best practices.',
              'Implement efficient data analysis and manipulation using Pandas and NumPy.',
              'Automate system tasks, file operations, and shell scripting with Python.',
              'Apply Object-Oriented Programming (OOP) principles for robust application development.',
              'Handle data serialization (JSON, XML) and interact with Web APIs (REST/SOAP).',
              'Improve code quality with proper error handling, logging, and debugging techniques.'
            ], curriculum: ['Lesson 1: Effective Data Handling with Pandas and NumPy', 'Lesson 2: System Automation and Shell Scripting', 'Lesson 3: Object-Oriented Programming (OOP) in Python', 'Lesson 4:Error Handling, Logging, and Debugging', 'Lesson 5:Introduction to Web APIs and Data Serialization']
          }, {
            id: 'c3', courseOverview: 'This course is the definitive guide to mastering Figma for professional UX/UI design. You\'ll learn to create responsive interfaces, implement design systems, and collaborate effectively using prototyping and component features.', whatYouWillLearn: [
              'Master Auto Layout for building responsive and scalable interfaces.',
              'Design, implement, and manage a reusable component library (Design System).',
              'Create advanced, user-friendly prototypes with interactive elements.',
              'Learn collaborative workflows for team handoff and version control.',
              'Optimize design efficiency using essential plugins and widgets.'
            ], curriculum: ['Lesson 1: Auto Layout: Creating Flexible and Responsive Designs', 'Lesson 2: Building and Scaling a Component Library', 'Lesson 3: Advanced Prototyping and Interaction Design', 'Lesson 4:Team Collaboration, Version Control, and Handoff', 'Lesson 5:Plugins, Widgets, and Workflow Automation']
          },{
            id: 'c4', courseOverview: 'This course provides a beginner-friendly introduction to HTML, the foundation of all web pages.You’ll learn how to structure content, use essential tags, and build your first simple website.Perfect for students who are new to coding or looking to start a web development journey.', whatYouWillLearn: [
              'Understand how web pages are structured with HTML',
              'Use key tags like headings, paragraphs, links, and images',
              'Build your own simple multi-section webpage.',
              'Gain confidence to move on to CSS and JavaScript.'
            ], curriculum: ['Lesson 1: Understand the structure of a web page', 'Lesson 2: Learn essential HTML Tags and elements', 'Lesson 3: Add images, links and list to your page', 'Lesson 4: Build a simple multi-section website', 'Lesson 5: Apply basic styling using inline and internal CSS']
          }]);
          setLoading(false);
          break;
        default:
          setError(new Error('Unknown URL'));;
          setLoading(false);
          break;
      }
    }, 1000);
  }, [url]);

  return { data, loading, error };
}