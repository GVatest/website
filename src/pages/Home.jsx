import Main from "../components/Main";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Collection from "../components/Collection";
import Team from "../components/Team";
import {useEffect} from "react";
import {DONKEY_PAGE, FLEX_PAGE, QUIZ_PAGE, WORDS_PAGE} from "../constants/pages.js";

function Home({setNavState}) {
    useEffect(() => {
        setNavState([DONKEY_PAGE, FLEX_PAGE, QUIZ_PAGE, WORDS_PAGE]);
    }, []);

    return (
        <>
            <Main/>
            <Features/>
            <Roadmap/>
            <Collection/>
            <Team/>
        </>
    );
}

export default Home;
