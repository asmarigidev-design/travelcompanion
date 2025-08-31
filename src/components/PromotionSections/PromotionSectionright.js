// کامپوننت پیشنهاد سمت راست سفر - Right-Side Travel Promotion Component
import { React, useEffect } from "react";

// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// استایل‌های بخش پروموشن - Promotion Section Styles
import './PromotionSections.css';

const PromotionSectionright = () => {

  // مقداردهی اولیه به AOS - AOS Initialization
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    // بخش اصلی پیشنهاد سمت راست - Main Right Promo Section
    <div className="promo-sectionright">
      
      {/* ظرف محتوای پروموشن - Promo Content Container */}
      <div className="promo-container">

        {/* محتوای متنی با انیمیشن - Promo Text Content with Animation */}
        <div className="promo-content" data-aos="fade-down">
          <h2>برنامه‌ریزی هوشمند برای سفرهای آینده</h2>
          <p>
            با انتخاب مقصد مناسب و خدمات حرفه‌ای، سفری راحت و خاطره‌انگیز را تجربه کنید.
          </p>
          <p>
            در این بخش، اطلاعات کاملی درباره اقامتگاه‌ها، تخفیف‌ها و امکانات ویژه سفرهای آینده در اختیار شماست.
          </p>
          <p>
            هدف ما ساختن لحظاتی به‌یادماندنی برای شماست، با بهترین گزینه‌ها و پشتیبانی کامل.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PromotionSectionright;
