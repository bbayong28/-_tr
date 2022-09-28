import React from 'react'
import '../css/Subpage.scss'

const Sub04 = ({content}) => {  
  return (    
    <section className="Sub04">  
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_04.png'} alt="" />
        <div className="txt">
          <strong>무엇을 도와드릴까요?</strong>
          <p>고객님의 금융관련 상담 및 문의사항에 대한</p>
          <p>해결을 위해 최선을 다하겠습니다.</p>
        </div>
      </div>  
      {/* <div className="top_bg">
        {
          content.map((content, idx) => {
            return (
              <div key={it.id}>
                <img src={process.env.PUBLIC_URL + content[num].src} alt='' />
                <div className="txt">
                  <div>{content.tit}</div>
                  <div>{content.des}</div>
                </div>
              </div>  
            )
          })
        }


      </div> */}
      <div className="container">        
          <h2>고객센터</h2>
        <div className="inner">
          
        </div>
      </div>

      
    </section>
  )
}
export default Sub04