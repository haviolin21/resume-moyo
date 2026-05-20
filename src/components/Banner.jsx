import React from 'react';
import './Banner.css';

const Banner = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="top-banner" onClick={() => scrollToSection('about')}>
      <div className="banner-content">
        <span className="banner-tag">집중 채용</span>
        <span className="banner-text">
          모요의 구조적 문제 해결과 성장을 이끌 BizOps/Operations 전문가 하윤택입니다. 
          <span className="banner-arrow"> →</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
