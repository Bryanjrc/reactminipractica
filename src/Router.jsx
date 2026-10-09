import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DoctoresEspecialidad from "./components/DoctoresEspecialidad";

export default class Router extends Component{
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>

                    <Route path="/DocotoresEspecialidades" element={<doctoresespecialidades/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}