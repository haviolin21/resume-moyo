import React from 'react';
import { Mail, Phone, FileText } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">yuntaek</span>
          <p className="footer-tagline">
            고객과 비즈니스의 연결을 돕는 데이터 기반 Operations 전문가
          </p>
        </div>

        <div className="footer-info">
          <div className="footer-contact">
            <div className="contact-item">
              <Phone size={14} />
              <a href="tel:010-4795-3330">010-4795-3330</a>
            </div>
            <div className="contact-item">
              <Mail size={14} />
              <a href="mailto:yuntaek.ha@gmail.com">yuntaek.ha@gmail.com</a>
            </div>
          </div>


        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Ha Yun Taek. Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
