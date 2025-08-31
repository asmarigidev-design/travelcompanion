// کامپوننت فوتر سایت - Footer Component
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    
    {/* بخش دعوت به اقدام - Call to Action Section */}
    <div className="footer-cta">
      <h2>سفر بعدی‌ات رو با خیال راحت برنامه‌ریزی کن </h2>
      <p>اقامتگاه‌های مطمئن، قیمت‌های مناسب، و تجربه‌ای فراموش‌نشدنی در سراسر ایران</p>
      <a href="/destinations" className="cta-button">جستجوی مقصد</a>
    </div>

    {/* شبکه لینک‌ها - Footer Grid Links */}
    <div className="footer-grid">

      {/* ستون اول: درباره ما - Column: About Us */}
      <div className="">
        <ul>
          <h4>درباره ما</h4>
          <li><a href="/">حریم خصوصی</a></li>
          <li><a href="/">قوانین استفاده</a></li>
          <li><a href="/">تماس با ما</a></li>
        </ul>
      </div>

      {/* ستون دوم: دسته‌بندی اقامتگاه - Column: Stay Categories */}
      <ul>
        <h4>دسته بندی اقامتگاه</h4>
        <li><a href="/">لیستها</a></li>
        <li><a href="/">ویژه </a></li>
        <li><a href="/">محبوبها</a></li>
      </ul>

      {/* ستون سوم: اطلاعات سایت - Column: Site Info */}
      <div className="">
        <ul>
          <h4>اطلاعات سایت</h4>
          <li><a href="/">شرایط خدمات</a></li>
          <li><a href="/">سیاست‌های امنیتی</a></li>
          <li><a href="/">پشتیبانی کاربران</a></li>
        </ul>
      </div>

      {/* ستون چهارم: راهنمای سفر - Column: Travel Guide */}
      <div className="">
        <ul>
          <h4>راهنمای سفر</h4>
          <li><a href="/">سوالات متداول</a></li>
          <li><a href="/">نکات مهم سفر</a></li>
          <li><a href="/">ارتباط با کارشناسان</a></li>
        </ul>
      </div>

    </div>
  </footer>
);

export default Footer;
