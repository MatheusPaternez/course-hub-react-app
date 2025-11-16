import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import CourseDetail from './pages/CourseDetail';
import Login from './components/Login';
import DashboardTeacher from './pages/DashboardTeacher';
import DashboardStudent from './pages/DashboardStudent';

export default function App() {
    return (
        <>
<<<<<<< HEAD
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route index element={<HomePage/>}/>
                    <Route element={<Header/>}/>
                    <Route  element={<LoginPopup />} />
                    <Route path="/:pageId/:categoryId?" element={<DashboardTeacher />} /> 
                    <Route path="/dashboard" element={<DashboardStudent />} /> 
                    <Route path="/:pageId/:categoryId?"  element={<CourseSearch />} /> 
                    {/* example <Route path="/:pageId"  element={<othercontent />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer />
=======
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
>>>>>>> 71b3a9bf86b0fde194bc06bd8733a53c89036f79
        </>
    )
}