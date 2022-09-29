import React from 'react'
import '../css/Sub.scss'


const MONEY = [
  { id:1, tit:"입출금통장", des:"까다로운 계좌개설도 정말 손쉽게",url:"/assets/images/money01.png"},
  { id:2, tit:"모임통장", des:"여럿이 함께 쓰고 같이 보는 모임통장",url:"/assets/images/money02.png"},
  { id:3, tit:"세이프 박스", des:"여유 자금을 따로 보관하는 계좌 속 금고",url:"/assets/images/money03.png"},
  { id:4, tit:"저금통", des:"조금씩 매일매일 쌓이는 저금통",url:"/assets/images/money04.png"},
  { id:5, tit:"정기예금", des:"실시간 이자로 돈 모으는 재미가 쏠쏠",url:"/assets/images/money05.png"},
  { id: 6, tit: "26주 적금", des: "캐릭터와 함께  즐거운 26주간의 도전", url: "/assets/images/money06.png" },
  { id:7, tit:"자유적금", des:"매일, 매주, 매월 자유롭게",url:"/assets/images/money01.png"},
]

const BORROW = [  
  { id:1, tit:"비상금대출", des:"유용하게 쓸 수 있는 모바일 비상금",url:"/assets/images/borrow01"},
  { id:2, tit:"마이너스 통장대출", des:"금리도 한도도 우대받는",url:"/assets/images/borrow02"},
  { id:3, tit:"신용대출", des:"목돈이 필요한 순간  쉽고 빠른 신용대출",url:"/assets/images/borrow03"},
  { id:4, tit:"개인사업자 대출", des:"바쁜 사업자를 위한 제1금융권 신용대출",url:"/assets/images/borrow04"},
  { id:5, tit:"전월세보증금 대출", des:"전월세 보증금도 모바일로 간편하게",url:"/assets/images/borrow05"},
  { id:6, tit:"주택담보대출", des:"챗봇과 함께 쉽고 편리하게",url:"/assets/images/borrow06"}
]

const MINI = [  
  { id:1, tit:"카카오mini", des:"까다로운 계좌개설도 정말 손쉽게",url:"/assets/images/borrow01"},
  { id:2, tit:"mini 카드", des:"까다로운 계좌개설도 정말 손쉽게",url:"/assets/images/borrow02"},
  { id:3, tit:"mini 26일 적금", des:"까다로운 계좌개설도 정말 손쉽게",url:"/assets/images/borrow03"}
]
const Sub03 = ({content}) => {
  const num = 2
  return (
    <section className="Sub03">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL +  content[num].src } alt="" />
        <div className="txt">
          <strong>{ content[num].tit}</strong>
          <p>{ content[num].des }</p>
        </div>
      </div>
      <div className="container">        
          <h2>상품안내</h2>
        <div className="inner">    
          <div className='first'>                  
            <h3>예적금</h3>
            <div className='outer'>
              {
                MONEY.map((it, idx) => {
                  return(
                    <a href='#!' key={it.id} className="box">                    
                      <div className="txt">
                        <p>{it.tit}</p>
                        <span>{it.des}</span>
                      </div>             
                    </a>
                
                  )
                })
              }
            </div>
            
          </div>
          
          <div className='second'>            
            <h3>대출</h3>            
            <div className='outer'>
              {
                BORROW.map((it, idx) => {
                  return(
                    <a href='#!' key={it.id} className="box">
                      <div className="txt">
                        <p>{it.tit}</p>
                        <span>{it.des}</span>
                      </div>             
                    </a>                
                  )
                })
              }
            </div>
            
          </div>
          
          <div className='third'>
            <h3>mini</h3>
            
            <div className='outer'>
              {
                MINI.map((it, idx) => {
                  return(
                    <a href='#!' key={it.id} className="box">
                      <div className="txt">
                        <p>{it.tit}</p>
                        <span>{it.des}</span>
                      </div>             
                    </a>              
                  )
                })
              }
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sub03