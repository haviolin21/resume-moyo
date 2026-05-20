import React from 'react';
import { Settings, BarChart2, Shield, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const strengths = [
    {
      icon: <Settings className="strength-icon" size={24} />,
      title: '운영 구조 개선 및 자동화',
      desc: '단순 대응을 넘어 병목을 진단하고, 자동화 프로세스를 기획·구축하여 비용을 낮추고 효율을 극대화합니다.',
      items: [
        '운영 병목 분석 및 프로세스 개선 경험',
        '자동화를 통한 운영 효율 및 비용 절감 경험',
        '운영 지표 및 대시보드 구축 경험'
      ]
    },
    {
      icon: <BarChart2 className="strength-icon" size={24} />,
      title: '데이터 기반 문제 해결',
      desc: 'SQL 분석과 다양한 시각화 도구로 지표를 모니터링하며, 퍼널·LTV·코호트 관점에서 성장 과제를 도출합니다.',
      items: [
        'SQL 기반 운영 데이터 분석 역량',
        '퍼널·코호트·LTV 분석 기반 서비스 개선 경험',
        'GA4·AppsFlyer·QuickSight·Looker Studio 활용'
      ]
    },
    {
      icon: <Shield className="strength-icon" size={24} />,
      title: '플랫폼 운영 및 정책 기획',
      desc: 'B2C, C2C, O2O를 아우르는 풍부한 플랫폼 운영 경험을 토대로 결제, 정산, CS, 서비스 규정을 견고하게 설계합니다.',
      items: [
        '예약·정산·CS·결제·운영 정책 수립 및 개선',
        '운영 관점의 정책 수립 및 기능 개선 기획',
        'B2C·C2C·O2O 플랫폼 운영 경험'
      ]
    },
    {
      icon: <Users className="strength-icon" size={24} />,
      title: '협업 및 커뮤니케이션',
      desc: '운영, 기획, 개발 등 유관 조직을 유연하게 연결하며, 주관적 직관이 아닌 데이터를 기반으로 신속하게 합의를 도출합니다.',
      items: [
        '운영·개발·기획·CS 조직 간 협업 경험',
        '데이터 기반 커뮤니케이션 및 문제 해결',
        '다양한 이해관계자 조율 및 기획 실행력'
      ]
    }
  ];

  return (
    <section id="about" className="about-section section-padding fade-in-section">
      <div className="container">
        <div className="section-header-layout">
          <div className="section-title-area">
            <span className="section-subtitle">ABOUT ME</span>
            <h2 className="title-medium">자기 소개</h2>
          </div>
          <div className="section-desc-area">
            <p className="about-intro">
              저는 운영을 단순 반복 업무가 아닌, <strong>서비스의 안정성과 성장을 만드는 구조적 문제 해결 영역</strong>으로 바라보며 일해왔습니다.
              위메프, 쿠팡, 중고나라, 김캐디 등 다양한 플랫폼 환경에서 운영·기획·데이터 분석 업무를 경험하며 예약, 결제, 정산, CS, 운영 정책 등 서비스 운영 전반을 담당했습니다.
            </p>
            <p className="about-intro">
              SQL과 데이터 시각화 도구를 활용해 운영 데이터를 분석하고, 퍼널·LTV·코호트 분석 기반으로 실제 서비스 개선 과제를 도출했습니다. 
              또한 개발 조직과 협업하여 운영 자동화 및 기능 개선 프로젝트를 수행하며 운영 리소스 절감과 서비스 안정화에 기여했습니다.
            </p>
            <p className="about-intro">
              특히 반복적인 운영 업무를 구조적으로 개선하는 데 강점이 있습니다. 단순 현상 대응보다 문제의 원인을 정의하고, 운영 정책·프로세스·데이터를 연결해 지속 가능한 운영 구조를 만드는 방식으로 문제를 해결해왔습니다.
              데이터와 실행력을 기반으로 고객과 조직 모두가 신뢰할 수 있는 운영 환경을 만드는 <strong>BizOps/Operations 전문가</strong>로 활약하겠습니다.
            </p>
          </div>
        </div>

        <div className="strengths-grid">
          {strengths.map((s, idx) => (
            <div key={idx} className="strength-card card">
              <div className="strength-header">
                <div className="icon-wrapper">{s.icon}</div>
                <h3 className="strength-card-title">{s.title}</h3>
              </div>
              <p className="strength-card-desc">{s.desc}</p>
              <ul className="strength-list">
                {s.items.map((item, i) => (
                  <li key={i} className="strength-list-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
