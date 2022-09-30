import React from 'react'
import '../css/Sub.scss'
import { FiChevronRight } from "react-icons/fi";
import styled from 'styled-components';


/* const FiChevronRight = styled.i`
  font-size: 60px
  ` */


const Sub05 = ({ content }) => {
  const num = 4;
  return (
    <section className="Sub05">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL +  content[num].src } alt="" />
        <div className="txt">
          <strong>{ content[num].des}</strong>
          <p>{ content[num].tit }</p>
        </div>
      </div>
      <div className="container">    
        <div className="inner">              
          <h3>서류제출</h3>
          <div className="dumy">
            <div className="left">
              <figure className="intxt">
                <span>01</span>
                <p>로그인</p>
              </figure>              
            </div>
            <FiChevronRight style={{ fontSizd: '60px' }} />
            <div className="middle">
              <figure className="intxt">
                <span>02</span>
                <p>공동인증서 인증</p>
              </figure>              
            </div>          
            <FiChevronRight />    
            <div className="right">     
              <figure className="intxt">
                <span>03</span>
                <p>서류제출 완료</p>
              </figure>       
            </div>    
          </div> 
          <h4>로그인을 진행해주세요.</h4>
          <div className="log">
            <a className='login' href='#!'>로그인</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sub05