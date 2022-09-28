import React from 'react'
import Article from './Article'
import Aside from './Aside'
import '../css/Subpage.scss'

const Sub02 = () => {
  return (
    <section className="Sub02">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_02.png'} alt="" />
        <div className="txt">
          <strong>카카오뱅크 가치 창출 및 지속가능발전목표 이행</strong>
          <p>카카오뱅크는 UN 지속가능발전목표(Sustainable Development Goals, SDGs)를 지지하며</p>
          <p>경영활동을 통해 창출되는 가치를 통해 목표 이행에 동참하고 있습니다.</p>
        </div>
      </div>
      <div className="container">
          <h2>IR투자정보</h2>
        <div className="inner">
          
        </div>
      </div>
    </section>
  )
}

export default Sub02