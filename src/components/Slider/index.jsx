import React, {useState} from 'react';
import './slider.scss'
import {SliderData} from './SliderData';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='slider'>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        <img src={slide.image} alt='solution pass'
                             className='slider_image'/>
                    </div>
                );
            })}
            <div className="slider_arrows">
                <div className="left-arrow arrow" onClick={prevSlide}>
                    <svg fill="none" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m1.41052 29.0691c-.931999-.791-1.40899912-1.917-1.40899907-3.052.00000004-.913.31199907-1.834.94899907-2.587l7.152-8.42-7.150999-8.42002c-1.43-1.683-1.224999-4.208.458999-5.639001 1.686-1.43 4.208-1.224 5.64.460001l9.35098 11.01002c1.269 1.493 1.269 3.686 0 5.178l-9.35098 11.011c-1.432 1.684-3.955 1.889-5.64.459z"
                            fill="#fff"/>
                    </svg>
                </div>
                <div className="right-arrow arrow" onClick={nextSlide}>
                    <svg fill="none" viewBox="0 0 18 31" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m1.41052 29.0691c-.931999-.791-1.40899912-1.917-1.40899907-3.052.00000004-.913.31199907-1.834.94899907-2.587l7.152-8.42-7.150999-8.42002c-1.43-1.683-1.224999-4.208.458999-5.639001 1.686-1.43 4.208-1.224 5.64.460001l9.35098 11.01002c1.269 1.493 1.269 3.686 0 5.178l-9.35098 11.011c-1.432 1.684-3.955 1.889-5.64.459z"
                            fill="#fff"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Slider;
