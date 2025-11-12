import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseSearch from './pages/CourseSearch';

export default function App() {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route element={<HomePage/>}/>
                    <Route element={<Header/>}/>
                    <Route index element={<LoginPopup />} />
                    <Route index path="course" element={<CourseSearch />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
        <Footer />
        </>
    )
}