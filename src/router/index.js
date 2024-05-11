import React from 'react'
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../view/login';
import RegisterPage from '../view/register';
import Main from '../view/main';

const AnimatedRoutes = () => {
    const location = useLocation()
    const token = localStorage.getItem("token")

    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path='/login' element={token === null ? <LoginPage /> : <Main />} />
                <Route path='/register' element={token === null ? <RegisterPage /> : <Main />} />
                <Route path='/main' element={token === null ? <LoginPage /> : <Main />} />
                <Route path='/' element={token === null ? <LoginPage /> : <Main />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes