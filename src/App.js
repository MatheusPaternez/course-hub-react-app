import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import Login from './components/Login';
import DashboardTeacher from './pages/DashboardTeacher';
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';

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
        </>
    )
}