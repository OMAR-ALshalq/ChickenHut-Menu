import { useState } from "react";
import "./Hero.css";

// icons ...
import { MdWhatsapp } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";

export default function Hero({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onSearch(val); // ✅ يرسل النص إلى App
  };

  return (
    <div className="Main-box-Hero">
      <div className="box-Logo">
        <img src="/Imag/Logo.jpg" alt="شعار" loading="lazy" />
      </div>
      <div className="box-title">
        <h3>ChickenHut</h3>
        <p>مختصون بتقديم شاورما الدجاج و اللحم بحرفية عالية</p>
      </div>
      <div className="box-SocialMedia">
        {/* فيسبوك */}
        <a
          href="https://www.facebook.com/share/1DDJeerbsP/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="Icon-SocialMedia" />
        </a>

        {/* واتساب */}
        <a
          href="https://wa.me/963938991726"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdWhatsapp className="Icon-SocialMedia" />
        </a>

        {/* إنستغرام */}
        <a
          href="https://www.instagram.com/chicken_hut11?igsh=eGU1bzQ5bXU2cGtm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="Icon-SocialMedia" />
        </a>

        {/* الموقع (Google Maps) */}
        <a
          href="https://maps.app.goo.gl/65UwtjQ3ZdA6heMLA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot className="Icon-SocialMedia" />
        </a>

        <a href="tel:+963938991726">
          <IoCall className="Icon-SocialMedia" />
        </a>
      </div>
      <div className="box-Search">
        <div className="box-search-icon">
          <input
            type="text"
            placeholder="ابحث الان"
            value={inputValue}
            onChange={handleInputChange}
          />
          <LiaSearchSolid className="Icon-search" />
        </div>
      </div>
    </div>
  );
}
