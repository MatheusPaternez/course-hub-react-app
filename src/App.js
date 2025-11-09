import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPopup from './pages/LoginPopup';
import Header from './components/Header';



export default function App() {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route element={<LoginPopup />} />
                    <Route index element={<HomePage/>}/>
                    <Route element={<Header/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}