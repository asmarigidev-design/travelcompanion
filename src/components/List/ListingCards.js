// کامپوننت کارت‌های اقامت - Listing Cards Component
import { React, useEffect } from 'react';

// آیکون ستاره برای امتیاز - Star Icon for Rating
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// استایل‌های مربوط به کارت‌ها - Listing Styles
import '../TravelComponent/TravelComponent.css';

// کتابخانه انیمیشن AOS - Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

const ListingCards = ({ listings }) => {

  // مقداردهی اولیه به AOS - AOS Initialization
  useEffect(() => {
    AOS.init({ duration: 7500 });
  }, []);

  return (
    // بخش نمایش لیست اقامتگاه‌ها - Listings Display Section
    <div id="listings" className="listings">
      {listings.length === 0 ? (
        // پیام در صورت نبود نتیجه - No Results Message
        <p className="no-results">موردی یافت نشد 😕</p>
      ) : (
        listings.map((item, index) => (
          // کارت اقامتگاه - Listing Card
          <div className="listing-card card" key={index} data-aos="fade-up">
            <img src={item.image} alt={`تصویر ${index + 1}`} />
            
            {/* محتوای کارت - Card Content */}
            <div className="card-content">
              
              {/* هدر کارت شامل موقعیت و امتیاز - Card Header with Location and Rating */}
              <div className="card-header">
                <h4 data-aos="fade-right">{item.location}</h4>
                <p>
                  {item.rating}
                  <FontAwesomeIcon icon={faStar} style={{ color: '#f39c12', marginLeft: '4px' }} />
                </p>
              </div>

              {/* اطلاعات شرکت، تاریخ و قیمت - Company, Date, and Price Info */}
              <p className="card-company">{item.company}</p>
              <p className="card-date">{item.dateRange}</p>
              <p className="card-price">{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListingCards;
