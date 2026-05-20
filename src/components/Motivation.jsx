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
                문제를 본질적으로 정의하고 빠르게 실행하는 문화에 끌렸습니다
              </h3>
            </div>
            <div className="motivation-card-body">
              <p>
                모요는 단순한 알뜰폰 비교 서비스를 넘어, 복잡한 통신 시장을 고객 관점에서 더 쉽고 정직하게 바꾸고 있다는 점이 인상 깊었습니다. 특히 <strong>DRI 기반으로 각자가 문제를 직접 정의하고 실행하는 문화</strong>, 그리고 <strong>One Team으로 함께 문제를 해결하는 방식</strong>에 깊이 공감했습니다.
              </p>
              <p>
                저 역시 운영 과정에서 발생하는 병목과 비효율을 <strong>데이터 기반으로 분석하고, 운영 정책·프로세스·자동화 개선</strong>으로 연결하며 문제를 해결해왔습니다. 빠르게 실행하고 학습하며 실제 비즈니스 임팩트를 만들어가는 모요의 문화가 저와 잘 맞는다고 느꼈습니다.
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
                운영과 데이터를 연결해 신뢰할 수 있는 운영 환경을 만들고 싶습니다
              </h3>
            </div>
            <div className="motivation-card-body">
              <p>
                그동안 다양한 플랫폼 환경에서 <strong>예약, 결제, 정산, CS, 운영 정책 등 서비스 운영 전반을 경험</strong>하며 운영 효율화와 서비스 안정화 프로젝트를 수행해왔습니다.
              </p>
              <p>
                모요에서도 <strong>데이터 기반으로 운영 프로세스를 지속적으로 개선</strong>하고, 고객과 파트너 모두가 신뢰할 수 있는 운영 환경을 만드는 데 기여하고 싶습니다. 또한 DRI로서 문제를 끝까지 책임지고 해결하며, <strong>One Team 문화 속에서 실제 비즈니스 임팩트</strong>를 만드는 데 기여하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
