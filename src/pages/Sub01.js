import React from 'react'
import Article from './Article'
import Aside from './Aside'
import '../css/Sub01.scss'
const Menu = [
  {id:0, title:'브랜드', link:'/'},
  {id:1, title:'주주사소개', link:'/'},
  {id:2, title:'오시는길', link:'/'},
  {id:3, title:'제휴문의', link:'/'}
]
const Sub01 = () => {
  return (
    <section className="Sub01">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_01.png'} alt="" />
        <div className="txt">
          <strong>일상에서 더 쉽게, 더 자주 이용하는 나만의 은행</strong>
          <p>카카오뱅크는 사람과 은행의 만남이 더 쉽게, 더 자주 일어나야 한다고 믿습니다.</p>
          <p>사용자 중심의 혁신적인 기술을 통해 일상 속 어떤 순간에서도 유용한 나만의 은행.</p>
          <p>카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작' 입니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="inner">
          <img src={process.env.PUBLIC_URL + '/assets/images/history03.png'} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Sub01