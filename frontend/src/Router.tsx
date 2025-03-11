import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Typing } from "./pages/Typing";

export function Router() {
    return(
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Typing />} />
        </Routes>
    )
}