import React from 'react'
import '../css/Sub.scss'
import App from './../App';
import { FiChevronDown, FiSearch } from "react-icons/fi";

const QA = [
  {id:1, kind:"입출금/예적금", ques:"홈화면에서 다른 금융계좌를 확인하려면 어떻게 해야 하나요?", ans:"질문에 대한 답"},
  {id:2, kind:"카드", ques:"카드 이용내역을 엑셀 파일로 받아볼 수 있나요?", ans:"질문에 대한 답"},
  {id:3, kind:"ATM", ques:"ATM을 이용하다 계좌 비밀번호 오류 횟수가 누적 5회가 되었는데 어떻게 해야 풀리나요?", ans:"질문에 대한 답"},
  {id:4, kind:"인증/보안", ques:"기기변경 또는 앱 재설치를 하면 간편인증서를 재발급 받아야 하나요?", ans:"질문에 대한 답"},
  {id:5, kind:"앱이용", ques:"mini 고객도 저금통/카드실적 위젯을 사용할 수 있나요?", ans:"질문에 대한 답"},
  {id:6, kind:"오픈뱅킹", ques:"오픈뱅킹을 해지하고 싶은데 어디서 해지해야 하나요?", ans:"질문에 대한 답"}
]

const Sub04 = ({ content }) => {  
  const num = 3
  return (    
    <section className="Sub04">  
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL +  content[num].src } alt="" />
        <div className="txt">
          <strong>{ content[num].tit}</strong>
          <p>{ content[num].des }</p>
        </div>
      </div>  

      <div className="container">        
        <h2>고객센터</h2>
        <p className='what'>무엇을 도와드릴까요?</p>        
        <div className="search_bar">
          <input type='text'/><FiSearch />
        </div>
        
        <div className="inner" >
          <h3>자주묻는 질문</h3>
          <div className='qbox'>            
            
            {
              QA.map((it, idx) => {            
                return (
                  <div className='list'>
                    <div className='question'>
                      <a href='#!'>
                        <span>{it.kind}</span>
                        <p>{it.ques}</p>                  
                        <FiChevronDown/>      
                      </a>
                    </div>              
                    <div className='answer'>{it.ans}</div>
                  </div>
                )
              })
            }
            </div>         
        </div>
      </div>      
    </section>
  )
}
export default Sub04

