import ReactDOM from "react-dom/client";
import {HashRouter, Routes, Route} from "react-router";
import "../src/assets/app.css";
import IntroductionComponent from "./components/introduction/introduction.tsx";
import {ScrollToTop} from "./components/basis/ScrollToTop.tsx";
import ProjectsComponent from "./components/projects/projects.tsx";
import TeamComponent from "./components/team/team.tsx";
import StudiesComponent from "./components/studies/stuides.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Sorry, Root element not found");

ReactDOM.createRoot(root).render(
    <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route index element={<IntroductionComponent />} />
            <Route path="projects" element={<ProjectsComponent />} />
            <Route path="team" element={<TeamComponent />} />
            <Route path="studies" element={<StudiesComponent />} />
        </Routes>
    </HashRouter>,
);