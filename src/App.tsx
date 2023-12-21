import React from "react";
import { Routes, Route, MemoryRouter as Router } from "react-router-dom";
//import { LandingPage } from "./screens/LandingPage";
import DSMenuActive from "./screens/DSMenuActive";
import "./styles/style.sass";
import ReportBug from "./screens/ReportBug";
import DSMenuArchive from "./screens/DSMenuArchived";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    {/*<Route index element={<LandingPage />} />*/}
                    <Route index element={<DSMenuActive />} />
                    <Route path="/ds-menu-active" element={<DSMenuActive />} />
                    <Route path="/ds-menu-archive" element={<DSMenuArchive />} />
                    <Route path="/report-bug" element={<ReportBug />} />
                </Route>
                <Route path="*" element={<DSMenuActive />} />

            </Routes>
        </Router>
    );
}