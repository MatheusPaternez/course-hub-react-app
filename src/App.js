import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import CourseSearch from './pages/CourseSearch';
import NavBarLogic from './components/NavBarLogic';
import NavBar from './components/NavBar';

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route index element={<HomePage/>}/>
                    <Route element={<LoginPopup />} />
                    <Route path="course" element={<CourseSearch />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}