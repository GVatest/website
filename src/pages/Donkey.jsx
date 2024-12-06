import {useEffect} from "react";
import {DONKEY_PAGE, FLEX_PAGE, HOME_PAGE, QUIZ_PAGE, WORDS_PAGE} from "../constants/pages.js";

const css = `
:root {
  --accent: #676a64;
}

body {
  margin: 0;
}

.scene-donkey {
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 10px;

  background: linear-gradient(180deg, #4194ff 0%, white 80%);
}

.donkey {
  position: relative;
  width: 62%;
  height: 56%;
  top: 26.7%;
  left: 31%;

  .donkey__head {
    position: absolute;
    width: 41.88%;
    height: 21.2%;
    top: 27.2%;
    left: 1.5%;
    z-index: 1;
    transform: rotate(-13deg);

    border-radius: 100%;
    background: linear-gradient(90deg, #d5d9d3 0%, #70736e 100%);
    border: var(--accent) 1px solid;
  }

  .donkey__ear {
    position: absolute;
    width: 48.3%;
    height: 11.2%;
    z-index: 0;

    background: linear-gradient(90deg, #767a74 0%, #c2c6c2 100%);
    border-radius: 100%;

    &.donkey__ear_right {
      top: 13.6%;
      left: 21.1%;
      transform: rotate(-35deg);
    }

    &.donkey__ear_left {
      top: 24.4%;
      left: 30.9%;
      transform: rotate(-16deg);
    }
  }

  .donkey__nose {
    position: absolute;
    width: 4.2%;
    height: 4.8%;
    top: 37.6%;
    left: 4.9%;
    z-index: 2;

    background-color: var(--accent);
    border-radius: 100%;
  }

  .donkey__mouth {
    position: absolute;
    width: 1.9%;
    height: 6.4%;
    top: 42.9%;
    left: 8.5%;
    z-index: 2;
    transform: rotate(46deg);

    border-radius: 2px 2px 2px 0px;
    background-color: var(--accent);
  }

  .donkey__eye {
    position: absolute;
    width: 7.9%;
    height: 8%;
    top: 32%;
    left: 25.3%;
    z-index: 2;

    border-radius: 100%;
    background-color: #fff;
  }

  .donkey__eye-ball {
    position: absolute;
    width: 4.5%;
    height: 5.6%;
    top: 33.6%;
    left: 26.4%;
    z-index: 3;

    border-radius: 100%;
    background-color: #000;
  }

  .donkey__neck {
    position: absolute;
    width: 15.8%;
    height: 12.4%;
    top: 44.4%;
    left: 23%;
    transform: rotate(-22deg);
    z-index: 0;

    background: #82857f;
  }

  .donkey__body {
    position: absolute;
    width: 69.8%;
    height: 36%;
    top: 49.6%;
    left: 21.1%;
    z-index: 1;

    border-radius: 100%;
    background: radial-gradient(
        72.3% 104.82% at 20% 68.89%,
        rgba(213, 216, 211, 0.7) 0%,
        rgba(118, 122, 116, 0.1) 100%
      ),
      #82857f;
    border: var(--accent) 1px solid;
  }

  .donkey__leg {
    position: absolute;
    width: 12.1%;
    height: 19.6%;
    clip-path: polygon(20% 100%, 80% 100%, 100% 0%, 0% 0%);
    z-index: 0;

    background-color: #767a74;

    &.donkey__leg_1 {
      top: 78.8%;
      left: 33.6%;
      transform: rotate(10deg);
    }

    &.donkey__leg_2 {
      top: 79.2%;
      left: 45.7%;
    }

    &.donkey__leg_3 {
      top: 78.8%;
      left: 67.9%;
      transform: rotate(-10deg);
    }

    &.donkey__leg_4 {
      top: 74.4%;
      left: 78.5%;
      transform: rotate(-45deg);
    }
  }

  .donkey__tail {
    position: absolute;
    width: 7.5%;
    height: 16%;
    z-index: 0;

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 2px solid #82857f;
    border-left: 0;

    &.donkey__tail_1 {
      top: 50.7%;
      left: 90.7%;
    }

    &.donkey__tail_2 {
      top: 35.9%;
      left: 83.6%;
      transform: rotate(180deg);
    }
  }

  .donkey__brush {
    position: absolute;
    top: 30.8%;
    left: 88.5%;
    transform: rotate(-100deg);
    width: 10.2%;
    height: 10.8%;

    .triangle::before,
    .triangle::after {
      background-color: #82857f;
    }
  }
}

.baloon {
  position: absolute;
  width: 29.7%;
  height: 74%;
  top: 8%;
  left: -17.1%;
  overflow: hidden;

  .baloon__head {
    position: absolute;
    width: 89.4%;
    height: 18.8%;
    top: 10%;
    left: 21.2%;
    transform: rotate(76deg);
    z-index: 2;

    border-radius: 100%;
    background: radial-gradient(
        82.22% 58.06% at 20% 68.89%,
        #fff 0%,
        #cc516a 100%
      ),
      #cc516a;
  }

  .baloon__brush {
    position: absolute;
    width: 27.3%;
    height: 10.9%;
    top: 32.8%;
    left: 65.9%;
    transform: rotate(-25deg);
    z-index: 1;

    .triangle::before,
    .triangle::after {
      background-color: #cc516a;
    }
  }

  .baloon__rope {
    position: absolute;
    width: 170.5%;
    height: 106.4%;
    top: 18.2%;
    left: -81.1%;
    transform: rotate(25deg);
    z-index: 0;

    border-top-right-radius: 355px;
    border-bottom-right-radius: 355px;
    border: 2px solid #9bde65;
    border-left: 0;
  }
}

.triangle {
  position: relative;

  overflow: hidden;
  transform: translateY(50%) rotate(30deg) skewY(30deg) scaleX(0.866);

  border-radius: 20%;

  &,
  &::before,
  &::after {
    width: 100%;
    height: 100%;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
      skewX(30deg) scaleY(0.866) translateX(-24%);
    border-radius: 20% 20% 20% 53%;
  }

  &::after {
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
      skewX(-30deg) scaleY(0.866) translateX(24%);
    border-radius: 20% 20% 53% 20%;
  }
}

.ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18%;
  background: repeating-linear-gradient(
    -45deg,
    #f9f477,
    #f9f477 10px,
    #a4ef81 10px,
    #a4ef81 20px
  );
}

`

function Donkey({setNavState}) {
    useEffect(() => {
        setNavState([HOME_PAGE, FLEX_PAGE, QUIZ_PAGE, WORDS_PAGE]);
    }, []);
    return <>
        <div className="scene-donkey">
            <div className="donkey">
                <div className="donkey__head"></div>
                <div className="donkey__ear donkey__ear_right"></div>
                <div className="donkey__ear donkey__ear_left"></div>
                <div className="donkey__nose"></div>
                <div className="donkey__mouth"></div>
                <div className="donkey__eye"></div>
                <div className="donkey__eye-ball"></div>
                <div className="donkey__neck"></div>
                <div className="donkey__body"></div>
                <div className="donkey__leg donkey__leg_1"></div>
                <div className="donkey__leg donkey__leg_2"></div>
                <div className="donkey__leg donkey__leg_3"></div>
                <div className="donkey__leg donkey__leg_4"></div>
                <div className="donkey__tail donkey__tail_1"></div>
                <div className="donkey__tail donkey__tail_2"></div>
                <div className="donkey__brush">
                    <div className="triangle"></div>
                </div>
            </div>
            <div className="baloon">
                <div className="baloon__head"></div>
                <div className="baloon__brush">
                    <div className="triangle"></div>
                </div>
                <div className="baloon__rope"></div>
            </div>
            <div className="ground"></div>
        </div>
        <style>{css}</style>
    </>;
}

export default Donkey;
