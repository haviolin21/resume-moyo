import React from 'react';
import { Target, Heart } from 'lucide-react';
import './Motivation.css';

const Motivation = () => {
  return (
    <section id="motivation" className="motivation-section section-padding fade-in-section">
      <div className="container">
        <div className="motivation-header">
          <span className="section-subtitle">WHY MOYO</span>
          <h2 className="title-medium">지원 동기</h2>
          <p className="motivation-intro-text">
            모요의 일하는 문화에 깊이 공감하며, 데이터 기반 BizOps 역량으로 실제 임팩트를 만들어내고자 지원하였습니다.
          </p>
        </div>

        <div className="motivation-cards">
          <div className="motivation-card card">
            <div className="motivation-card-header">
              <div className="motivation-badge">
                <Target size={18} />
                <span>DRI & One Team</span>
              </div>
              <h3 className="motivation-card-title">
                문제를 본질적으로 정의하고 빠르게 실행하는 문화에 끌렸습니다.
              </h3>
            </div>
            <div className="motivation-card-body">
              <p>
                모요가 알뜰폰 비교 서비스를 넘어 통신 시장을 고객 관점에서 쉽고 정직하게 혁신하고 있는 점이 인상적이었습니다. 
                특히 <strong>각자가 문제를 스스로 정의하고 실행하는 DRI 문화</strong>와, <strong>One Team으로 단합하여 비즈니스 비효율을 해결해 나가는 방식</strong>에 강한 유대감을 느꼈습니다.
              </p>
              <p>
                저 역시 그간 현상에 대응하기에 급급한 운영 방식을 넘어, 병목과 비효율의 본질적인 원인을 정의하고 프로세스 개선으로 연결해왔습니다. 
                지속적으로 가설을 시험하고 빠르게 피드백을 수용하며 실제 비즈니스 임팩트를 창출해온 저의 실행 방식이 모요의 문화와 시너지를 낼 것이라 확신합니다.
              </p>
            </div>
          </div>

          <div className="motivation-card card">
            <div className="motivation-card-header">
              <div className="motivation-badge">
                <Heart size={18} />
                <span>Value Creation</span>
              </div>
              <h3 className="motivation-card-title">
                운영과 데이터를 연결해 신뢰할 수 있는 운영 환경을 만들고 싶습니다.
              </h3>
            </div>
            <div className="motivation-card-body">
              <p>
                그동안 이커머스 및 O2O 플랫폼에서 예약, 결제, 정산, CS, 운영 정책 등 <strong>서비스 라이프사이클 전반의 운영 관리 체계를 안정적으로 개선하고 성과를 도출</strong>했습니다.
              </p>
              <p>
                모요에 합류하여 통신사 및 채널 등 복잡한 비즈니스 이해관계 속에서 발생하는 불필요한 운영 리소스를 데이터 기반으로 자동화·최적화하겠습니다. 
                이를 통해 고객과 파트너 모두가 모요를 더 신뢰할 수 있도록 돕고, 비즈니스 목표 달성에 직접 기여하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
