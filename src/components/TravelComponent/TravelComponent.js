// وارد کردن کتابخانه‌های مورد نیاز / Import required libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import './TravelComponent.css'; // فایل استایل کامپوننت / Component CSS file

// لینک‌های ناوبری بالا / Top navigation links
const navLinks = [
  { href: '#listings', label: 'لیست ها' },
  { href: '#featured', label: 'ویژه' },
  { href: '#popular', label: 'محبوب' }
];

// کامپوننت اصلی سفر / Main travel component
const TravelComponent = ({ searchTerm, setSearchTerm }) => {
  // وضعیت باز بودن منوی موبایل / Mobile menu open state
  const [menuOpen, setMenuOpen] = React.useState(false);

  // تغییر وضعیت منو / Toggle menu visibility
  const toggleMenu = () => setMenuOpen(prev => !prev);

  // بستن منو هنگام کلیک روی لینک / Close menu on nav link click
  const handleNavClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  return (
    <>
      {/* نوار ناوبری بالای صفحه / Top navigation bar */}
      <nav className="navbar">

        {/* عنوان سایت یا لوگو / Site title or logo */}
        <div className="navbar-title">
          <h1>سفر هوایی</h1>
        </div>

        {/* بخش جستجو / Search section */}
        <div className="search">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="searchbox">

              {/* ورودی جستجو / Search input */}
              <div className="input-container">
                <input
                  type="text"
                  placeholder="جستجوی خانه"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

            </div>

            {/* دکمه پاک‌سازی یا جستجو / Clear or search button */}
            <div>
              <button
                type={searchTerm ? 'button' : 'submit'}
                className="clear-button"
                onClick={() => {
                  if (searchTerm) {
                    setSearchTerm('');
                  }
                }}
              >
                <FontAwesomeIcon icon={searchTerm ? faCircleXmark : faMagnifyingGlass} />
              </button>
            </div>
          </form>
        </div>

        {/* منوی ناوبری / Navigation menu */}
        <div className="menu">

          {/* آیکون منوی موبایل / Mobile menu icon */}
          <div className="mobile" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/* لیست لینک‌های ناوبری / Navigation links list */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </>
  );
};

// خروجی گرفتن کامپوننت / Exporting the component
export default TravelComponent;
