import { useState, useEffect } from "react";
import IconJSCourse from "../assets/img/js-course-icon.png";
import IconPyCourse from "../assets/img/py-course-icon.png";
import IconUxUiCourse from "../assets/img/uxui-course-icon.jpg";
// import axios from "axios";
export default function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!url){ 
      setLoading(false);
      return};
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
                      title: 'Java Script for Front Developer',
                      rating: 4.9,
                      hours: '64 hours',
                      level: 'Beginner',
                      image: IconJSCourse
                  },
                  {
                      id: 'c2',
                      author: 'Kenta Onzoshi',
                      title: 'Python for Engineer',
                      rating: 4.9,
                      hours: '64 hours',
                      level: 'Beginner',
                      image: IconPyCourse
                  },
                  {
                      id: 'c3',
                      author: 'Aiya Tosaphone',
                      title: 'Figma for UXUI Designer',
                      rating: 4.9,
                      hours: '64 hours',
                      level: 'Beginner',
                      image: IconUxUiCourse
                  },]);
        setLoading(false);
        break;
        case '/api/mywork':
            setData([{courseId:1, author:"Aiya Tosaphone", workTitle:'CreateBankApplication', like:'1036', team:'API x FAMILY', category:'Cyber Security Course', imgPath:'thinking....',status:'Ungraded',grade:9.5 },{courseId:2, author:"Kenta Onzo",workTitle:'CreateE-commerceApplication', like:'935', team:'ABCDEFG', category:'HTML/CSS Course', imgPath:'thinking....',status:'Ungraded',grade:9.5 },{courseId:3, author:"Baby Matheus", workTitle:'CreateCourseApplication', like:'820', team:'ShintaroBossBaby', category:'JavaScriptCourse', imgPath:'thinking....',status:'Ungraded',grade:9.5 },{courseId:4, author:"Palmeiras",workTitle:'CreateCourseApplication', like:'750', team:'Catlovers', category:'UX/UI DesignCourse', imgPath:'thinking....',status:'Ungraded',grade:9.5 }]);
            setLoading(false);
            break;
        default:
        setError(new Error('Unknown URL'));;
        setLoading(false);
        break;
    }}, 1000);
  }, [url]);

  return { data, loading, error };
}