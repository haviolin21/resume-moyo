import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      institution: '상명대학교 (천안)',
      degree: '학사 / 금융경영학과',
      period: '2010.03 ~ 2016.08'
    }
  ];

  const courses = [
    {
      title: 'Software Engineering Course',
      provider: '코드스테이츠 (Code States)',
      period: '2020.12 ~ 2021.04 (5개월)',
      description: 'JavaScript 기반의 풀스택 웹 애플리케이션 엔지니어링 교육',
      bullets: [
        'React, Node.js, MySQL 기반 웹 서비스 아키텍처 및 개발 프로세스 구축 경험',
        '관계형 데이터베이스(RDB) Schema 설계 및 데이터 모델링 역량 습득',
        'Git 버저닝 시스템을 통한 다자간 원격 협업 프로젝트 수행',
        '운영 자동화 코딩 및 IT 서비스 구조에 대한 포괄적 기술 이해력 확보'
      ]
    },
    {
      title: '빅데이터 분석 과정',
      provider: '코드잇 (Codeit)',
      period: '2025.02 ~ 2025.03 (1개월)',
      description: 'Python 기반 데이터 추출, 정제 및 탐색적 데이터 분석(EDA) 실습',
      bullets: [
        'Pandas, NumPy 라이브러리를 활용한 대용량 데이터 전처리 및 분석',
        '시각화 라이브러리를 통한 비즈니스 대시보드 리포팅 설계',
        '데이터 기반 가설 설정 및 지표 분석을 통한 구조적 문제 해결 프로세스 학습'
      ]
    }
  ];

  return (
    <section id="education" className="education-section section-padding fade-in-section">
      <div className="container">
        <div className="education-header">
          <span className="section-subtitle">EDUCATION & TRAINING</span>
          <h2 className="title-medium">학력 및 교육</h2>
        </div>

        <div className="education-grid">
          {/* 학력 섹션 */}
          <div className="education-column">
            <h3 className="column-title">
              <GraduationCap size={20} />
              <span>학력</span>
            </h3>
            <div className="education-cards-list">
              {educations.map((edu, idx) => (
                <div key={idx} className="edu-card card">
                  <span className="edu-period">{edu.period}</span>
                  <h4 className="edu-title">{edu.institution}</h4>
                  <p className="edu-desc">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 교육/수료 섹션 */}
          <div className="education-column">
            <h3 className="column-title">
              <BookOpen size={20} />
              <span>교육 수료</span>
            </h3>
            <div className="education-cards-list">
              {courses.map((course, idx) => (
                <div key={idx} className="course-card card">
                  <div className="course-card-header">
                    <span className="course-period">{course.period}</span>
                    <span className="badge badge-primary">{course.provider}</span>
                  </div>
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-desc">{course.description}</p>
                  <ul className="course-bullet-list">
                    {course.bullets.map((bullet, i) => (
                      <li key={i} className="course-bullet-item">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
