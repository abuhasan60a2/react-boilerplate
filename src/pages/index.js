import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Count from '../components/common/counter/count'
const inter = Inter({ subsets: ['latin'] })
import "react-18-image-lightbox/style.css";
//register custom swiper elements module
import { register } from 'swiper/element/bundle';
import Slider from '../components/common/slider/Slider'
export default function Home() {
  register();
  return (
    <>
    Hello 
      <Count number={20} text="+" style="ss" />
      <Slider />
    </>
  )
}
