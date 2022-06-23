import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginView from "./views/Login";
import TaskView from "./views/Tasks";

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginView />}/>
                <Route path="/task" element={<TaskView />}/>
            </Routes>
        </Router>
    )
}