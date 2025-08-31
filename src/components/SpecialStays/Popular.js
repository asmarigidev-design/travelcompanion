// کامپوننت اقامتگاه‌های محبوب - Popular Stays Component
import { React, useEffect } from "react";
// آیکون امتیاز ستاره - Star Rating Icon
// تصاویر اقامتگاه‌های محبوب - Popular Stay Images
import image3 from '../../assets/images/image3.jpeg';
import image6 from '../../assets/images/image10.jpeg';
import image7 from '../../assets/images/image7.jpeg';
import image8 from '../../assets/images/image8.jpeg';
import image10 from '../../assets/images/image10.jpeg';
// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const Popular = () => {
      // مقداردهی اولیه به AOS - AOS Initialization
      useEffect(() => {
        AOS.init({ duration: 3000 });
      }, []);
    
  return (
    // بخش اصلی اقامتگاه‌های محبوب - Main Popular Section
    <div id="popular" className="featured">

      {/* ظرف تصاویر محبوب - Popular Image Grid */}
      <div className="featured-wrapper">

        {/* تصاویر با انیمیشن و ترتیب مشخص - Animated Popular Images */}
        <div>
          <img src={image10} alt="" data-aos="fade-right" />
        </div>
        <div>
          <img src={image3} alt="" data-aos="fade-left" />
        </div>

        {/* تصویر اصلی بزرگ در وسط - Main Center Image */}
        <div className="main">
          <img src={image8} alt="" data-aos="fade-up" />
        </div>

        <div>
          <img src={image7} alt="" data-aos="fade-right" />
        </div>
        <div>
          <img src={image6} alt="" data-aos="fade-left" />
        </div>

      </div>
    </div>
  );
};

export default Popular;
