import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import Login from './components/Login';
import DashboardTeacher from './pages/DashboardTeacher';

const Private = ({ Compo }) =>{
    const signed = false;

    return signed > 0 ? <Compo /> : <LoginPopup/>;
}

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path='login' element={<LoginPopup />} />
                    <Route path='/' element={<Header />}>
                        <Route path='home' element={<Private Compo={HomePage} />} />
                        <Route path='auth' element={<Login />} />
                        <Route path="/:pageId/:categoryId?" element={<DashboardTeacher />} />
                        <Route path="/:pageId/:categoryId?" element={<CourseSearch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}