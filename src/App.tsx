import React from "react";
import { Routes, Route, MemoryRouter as Router } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import DSMenuActive from "./screens/DSMenuActive";
import "./styles/style.sass";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route index element={<LandingPage />} />
                    <Route path="/ds-menu-active" element={<DSMenuActive />} />
                </Route>
                <Route path="*" element={<DSMenuActive />} />

            </Routes>
        </Router>
    );
}