import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageHeader from './pages/HomePageHeader';
import LoginPopup from './pages/LoginPopup';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route index element={<HomePageHeader/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}