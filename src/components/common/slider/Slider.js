import React, { useRef } from 'react'
import Swiper from 'swiper'
const Slider = () => {
    const swiperRef = useRef(null)
  return (
    <div>
        <swiper-container ref={swiperRef} slides-per-view ={3} loop = {true} autoplay={true} delay={1000}>
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
        </swiper-container>
    </div>
  )
}

export default Slider