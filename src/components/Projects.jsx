import React, { useState, useEffect } from 'react';
import { HelpCircle, Play, CheckCircle, X, ArrowRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProj, setSelectedProj] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: '예약 담당자 IVR 대체',
      period: '25.07.29 ~ 25.09.21',
      company: '김캐디',
      summary: [
        '미운영 시간대 예약 성공률 50% → 70%로 개선, 인건비 연 약 2억 원 → 월 200만 원 수준으로 대폭 절감',
        'IVR 기반 예약 프로세스로 24시간 예약 커버',
        '예약 성공률·운영 시간대별 성과 지표 대시보드 구축'
      ],
      details: {
        problem: '예약 담당자 미운영 시간대에는 전화 예약 대응이 불가하여, 고객 예약 실패·매출 손실·운영 리소스 비효율이 동시에 발생하는 문제를 확인하였습니다.',
        action: 'IVR 통화 방식에 대한 사용자 거부감 사전 조사 후 도입. 도입 전·후 예약 성과 및 운영 비용 비교, 대시보드를 구축해 성과를 검증했습니다.',
        result: '미운영 시간대 성공률을 크게 높이고, 전체 거래 성과 개선 및 운영 리스크 감소에 기여함.',
        description: [
          "김캐디는 매장 예약 관리를 위한 사장님 솔루션을 운영하고 있으며, 솔루션 사용이 어려운 매장이나 예약을 놓친 경우를 보완하기 위해 프리랜서 형태의 '예약 담당자' 구조를 운영하고 있었습니다.",
          "해당 운영 방식은 예약 담당자 근무 시간 외에는 대응이 불가능해 새벽 시간대 예약이 누락되는 문제가 있었고, 재택 근무 기반 운영으로 인해 예약 처리 품질이 일정하지 않아 비효율이 존재했습니다.",
          "입사 후 운영 전반을 파악하는 과정에서 예약 담당자가 처리하는 예약이 전체 결제액에서 차지하는 비중이 1%도 되지 않음을 확인하고, 반면 새벽 시간대에는 200건 중 절반가량이 누락되는 것을 발견하였습니다.",
          "이러한 분석을 바탕으로 인력 중심 운영을 IVR로 대체하여 운영 효율을 개선하자는 가설을 수립했습니다. 초기 테스트를 통해 매장 인터뷰를 병행하여 거부감이 없음을 확인 후 전면 도입했고, 큰 비용 절감과 업무 안정성을 가져왔습니다.",
          "본 프로젝트를 통해 운영 리스크가 높은 영역을 데이터로 구조화하고, 내외부 관련자들을 설득하며 도입과 안착까지 성공적으로 완수하는 경험을 했습니다."
        ]
      }
    },
    {
      title: '중고나라 페이 결제 2배 증가',
      period: '23.04.07 ~ 23.12.31',
      company: '중고나라',
      summary: [
        '2023년 최고 결제액 달성 및 2.4배 상승',
        '결제 퍼널(탐색-채팅-결제) 이탈률 분석 및 카페 채팅 유도 기능 개발',
        '상위 거래자 세그먼트 추출 및 VIP 관리로 거래액 20% 상승 효과'
      ],
      details: {
        problem: '결제액 저조 문제 해결을 위해 사용자 행동 데이터를 분석하였고 결제 퍼널에서 이탈률 개선이 필요한 구간을 확인하였습니다.',
        action: '앱 내 크롤링 된 카페 상품에서 발생하는 채팅 이탈 병목을 막고자 앱 내 채팅 시 카페 댓글 유도 기능을 구현하고 상위 10% 결제자를 집중 관리했습니다.',
        result: '타겟 고객 관리와 퍼널 보수를 통해 23년 최고 결제액 달성 및 사업팀 KPI 목표 초과 달성.',
        description: [
          "2023년 중고나라 페이 결제액 상승 목표 달성을 위해 목적 조직인 결제제휴사업팀이 신설되었습니다. 저는 데이터 분석 및 보고, 운영 업무를 담당하며 퍼널 분석, 상위 결제자 관리 등을 주도했습니다.",
          "SQL을 활용해 결제 퍼널을 분석한 결과 강한 이탈이 '채팅 구간'에서 발생함을 발견했고, 특히 앱 내 카페 연동 상품과 관련해 판매자와의 상호작용 병목이 발생함을 찾았습니다. 이에 '카페 채팅 앱 유도' 기능을 구현해 이탈을 방지했습니다.",
          "또한 중고거래 횟수와 가격이 큰 주요 상위 300명을 뽑아 빠른 CS와 리워드 혜택을 제공하여 해당 군의 앱 내 결제액을 20% 상승시켰습니다.",
          "최종적으로 거래 수수료 감면 이벤트 효율을 입증하는 분석을 병행하여, 결제가 가장 저조한 시간대를 타겟으로 이탈 유저까지 복귀시켰고, 페이 결제액 2.4배 성장 및 부서 KPI를 성공적으로 견인했습니다."
        ]
      }
    },
    {
      title: '중고나라 카페-앱 연동',
      period: '22.03.15 ~ 22.12.31',
      company: '중고나라',
      summary: [
        '회원 수 1.6배 증가, 상품 등록 수 2배 증가',
        '1,900만 카페 회원 대비 앱 활성화 (MAU 증대)',
        '효율적인 유도 프로세스와 상품등록을 게임화한 이벤트 연계'
      ],
      details: {
        problem: '중고나라 앱 활성화 및 MAU 증대를 위해 상품 등록 수 증가 모멘텀이 극도로 필요하였습니다.',
        action: '회원이 1900만명을 가진 카페에서 앱으로 가장 효율적 유입이 가능함을 판단, LTV 분석 후 리워드를 통한 유기적 연동 및 자동화 구축.',
        result: '연동 회원의 활동 지표가 일반 유저 대비 약 20% 더 높게 발생하며 회원수가 약 1.6배 지속 상승했습니다.',
        description: [
          "1900만 회원을 보유한 중고나라 네이버 카페를 효율적으로 활용하여 카페-앱 연동 모듈을 기획했습니다.",
          "기존 비효율적 수기 시스템을 구글폼 기반으로 재설계하며, 이후 연동 신청 시스템화를 통해 모객에 나섰습니다.",
          "회원가입/연동의 문턱을 넘도록 앱 전체 LTV보다 저렴하면서 높은 반응성을 띤 '스타벅스 기프티콘 체험'으로 전환률을 유도하였고, 이들의 거래 잔존률이 기존 회원보다 20% 높은 것을 검증했습니다.",
          "이후 가입된 유저가 쉽게 이탈하지 않도록 '상품 등록 시 혜택을 주는 게임화(마일리지 구간 적립)' 이벤트 등을 엮어 성과를 부스팅했습니다. 해당 이벤트를 기점으로 일 평균 상품 수가 2배인 평일 1만 개 단위를 돌파하며, 서비스 운영 효율화 및 사업 성장 가설을 확실히 입증할 수 있었습니다."
        ]
      }
    }
  ];

  const openModal = (proj) => {
    setSelectedProj(proj);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProj(null);
    }, 300); // fade out 애니메이션 고려한 딜레이
  };

  // 모달이 열려 있을 때 body의 스크롤을 막아주는 효과
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

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

        {/* 3열 카드 리스트 */}
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-summary-card" onClick={() => openModal(proj)}>
              <div className="card-top">
                <span className="project-period">{proj.period}</span>
                <span className="badge-company">{proj.company}</span>
              </div>
              <h3 className="card-title">{proj.title}</h3>
              
              <ul className="card-summary-list">
                {proj.summary.map((sumText, i) => (
                  <li key={i} className="card-summary-item">{sumText}</li>
                ))}
              </ul>

              <div className="card-action">
                <span>자세히 보기</span>
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 디테일 모달 창 */}
      {isModalOpen && selectedProj && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-meta">
                <span className="badge-company large">{selectedProj.company}</span>
                <span className="modal-period">{selectedProj.period}</span>
              </div>
              <h2 className="modal-title">{selectedProj.title}</h2>
            </div>

            <div className="modal-content-layout">
              {/* 왼쪽 영역: 문제 정의 및 실행 결과 */}
              <div className="modal-left-column">
                <h3 className="column-section-title">문제 정의 및 실행 결과</h3>
                
                <div className="modal-detail-box problem">
                  <div className="box-title">
                    <HelpCircle size={18} />
                    <span>문제 (Problem)</span>
                  </div>
                  <p className="box-text">{selectedProj.details.problem}</p>
                </div>

                <div className="modal-detail-box action">
                  <div className="box-title">
                    <Play size={18} />
                    <span>실행 (Action)</span>
                  </div>
                  <p className="box-text">{selectedProj.details.action}</p>
                </div>

                <div className="modal-detail-box result">
                  <div className="box-title">
                    <CheckCircle size={18} />
                    <span>결과 (Result)</span>
                  </div>
                  <p className="box-text">{selectedProj.details.result}</p>
                </div>
              </div>

              {/* 오른쪽 영역: 상세 설명 */}
              <div className="modal-right-column">
                <h3 className="column-section-title">상세 내용</h3>
                <div className="modal-description-box">
                  {selectedProj.details.description.map((descPara, i) => (
                    <p key={i} className="desc-paragraph">{descPara}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
