import React from 'react';
import { Calendar, Briefcase, Award, Cpu } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: '김캐디',
      role: '운영팀 리드',
      period: '2025.06 – 2026.02 (9개월)',
      description: '예약 플랫폼 운영 구조 개선 및 자동화, VOC 분석 기반 정책 수립 총괄',
      responsibilities: [
        '운영 데이터 및 VOC 분석 기반 운영 정책·서비스 개선 과제 정의',
        '운영 프로세스 병목 분석 및 자동화 과제 발굴',
        '운영팀·개발팀 협업 기반 운영 시스템 및 기능 개선 기획',
        '운영 효율·품질 지표 설계 및 대시보드 기반 모니터링 체계 구축',
        '고객센터 운영 정책 수립 및 상담 채널 구조 설계·운영'
      ],
      achievements: [
        'IVR 기반 예약 자동화 프로젝트 직접 기획 및 도입 → 연간 약 2억 원 수준의 운영 비용 절감 및 24시간 예약 대응 체계 구축',
        '운영 정책·프로세스 개선 과제를 직접 정의하고 유관 부서와 협업하여 기획-개발-적용 전 과정을 리드',
        '반복 운영 업무 자동화 및 프로세스 개선을 통해 콜 CS 응대율 평균 10% → 80% 수준으로 대폭 개선',
        '운영 데이터 및 VOC 분석 기반 서비스 개선 요청 정의 및 개발 반영으로 고객 불편 감소 및 운영 리소스 절감'
      ],
      tools: ['SuperSet', '스프레드시트', 'Amazon Redshift', '채널톡', '센터플로우']
    },
    {
      company: '중고나라',
      role: '결제제휴사업팀 매니저',
      period: '2022.03 – 2024.04 (2년 2개 월)',
      description: 'SQL 기반 결제 데이터 분석, 페이 서비스 운영 및 퍼널 개선 과제 도출',
      responsibilities: [
        'SQL 기반 운영·결제 데이터 추출 및 주요 지표 분석 리포트 작성',
        '결제·운영 지표 대시보드 구축 및 모니터링 체계 운영',
        '중고나라 페이 서비스 운영 및 결제 프로세스 관리',
        '결제 이벤트 기획 및 성과 분석',
        '결제 퍼널 및 사용자 행동 분석 기반 전환 개선 과제 도출'
      ],
      achievements: [
        '결제 퍼널(탐색-채팅-결제 단계) 분석 및 핵심 사용자 세그먼트 전략을 통해, 중고나라 페이 결제액 2.4배 상승 및 23년 최고 결제액 달성 (23년 결제 KPI 달성)',
        '카페–앱 채팅 유도를 통해 중고나라 페이 결제액 3,800만 원 → 8.4억 원 상승 (23년 4월 대비 23년 11월 기준)',
        '카페-앱 연동을 통한 NRU 1.6배 증가, 상품 등록수 2배 증가 (22년 상품 등록 KPI 140% 초과 달성)',
        '사기 채팅 키워드 적용으로 사기 피해 건 수 60% 감소 (22년 상반기 목표 달성)',
        '중고나라 페이 모니터링 효율화 및 자동화 서비스 개선 (22년 운영 모니터링 개선 목표 달성)'
      ],
      tools: ['Looker Studio', 'QuickSight', 'MySQL', 'PostgreSQL', 'Amazon Redshift', 'AppsFlyer', 'Airbridge', 'GA4']
    },
    {
      company: '브랜즈컴퍼니 (전. 스카이랩)',
      role: '마케팅기획 팀장',
      period: '2021.05 – 2022.01 (9개월)',
      description: '쿠팡 로켓배송 채널 운영 총괄, 판매 데이터 기반 재고 운영 전략 수립',
      responsibilities: [
        '쿠팡 로켓배송 채널 운영 총괄 및 운영 프로세스 관리',
        '판매 데이터 분석 기반 발주·재고 운영 전략 수립',
        '상품 기획 및 운영 상품 라인업 확대',
        '매출 및 운영 데이터 분석·리포트 작성'
      ],
      achievements: [
        '쿠팡 로켓배송 채널 운영 최적화를 통해 월 평균 10% 이상 매출 성장',
        '판매 데이터 기반 발주 전략 개선을 통해 재고 안정화 및 운영 효율 향상',
        '운영 상품 라인업 확장을 통해 매출 볼륨 확대 및 상품 수 37% 증가',
        '데이터 기반 재고·판매 흐름 관리를 통해 안정적인 물류 운영 체계 유지'
      ],
      tools: ['Excel', '쿠팡 윙/서플라이어 허브']
    },
    {
      company: '쿠팡',
      role: 'Pricing Operation (L4)',
      period: '2020.04 – 2020.08 (5개월)',
      description: '리테일 프라이싱 채널 가격 정책 관리 및 예외 케이스 관리',
      responsibilities: [
        '리테일 프라이싱 채널 운영 및 가격 정책 관리',
        '카테고리별 가격 정책 설정·운영 및 예외 케이스 관리',
        '가격 이슈 분석 및 유관 부서 협업 기반 개선 과제 도출',
        'BM·Pricing Tech 조직과 협업하여 운영 정책 및 프로세스 개선',
        'SQL 기반 운영 데이터 추출 및 가격 정책 모니터링 지원'
      ],
      achievements: [
        'KF·덴탈 마스크 가격 로직을 설계하여 이슈 상품에 대한 안정적인 가격 운영 프로세스 구축',
        '가격 비교 예외 케이스 대응 및 정책 개선을 통해 예외율 감소 및 정규 로직 안정화',
        '블랙셀러·화이트셀러 대응 기준 및 가격 비교 예외 프로세스 수립',
        'SQL 기반 데이터 추출 및 운영 분석을 통해 RBI팀 업무 효율 개선'
      ],
      tools: ['SQL', 'Excel', 'Internal Pricing System']
    },
    {
      company: '위메프',
      role: '판촉운영팀 사원',
      period: '2017.12 – 2020.03 (2년 4개월)',
      description: '식품 카테고리 가격 비교 판촉 운영 및 노출 전략 관리',
      responsibilities: [
        '식품 카테고리 가격 비교 판촉 운영 및 거래액·마진 효율 관리',
        '판매 데이터 분석 기반 판촉 상품 선정 및 노출 전략 운영',
        '식품 카테고리 매출 데이터 분석 및 운영 리포트 작성',
        '매출 상위 SKU 중심 운영 전략 수립 및 판촉 ROI 개선'
      ],
      achievements: [
        '거래액 상위 20% TOP SKU 중심 판촉 전략을 통해 판촉 효율 및 운영 성과 개선',
        '가격 비교 원부 프로젝트를 수행하여 사이트 내 가격 비교 기능 구축',
        '데이터 기반 가격 비교 판촉 운영을 통해 식품 카테고리 1위 및 GMV·CM 목표 달성'
      ],
      tools: ['Excel', 'Internal Promotion System']
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding fade-in-section">
      <div className="container">
        <div className="experience-header">
          <span className="section-subtitle">WORK EXPERIENCE</span>
          <h2 className="title-medium">경력사항</h2>
          <div className="total-experience">
            <span>총 경력</span>
            <strong>7년</strong>
          </div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="experience-card card">
                  <div className="exp-card-header">
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <span className="company-role">{exp.role}</span>
                    </div>
                    <div className="company-period">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="exp-brief">{exp.description}</p>

                  <div className="exp-details-grid">
                    <div className="detail-column">
                      <h4 className="detail-title">
                        <Briefcase size={16} />
                        <span>주요 업무</span>
                      </h4>
                      <ul className="detail-list">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="detail-item">{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-column">
                      <h4 className="detail-title">
                        <Award size={16} />
                        <span>주요 성과</span>
                      </h4>
                      <ul className="detail-list">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="detail-item highlight">{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {exp.tools && exp.tools.length > 0 && (
                    <div className="exp-tools-container">
                      <div className="tools-title">
                        <Cpu size={14} />
                        <span>사용 툴:</span>
                      </div>
                      <div className="tools-badges">
                        {exp.tools.map((tool, idx) => (
                          <span key={idx} className="badge badge-gray">{tool}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
