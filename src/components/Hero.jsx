import React from 'react';
import { Mail, Phone, FileDown, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
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
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag">BizOps & Operations</div>
          <h1 className="hero-title">
            <span className="text-gray">단순 반복을 넘어,</span>
            <span className="text-focus">모두가 신뢰하는 운영 구조</span>
            <span>를 만듭니다.</span>
          </h1>
          <p className="hero-description">
            위메프, 쿠팡, 중고나라, 김캐디 등 다양한 규모의 서비스에서 예약, 결제, 정산, CS, 운영 정책 등 
            플랫폼 운영 전반을 총괄하고 개선해온 <strong>7년 차 운영 전문가 하윤택</strong>입니다.
          </p>

          <div className="hero-contact-cards">
            <div className="contact-card">
              <Phone className="contact-icon" size={20} />
              <div className="contact-info">
                <span className="contact-label">전화번호</span>
                <a href="tel:010-4795-3330" className="contact-value">010-4795-3330</a>
              </div>
            </div>

            <div className="contact-card">
              <Mail className="contact-icon" size={20} />
              <div className="contact-info">
                <span className="contact-label">이메일</span>
                <a href="mailto:yuntaek.ha@gmail.com" className="contact-value">yuntaek.ha@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a href="/resume_yuntaek.pdf" download="하윤택_이력서.pdf" className="btn btn-primary btn-large">
              <FileDown size={20} />
              이력서 PDF 다운로드
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="mockup-title">BizOps Performance Dashboard</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-stat">
                <span className="stat-label">IVR 프로젝트</span>
                <span className="stat-value text-blue">연 2억 → 월 200만</span>
                <div className="stat-gauge">
                  <div className="stat-gauge-fill" style={{ '--gauge-width': '70%' }}></div>
                </div>
                <span className="stat-desc">연간 약 2억 원 인건비를 월 200만 원 수준 IVR 비용으로 절감</span>
              </div>
              <div className="mockup-stat">
                <span className="stat-label">중고나라 페이</span>
                <span className="stat-value text-blue">결제액 2.4배 상승</span>
                <div className="stat-gauge">
                  <div className="stat-gauge-fill" style={{ '--gauge-width': '85%' }}></div>
                </div>
                <span className="stat-desc">결제 편의성 및 운영 프로세스 최적화</span>
              </div>
              <div className="mockup-stat">
                <span className="stat-label">중고나라 연동 효과</span>
                <span className="stat-value text-blue">회원 1.6배 · 상품 2배</span>
                <div className="stat-gauge">
                  <div className="stat-gauge-fill" style={{ '--gauge-width': '75%' }}></div>
                </div>
                <span className="stat-desc">중고나라 연동으로 인한 회원 수 및 상품 등록 수 증가</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} className="arrow-bounce" />
      </div>
    </section>
  );
};

export default Hero;
