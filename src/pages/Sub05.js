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
                <p>01</p>
                <p>로그인</p>
              </figure>              
            </div>
            <FiChevronRight />
            <div className="middle">
              <figure className="intxt">
                <p>02</p>
                <p>공동인증서 인증</p>
              </figure>              
            </div>          
            <FiChevronRight />    
            <div className="right">     
              <figure className="intxt">
                <p>03</p>
                <p>서류제출 완료</p>
              </figure>       
            </div>    
          </div> 
          <h4>로그인을 진행해주세요.</h4>
          <a className='login' href='#!'>로그인</a>
        </div>
      </div>
    </section>
  )
}

export default Sub05