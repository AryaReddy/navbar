import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
    return ( <
        Router >
        <
        Navbar style = {
            { position: "absolute", marginTop: "10px" } }
        />

        <
        /Router>
    );
}

export default App;