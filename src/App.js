import './styles/App.css';
import React from "react";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/nav/Navbar";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import AppRouter from "./components/AppRouter";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
