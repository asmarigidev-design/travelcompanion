// کامپوننت بخش پیشنهاد ویژه - Promotion Section Component
import { React, useEffect } from "react";

// استایل‌های بخش پروموشن - Promotion Styles
import './PromotionSections.css';

// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const PromotionSection = () => {
    // مقداردهی اولیه به AOS - AOS Initialization
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
  return (
    // بخش اصلی پیشنهاد ویژه - Main Promo Section
    <div className="promo-section">
      
      {/* ظرف محتوای پروموشن - Promo Content Container */}
      <div className="promo-container">

        {/* محتوای متنی با انیمیشن - Promo Text Content with Animation */}
        <div className="promo-content" data-aos="fade-up">
          <h2>پیشنهاد ویژه برای سفرهای آینده</h2>
          <p>
            سفر با امکانات خاص و قیمت مناسب، با تیم ما همراه باشید تا تجربه‌ای جدید و متفاوت داشته باشید.
          </p>
          <p>
            در این بخش، می‌توانید درباره خدمات ما، تخفیف‌ها و امکانات خاص سفرهای آینده اطلاعات زیادی کسب کنید.
          </p>
          <p>
            هدف ما برآوردن رویاهای سفر شماست و با بهترین پیشنهادها در خدمتتان هستیم.
          </p>
          {/* توضیحات قابل توسعه - Expandable Text Section */}
        </div>

      </div>
    </div>
  );
};

export default PromotionSection;
