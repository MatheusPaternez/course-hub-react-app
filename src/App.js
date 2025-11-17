import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import CourseDetail from './pages/CourseDetail';
import Login from './components/Login';
import DashboardTeacher from './pages/DashboardTeacher';
<<<<<<< HEAD
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';

// Private route component using Auth context
const Private = ({ Compo }) => {
    const { signed } = useAuth(); // get signed state from context
    // If signed is true, render the component, otherwise show login popup
    return signed ? <Compo /> : <LoginPopup />;
}
=======
import CoursePageSection from './components/CoursePageSection';
import DashboardStudent from './pages/DashboardStudent';
import ContentManagement from './pages/ContentManagement';
>>>>>>> 4001ef06a5e1f7f1acf7e6b2b1ce47327e4d3177

export default function App() {
    return (
        <>
<<<<<<< HEAD
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index path='login' element={<LoginPopup />} />
                        <Route path='/' element={<Header />}>
                            <Route path='home' element={<Private Compo={HomePage} />} />
                            <Route path='auth' element={<LoginPopup />} />
                            <Route path="/:pageId/:categoryId?" element={<DashboardTeacher />} />
                            <Route path="/:pageId/:categoryId?" element={<CourseSearch />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Footer />
            </AuthProvider>
=======
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<LoginPopup />} />
                    <Route path='/' element={<Header />}>
                        <Route path='home' element={<HomePage />} />
                        <Route index element={<HomePage />} />
                        <Route path='auth' element={<Login />} />
                        <Route path="/:pageId/:categoryId?" element={<DashboardTeacher />} />
                        <Route path="dashboard" element={<DashboardStudent />} />
                        <Route path="/courses/" element={<CourseSearch />} />
                        <Route path="/courses/:categoryId/:courseId" element={<CourseDetail />} />
                        <Route path='/courses/section/:courseId' element={<CoursePageSection />} />
                        <Route path="/content" element={<ContentManagement />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
>>>>>>> 4001ef06a5e1f7f1acf7e6b2b1ce47327e4d3177
        </>
    )
}