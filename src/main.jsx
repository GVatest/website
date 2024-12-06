import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Donkey from "./pages/Donkey.jsx";
import './index.scss'
import {useState} from "react";
import Flex from "./pages/Flex/Flex.jsx";
import Quiz from "./pages/Quiz/index.jsx";
import Words from "./pages/Words/Words.jsx";

export default function App() {
    const [navState, setNavState] = useState([])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout navState={navState}/>}>
                    <Route index element={<Home setNavState={setNavState}/>}/>
                    <Route path="donkey" element={<Donkey setNavState={setNavState}/>}/>
                    <Route path="flex" element={<Flex setNavState={setNavState}/>}/>
                    <Route path="quiz" element={<Quiz setNavState={setNavState}/>}/>
                    <Route path="words" element={<Words setNavState={setNavState}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
