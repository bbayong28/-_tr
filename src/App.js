import React from 'react';
import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Sub05 from './pages/Sub05';
//import Board from './pages/Board';
import Footer from './pages/Footer';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './css/basic.scss';



const App = () => {
  const MAINSLIDRE = [
    { id: 0, tit: "은행소개", con: "부산 아파트입주청소 부산 양산 김해 기장 아파트입주청소 이사청소 오피스텔청소 상가청소 전문업체", des: "보양지 제거, 공사먼지 제거, 오염 제거, \n시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub01" },
    { id: 1, tit: "IR투자정보", con: "신축 아파트나 빌라 등 입주 전 상태에서의 실내 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, \n시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub02" },
    { id: 2, tit: "상품안내", con: "오랫동안 누적된 공간의 묵은 때, 찌든 때, ", des: "신축 건물은 공사기간 중 쌓인 미세먼지/유해성분들이 곳곳에 산재해 있습니다. 입추청소를 맡기시면 유해성분 제거하고 청결한 환경을 만드실 수 있습니다.", link: "/sub03" },
    { id: 3, tit: "고객센터", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub04" },
    { id: 4, tit: "공인인증서 센터", con: "쾌적한 업무 환경을 만들고, 능률적인 업무를 수행하기 위해 반드시 필요한 청소", des: "보양지 제거, 공사먼지 제거, 오염 제거, 시멘트가루 제거 등 구석구석 세밀하게 청소하는 서비스로 가족의 건강을 위해서 입주 전에 꼭 해야 하는 서비스입니다.", link: "/sub05" }
  ]


  const COMPANY = {
    name :"(주)카카오뱅크 윤호영", 
    number:"375-88-00197",
    tel:"1599-333(해외 +82-2-6420-333)",
    copy :"KakaoBank Corp. All rights reserved.",
  }

  const TOPBG = [
    {id:1, tit:"일상에서 더 쉽게, 더 자주 이용하는 나만의 은행", des:"카카오뱅크는 사람과 은행의 만남이 더 쉽게, 더 자주 일어나야 한다고 믿습니다.\n사용자 중심의 혁신적인 기술을 통해 일상 속 어떤 순간에서도 유용한 나만의 은행.\n카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작' 입니다.", src:"/assets/images/sub01_01.png"},
    {id:2, tit:"카카오뱅크 가치 창출 및 지속가능발전목표 이행", des:"카카오뱅크는 UN 지속가능발전목표(Sustainable Development Goals, SDGs)를 지지하며\n경영활동을 통해 창출되는 가치를 통해 목표 이행에 동참하고 있습니다. ", src:"/assets/images/sub01_02.png"},
    {id:3, tit:"언제든지 이용할 수 있는 뱅크", des:"영업점에 방문없이 계좌개설, 대출신청, 해외송금, 증명서 발급까지\n언제든 필요한 은행 업무를 카카오뱅크 모바일앱을 통해 이용해보세요.", src:"/assets/images/sub01_03.png"},
    {id:4, tit:"무엇을 도와드릴까요?", des:"고객님의 금융관련 상담 및 문의사항에 대한\n해결을 위해 최선을 다하겠습니다.", src:"/assets/images/sub01_04.png"}
]
  
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main content={MAINSLIDRE} />} />
        <Route path='/sub01' element={<Sub01 content={TOPBG} />} />
        <Route path='/sub02' element={<Sub02 content={TOPBG} />} />
        <Route path='/sub03' element={<Sub03 content={TOPBG} />} />
        <Route path='/sub04' element={<Sub04 content={TOPBG} />} />
        <Route path='/sub05' element={<Sub05 content={TOPBG} />} />
        <Route path='/TopBg' element={<Sub05 content={TOPBG} />} />
        {/* <Route path='/board' element={<Board content={MAINSLIDRE} />} /> */}
        {/* <Route path='/detail/:id' element={<Detail user={user} />} /> */}
      </Routes>
      <Footer content={COMPANY} />
    </Wrapper>
  )
}

export default App;