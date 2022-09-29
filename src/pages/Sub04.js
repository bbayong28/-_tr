import React from 'react'
import '../css/Sub04.scss'
import App from './../App';
import { FiChevronDown } from "react-icons/fi";

const Sub04 = ({ content }) => {  
  const num = 3
 /*  const [display, setDisplay] = useState(false);
  const clickHandler = () => { 
    setDisplay(!display);
  } */
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
        <div className="inner" >
          <h3>자주묻는 질문</h3>
          <div className='qbox'>
            <div className='list'>
              <div className='question'>
                <a href="#!">
                  <span>입출금/예적금</span>
                  <p>홈화면에서 다른 금융계좌를 확인하려면 어떻게 해야 하나요?</p> 
                  <FiChevronDown/>             
                </a>
              </div>              
              <div className='answer'>답적힌 창</div>
            </div>

            <div className='list'>
              <div className='question'>                
                <a href="#!">
                  <span>카드</span>
                  <p>카드 이용내역을 엑셀 파일로 받아볼 수 있나요?</p>
                  <FiChevronDown/>
                </a>
              </div>
              <div className='answer'>답적힌 창</div>
            </div>

            <div className='list'>
              <div className='question'>
                <a href="#!">
                  <span>ATM</span>
                  <p>ATM을 이용하다 계좌 비밀번호 오류 횟수가 누적 5회가 되었는데 어떻게 해야 풀리나요?</p>
                  <FiChevronDown/>
                </a>
              </div>              
              <div className='answer'>답적힌 창</div>
            </div>
            
            <div className='list'>
              <div className='question'>
                <a href="#!">
                  <span>인증/보안</span>
                  <p>기기변경 또는 앱 재설치를 하면 간편인증서를 재발급 받아야 하나요?</p>
                  <FiChevronDown/>
                </a>
              </div>              
              <div className='answer'>답적힌 창</div>
            </div>
            
            <div className='list'>
              <div className='question'>
                <a href="#!">
                  <span>앱이용</span>
                  <p>mini 고객도 저금통/카드실적 위젯을 사용할 수 있나요?</p>
                  <FiChevronDown/>
                </a>
              </div>              
              <div className='answer'>답적힌 창</div>
            </div>
            
            <div className='list'>
              <div className='question'>
                <a href="#!">
                  <span>오픈뱅킹</span>
                  <p>오픈뱅킹을 해지하고 싶은데 어디서 해지해야 하나요?</p>
                  <FiChevronDown/>
                </a>
              </div>             
              <div className='answer'>답적힌 창</div>
              </div>
          </div>
          
        </div>
      </div>      
    </section>
  )
}
export default Sub04

