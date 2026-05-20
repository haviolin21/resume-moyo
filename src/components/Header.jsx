import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    { label: '소개', id: 'about' },
    { label: '지원 동기', id: 'motivation' },
    { label: '경력사항', id: 'experience' },
    { label: '프로젝트', id: 'projects' },
    { label: '학력·교육', id: 'education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 스크롤 위치에 따른 액티브 메뉴 갱신
      const scrollPosition = window.scrollY + 100;
      
      const current = menuItems.find(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          return scrollPosition >= top && scrollPosition < top + height;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // GNB 높이 보정
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* 로고 영역 */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-text">yuntaek</span>
          <span className="logo-sub">포트폴리오</span>
        </div>

        {/* 데스크톱 메뉴 */}
        <nav className="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <a href="/resume_yuntaek.pdf" download="하윤택_이력서.pdf" className="btn-download">
            <FileText size={16} />
            이력서 받기
          </a>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="메뉴 토글">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 모바일 네비게이션 드로어 */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="/resume_yuntaek.pdf" 
            download="하윤택_이력서.pdf" 
            className="mobile-btn-download"
            onClick={() => setIsOpen(false)}
          >
            <FileText size={18} />
            이력서 PDF 다운로드
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
