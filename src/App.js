import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import CourseDetail from './pages/CourseDetail';
import DashboardTeacher from './pages/DashboardTeacher';
import DashboardAdmin from './pages/DashboardAdmin';
import CoursePageSection from './components/CoursePageSection';
import DashboardStudent from './pages/DashboardStudent';
import ContentManagement from './pages/ContentManagement';
import CourseLayout from './components/CourseLayout';
import { CourseHandlersProvider } from './components/CourseHandlersContext';
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';
import NotFound from './pages/NotFound';

// Private route component using Auth context
const Private = ({ Compo }) => {
    const { signed } = useAuth(); // get signed state from context
    // If signed is true, render the component, otherwise show login popup
    return signed ? <Compo /> : <LoginPopup />;
}

export default function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <CourseHandlersProvider>
                        <Routes>
                            <Route path='login' element={<LoginPopup />} />
                            <Route path='home' element={<HomePage />} />
                            <Route index element={<HomePage />} />
                            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                            <Route path="/dashboard-teacher" element={<DashboardTeacher />} />
                            <Route path="dashboard" element={<DashboardStudent />} />
                            <Route path="/courses/:categoryId?" element={<CourseLayout />}>
                                <Route index element={<CourseSearch />} />
                                <Route path=":categoryId/:courseId" element={<CourseDetail />} />
                                <Route path='section/:courseId' element={<CoursePageSection />} />
                            </Route>
                            <Route path="/content/:mode/:courseId?" element={<ContentManagement />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </CourseHandlersProvider>
                </BrowserRouter>
                <Footer />
            </AuthProvider>
        </>
    )
}