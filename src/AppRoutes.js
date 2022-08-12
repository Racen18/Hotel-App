import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import App from "./App";
import NewPage from "./NewPage";

function AppRoutes() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="newpage" element={<NewPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes