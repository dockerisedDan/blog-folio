import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"
import PageLayout from "./components/PageLayout"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router basename="/blog-folio">
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="posts" element={<PostsPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    </StrictMode>,
);
