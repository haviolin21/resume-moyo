import React from 'react';
import { HelpCircle, Play, CheckCircle, Award } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '예약 담당자 IVR 자동화 프로젝트',
      period: '2025.07 ~ 2025.09',
      company: '김캐디',
      problem: '예약 담당자가 미운영하는 심야/새벽 시간대에는 전화 예약 대응이 불가능해, 예약 누락 및 운영 리스크가 발생하고 불필요한 인건비 부담이 있었습니다.',
      actions: [
        '시간대별 예약 성공률 및 결제 데이터를 추출하여 병목 현상 정량 분석',
        '사람 중심의 기존 예약 대응 구조를 시스템 중심의 IVR 자동화 방식으로 전환 기획',
        '수락/거절 자동 응답 시나리오 설계 및 각종 예외 케이스 처리 프로세스 정비',
        '파일럿 테스트 및 실제 예약 유저 대상 수용성 검증 인터뷰 진행',
        '개발팀 협업을 통한 배포 반영 및 모니터링을 위한 성과 대시보드 구축'
      ],
      results: [
        '미운영 시간대 예약 성공률 50% → 70% 개선 (+20%p)',
        '연간 약 2억 원의 예약 운영 인건비를 월 200만 원 수준의 IVR 서비스 이용료로 대체하여 운영 비용 대폭 절감',
        '24시간 예약 대응 체계 구축 및 전체 예약 거래액 증가 약 +5% 기여'
      ],
      contribution: '운영 리스크가 큰 전통적 예약 구조를 데이터 기반 분석을 토대로 시스템 중심 구조로 전환함으로써, 대규모 운영 비용 절감과 비즈니스 생산성 향상을 동시에 일구었습니다.',
      metrics: [
        { label: '예약 성공률', value: '70%', change: '50% → 70%' },
        { label: '연 비용 절감', value: '약 2억 원', change: '인건비 대체' },
        { label: '예약 증가', value: '+5%', change: '24시간 대응' }
      ]
    },
    {
      title: '중고나라 페이 결제액 2.4배 성장 프로젝트',
      period: '2023.04 ~ 2023.12',
      company: '중고나라',
      problem: '결제 성장 정체를 해소하기 위해 사용자 행동 데이터를 분석한 결과, 결제 퍼널 내 높은 이탈률과 고가치 핵심 사용자에 대한 관리 전략의 부재를 확인하였습니다.',
      actions: [
        'SQL 기반 결제 퍼널 및 유저 행동 로그 데이터를 분석하여 이탈 핵심 구간 정의',
        '채팅 단계의 이탈 요인을 규명하고, 카페-앱 연동 채팅 유입 구조 기획',
        '거래액, 거래 횟수, 응답률에 따른 상위 판/구매자 세그먼트를 추출하고 타겟 관리',
        '수수료 감면 혜택을 접목한 특정 데이(Day) 프로모션 기획 및 효율 모니터링',
        '결제제휴사업부 내 주요 운영 지표 및 대시보드 구축'
      ],
      results: [
        '중고나라 페이 결제액 2.4배 상승 및 2023년 사상 최고 결제액 달성',
        '카페-앱 채팅 유도를 통해 페이 결제액 3,800만 원 → 8.4억 원으로 상승 (23년 4월 대비 11월 기준)',
        '핵심 고가치 판/구매자 거래액 약 20% 상승 및 이탈 회원 복귀 지표 개선'
      ],
      contribution: '결제 퍼널 내 구체적인 이탈 병목을 데이터로 정교하게 포착하여 개선하고, 고객 세그멘테이션에 따른 맞춤형 프로모션을 전개해 결제 성장의 퀀텀 점프를 이끌었습니다.',
      metrics: [
        { label: '페이 결제액', value: '2.4배', change: '23년 사상 최고' },
        { label: '채팅 연동 결제', value: '8.4억', change: '3,800만 → 8.4억' },
        { label: '우수 고객 거래', value: '+20%', change: '세그먼트 케어' }
      ]
    },
    {
      title: '중고나라 카페–앱 연동 프로젝트',
      period: '2022.03 ~ 2022.12',
      company: '중고나라',
      problem: '중고나라 앱의 MAU 및 거래 활성화를 위해, 1,900만 회원 규모를 가진 기존 네이버 카페의 사용자를 앱으로 안착시킬 연동 전략이 필수적이었습니다.',
      actions: [
        '카페 ↔ 앱 계정 연동 구조 설계 및 유관 운영 정책 수립',
        'SQL 기반 연동 회원 활동성 분석 및 LTV(고객생애가치) 예측 모형 검증',
        '연동 신청 절차 자동화 및 전용 연동 웹 페이지 기획',
        '스타벅스 기프티콘 리워드 연계 연동 이벤트 및 신규 등록 유도 게이미피케이션 적용',
        '연동 회원 코호트별 상품 등록 및 결제 전환 지표 지속 모니터링'
      ],
      results: [
        '신규 연동 회원 수 1.6배 증가 및 전체 등록 상품 수 2배 달성 (KPI 140% 초과)',
        '연동 회원의 활동 지표가 일반 신규 회원 대비 약 20% 높게 발생 및 연동 회원 등록 상품이 전체 앱 상품의 약 60% 점유',
        '연동 회원 일평균 상품 등록 수 5,500건 → 10,400건으로 증가'
      ],
      contribution: '카페 유저의 앱 전이 구조를 설계하고 연동 여정 속에서 혜택을 매끄럽게 설계하여, 두 거대한 커뮤니티 플랫폼 생태계를 효과적으로 연결하고 거래 볼륨을 극대화했습니다.',
      metrics: [
        { label: '연동 회원 수', value: '1.6배', change: '앱 유입 가속화' },
        { label: '상품 등록 수', value: '2.0배', change: 'KPI 140% 초과' },
        { label: '일일 상품 등록', value: '1만+ 건', change: '5,500 → 10,400건' }
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding fade-in-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-subtitle">PROJECTS</span>
          <h2 className="title-medium">주요 프로젝트</h2>
          <p className="projects-intro-text">
            문제를 명확히 규정하고, 데이터 기반 기획과 자동화를 통해 실제 비즈니스 가치를 입증해낸 프로젝트 성과입니다.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card card">
              <div className="project-meta">
                <span className="badge badge-primary">{proj.company}</span>
                <span className="project-period">{proj.period}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>

              {/* 지표 인포그래픽 카드 영역 */}
              <div className="project-metrics-grid">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="metric-box">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-change">{m.change}</span>
                  </div>
                ))}
              </div>

              <div className="project-details">
                {/* 1. 문제 정의 */}
                <div className="detail-section">
                  <div className="detail-section-title">
                    <HelpCircle size={16} />
                    <span>문제 정의 (Problem)</span>
                  </div>
                  <p className="detail-section-text">{proj.problem}</p>
                </div>

                {/* 2. 실행 */}
                <div className="detail-section">
                  <div className="detail-section-title">
                    <Play size={16} />
                    <span>해결 실행 (Action)</span>
                  </div>
                  <ul className="action-list">
                    {proj.actions.map((act, i) => (
                      <li key={i} className="action-item">{act}</li>
                    ))}
                  </ul>
                </div>

                {/* 3. 결과 */}
                <div className="detail-section">
                  <div className="detail-section-title">
                    <CheckCircle size={16} />
                    <span>최종 결과 (Result)</span>
                  </div>
                  <ul className="result-list">
                    {proj.results.map((res, i) => (
                      <li key={i} className="result-item">{res}</li>
                    ))}
                  </ul>
                </div>

                {/* 4. 핵심 기여 */}
                <div className="detail-section contribution-section">
                  <div className="detail-section-title">
                    <Award size={16} />
                    <span>핵심 기여 (Key Contribution)</span>
                  </div>
                  <p className="detail-section-text font-bold">{proj.contribution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
