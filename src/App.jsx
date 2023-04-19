import { useEffect, useState } from "react";
import Context from "./context";
import Header from "./components/Header";
import Main from "./components/Main";
import Features from "./components/Features";
import Roadmap from "./components/Roadmap";
import Collection from "./components/Collection";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";


const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function App() {
  const [isLaptopL, setIsLaptopL] = useState(getWidth() >= 1400)
  const [isMobile, setIsMobile] = useState(getWidth() < 1024)

  const onResizeListener = () => {
    setIsLaptopL(getWidth() >= 1400)
    setIsMobile(getWidth() < 1024)
  }

  useEffect(() => {
    window.addEventListener("resize", onResizeListener)
  }, [])

  return (
      <ParallaxProvider>
        <div className="App">
          <Context.Provider value={{isLaptopL, isMobile}}>
            <Header/>
              <div className="container">
                  <Main/>
                  <Features/>
                  <Roadmap/>
                  <Collection/>
                  <Team/>
              </div>
            <Footer/>
          </Context.Provider>
        </div>
      </ParallaxProvider>
  );
}

export default App;
