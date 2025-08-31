import React, { useState, useEffect } from 'react';
import listingsData from './components/List/listingsData';
import ListingCards from './components/List/ListingCards';
import TravelComponent from './components/TravelComponent/TravelComponent';
import Popular from './components/SpecialStays/Popular';
import CategoryBar from './components/Header/CategoryBar';
import Footer from './components/Footer/Footer';
import PromotionSection from './components/PromotionSections/PromotionSection';
import PromotionSectionright from './components/PromotionSections/PromotionSectionright';
import Featured from './components/SpecialStays/Featured';// شروع کامپوننت اصلی اپلیکیشن / Start main App component
const App = () => {

  // وضعیت جستجو / Search term state
  const [searchTerm, setSearchTerm] = useState('');

  // لیست‌های فیلترشده / Filtered listings state
  const [filteredListings, setFilteredListings] = useState(listingsData);

  // فیلتر کردن لیست‌ها بر اساس جستجو / Filter listings by search term
  useEffect(() => {
    const filtered = listingsData.filter(item =>
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [searchTerm]);

  return (
    <div>
      {/* نوار دسته‌بندی بالا / Top category bar */}
      <CategoryBar />

      {/* کامپوننت جستجو و ناوبری / Search and navigation component */}
      <TravelComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* نمایش کارت‌های اقامتگاه / Listing cards display */}
      <ListingCards listings={filteredListings} />

      {/* بخش اقامتگاه‌های ویژه / Featured stays section */}
      <Featured />

      {/* سکشن تبلیغاتی سمت راست / Right promotion section */}
      <PromotionSectionright />

      {/* بخش اقامتگاه‌های محبوب / Popular stays section */}
      <Popular />

      {/* سکشن تبلیغاتی سمت چپ / Left promotion section */}
      <PromotionSection />

      {/* فوتر سایت / Site footer */}
      <Footer />
    </div>
  );
};

// خروجی گرفتن کامپوننت اپ / Export App component
export default App;
