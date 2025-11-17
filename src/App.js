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
import DashboardStudent from './pages/DashboardStudent';
import ContentManagement from './pages/ContentManagement';
import CourseLayout from './components/CourseLayout';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<LoginPopup />} />
                    {/* <Route path='/' element={<Header />}> */}
                        <Route path='home' element={<HomePage />} />
                        <Route index element={<HomePage />} />
                        <Route path='auth' element={<Login />} />
                        <Route path="/:pageId/:categoryId?" element={<CourseLayout />}>
                       
                          <Route index element={<CourseSearch />} />
                          <Route path=":categoryId/:courseId" element={<CourseDetail />} />
                          <Route path='section/:courseId' element={<CoursePageSection />} />
                        </Route>
                        <Route path="/dashboard-teacher" element={<DashboardTeacher />} />
                        <Route path="/dashboard" element={<DashboardStudent />} />
                        <Route path="/content" element={<ContentManagement />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}