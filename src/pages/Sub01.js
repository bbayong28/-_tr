import React from 'react'
import '../css/Sub.scss'


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