// کامپوننت بخش ویژه اقامتگاه‌ها - Featured Stays Component
import { React, useEffect } from "react";

// تصاویر اقامتگاه‌های ویژه - Featured Stay Images
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image8.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image11.jpeg';

// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const Featured = () => {
      // مقداردهی اولیه به AOS - AOS Initialization
      useEffect(() => {
        AOS.init({ duration: 3000 });
      }, []);
    
  return (
    // بخش اصلی ویژه‌ها - Main Featured Section
    <div id="featured" className="featured">

      {/* عنوان بخش ویژه - Featured Section Title */}
      <div className="title">
        <h1>ویژه</h1>
      </div>

      {/* ظرف تصاویر ویژه - Featured Image Grid */}
      <div className="featured-wrapper">

        {/* تصویر اصلی بزرگ - Main Featured Image */}
        <div className="main">
          <img src={image1} alt="" data-aos="fade-up" />
        </div>

        {/* تصاویر دیگر ویژه - Additional Featured Images */}
        <div>
          <img src={image2} alt="" data-aos="fade-left" />
        </div>
        <div>
          <img src={image3} alt="" data-aos="fade-right" />
        </div>
        <div>
          <img src={image4} alt="" data-aos="fade-left" />
        </div>
        <div>
          <img src={image2} alt="" data-aos="fade-right" />
        </div>

      </div>
    </div>
  );
};

export default Featured;
