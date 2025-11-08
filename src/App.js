import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import CourseSearch from './pages/CourseSearch';

export default function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/'>
        //             <Route index element={<LoginPopup />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        <CourseSearch></CourseSearch>
    )
}