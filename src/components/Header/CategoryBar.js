// کامپوننت نوار دسته‌بندی سفر - Travel Category Bar Component
import { React, useEffect } from 'react';

// آیکون‌های دسته‌بندی - Category Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney, faSnowflake, faTree,
  faBuilding, faCampground, faUmbrellaBeach, faVolleyball
} from '@fortawesome/free-solid-svg-icons';

// استایل‌های مربوط به کامپوننت - Component Styles
import '../TravelComponent/TravelComponent.css';
import tra from '../../assets/images/lo.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// آرایه دسته‌بندی‌ها - Travel Categories Array
const categories = [
  { icon: faHouseChimney, label: 'خانه' },
  { icon: faSnowflake, label: 'سردسیر' },
  { icon: faTree, label: 'جنگلی' },
  { icon: faBuilding, label: 'شهری' },
  { icon: faCampground, label: 'کمپ' },
  { icon: faUmbrellaBeach, label: 'ساحلی' },
  { icon: faVolleyball, label: 'زمین بازی' }
];

const CategoryBar = () => {

  // مقداردهی اولیه به AOS - AOS Initialization
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      {/* تصویر هدر با هواپیما و متن - Header Image with Plane and Text */}
      <div className="header-image">
        <i className="fas fa-plane flying-plane"></i>
        <img src={tra} alt="Travel" />
        <div className="header-texts">
          <h1>راحت‌ترین سفر خود را شروع کنید</h1>
          <p>با بهترین خدمات و قیمت مناسب</p>
          <p data-aos="fade-up">تجربه‌ای متفاوت در سفرهای خود داشته باشید</p>
        </div>
      </div>

      {/* محتوای اصلی نوار دسته‌بندی - Main Category Bar Content */}
      <div className="container">
        <div className="top-bar">
          <h3 className="intro">دنبال مکان خوب برای سفرت می‌گردی؟</h3>
          <p>اینجا رو بخون</p>
        </div>

        {/* نوار دسته‌بندی با آیکون‌ها - Sort Bar with Icons */}
        <div className="sort-bar">
          {categories.map(({ icon, label }) => (
            <div className="sort-item" key={label}>
              <FontAwesomeIcon icon={icon} size="2x" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryBar;
