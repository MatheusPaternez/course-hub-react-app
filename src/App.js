import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import CourseDetail from './pages/CourseDetail';
import Login from './components/Login';
import DashboardTeacher from './pages/DashboardTeacher';
import CoursePageSection from './components/CoursePageSection';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='login' element={<LoginPopup />} />
                    <Route path='/' element={<Header />}>
                        <Route path='home' element={<HomePage />} />
                        <Route path='auth' element={<Login />} />
                        <Route path="/:pageId/:categoryId?" element={<DashboardTeacher />} />
                        <Route path="/courses/" element={<CourseSearch />} />
                        <Route path="/courses/:categoryId/:courseId" element={<CourseDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}