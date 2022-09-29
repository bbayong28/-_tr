import React from 'react'
import '../css/Sub.scss'
const Menu = [
  {id:0, title:'브랜드', link:'/'},
  {id:1, title:'주주사소개', link:'/'},
  {id:2, title:'오시는길', link:'/'},
  {id:3, title:'제휴문의', link:'/'}
]

const Sub01 = ({ content }) => {
  const num = 0;
  return (
    <section className="Sub01">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL +  content[num].src } alt="" />
        <div className="txt">
          <strong>{ content[num].tit}</strong>
          <p>{ content[num].des }</p>
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