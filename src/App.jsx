import React, { useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Motivation from './components/Motivation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer로 스크롤 애니메이션 클래스 제어
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // 15% 이상 노출 시 실행
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // 한 번 애니메이션이 발생하면 관찰 해제할 수 있으나,
          // 반복 스크롤 효과를 주기 위해 해제하지 않고 둡니다.
          // 원한다면 observer.unobserve(entry.target); 추가 가능
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll('.fade-in-section');
    
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Banner />
      <Header />
      <main>
        <Hero />
        <About />
        <Motivation />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
