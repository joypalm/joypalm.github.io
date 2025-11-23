import ReactDOM from "react-dom/client";
import {HashRouter, Routes, Route} from "react-router";
import "../src/assets/app.css";
import IntroductionComponent from "./components/introduction/introduction.tsx";
import {ScrollToTop} from "./components/basis/ScrollToTop.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
    <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route index element={<IntroductionComponent />} />
        </Routes>
    </HashRouter>,
);