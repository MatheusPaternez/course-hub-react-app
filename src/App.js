import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';
import DashboardTeacher from './pages/DashboardTeacher';

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route element={<HomePage/>}/>
                    <Route element={<Header/>}/>
                    <Route index element={<LoginPopup />} />
                    <Route path="dashboard-teacher" element={<DashboardTeacher />} /> 
                    <Route path="/:pageId/:categoryId?"  element={<CourseSearch />} /> 
                    {/* example <Route path="/:pageId"  element={<othercontent />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer />
        </>
    )
}