import React, { useEffect, useState } from 'react'
import '../css/Sub.scss'
import { FiChevronDown, FiSearch } from "react-icons/fi";

const QA = [
  {id:1, kind:"입출금/예적금", ques:"홈화면에서 다른 금융계좌를 확인하려면 어떻게 해야 하나요?", ans:"오픈뱅킹에 등록한 다른 금융 계좌가 있는 경우 홈화면에서 조회 가능합니다.\n[홈 > 내계좌 > 다른금융 > 다른금융 계좌등록]을 통해 은행, 제2금융권, 증권사 등 다른 금융기관 계좌를 등록하고 추가할 수 있습니다."},
  {id:2, kind:"카드", ques:"카드 이용내역을 엑셀 파일로 받아볼 수 있나요?", ans:"카카오뱅크에서는 고객님이 요청하실 경우 카드 이용내역을 엑셀파일 형태로 제공하고 있습니다.\n[카카오뱅크 모바일앱 > 홈 > 카드이용내역 > 관리 > 카드 이용내역 다운로드] 메뉴에서 카드 이용내역을 이메일로 받아볼 수 있습니다."},
  {id:3, kind:"ATM", ques:"ATM을 이용하다 계좌 비밀번호 오류 횟수가 누적 5회가 되었는데 어떻게 해야 풀리나요?", ans:"비밀번호를 누적하여 5회 이상 오입력할 경우 사고 예방 차원에서 거래가 제한됩니다. \n[카카오뱅크 모바일앱 > MY탭 > 계좌  > 관리 > 계좌 비밀번호 재설정]에서 계좌 비밀번호를 재설정 할 수 있습니다. 재설정 시 영상통화 인증 절차가 포함됩니다."},
  {id:4, kind:"인증/보안", ques:"기기변경 또는 앱 재설치를 하면 간편인증서를 재발급 받아야 하나요?", ans:"기기변경 또는 앱 재설치 시에는 간편인증서를 재발급 받아야 합니다.\n※ 간편인증서는 앱 내 저장되기 때문에, 앱 삭제 시 함께 삭제됩니다."},
  {id:5, kind:"앱이용", ques:"mini 고객도 저금통/카드실적 위젯을 사용할 수 있나요?", ans:"아니요. 아이폰을 사용하고 계신 mini 고객은 현재 이체 위젯만 이용하실 수 있습니다.\nmini 고객은 저금통을 개설하거나 카카오뱅크 체크카드를 만드실 수 없기 때문에 저금통 위젯과 카드실적 위젯을 설치하더라도 서비스 연동이 불가합니다."},
  {id:6, kind:"오픈뱅킹", ques:"오픈뱅킹을 해지하고 싶은데 어디서 해지해야 하나요?", ans:"오픈뱅킹 서비스는 [내계좌 > 다른금융]에서 해지하실 수 있습니다."}
]





const Sub04 = ({ content }) => {
  const [open, setOpen] = useState(false);
  const [tnum, setTnum] = useState();
  //toggle accordion function
  // let toggleHandler = (e) => {
  //   //switch state
  //   setOpen(!open);

  useEffect(() => {
    setOpen(true);
   },[tnum]);
    const num = 3
    return (
      <section className="Sub04">
        <div className="top_bg">
          <img src={process.env.PUBLIC_URL + content[num].src} alt="" />
          <div className="txt">
            <strong>{content[num].tit}</strong>
            <p>{content[num].des}</p>
          </div>
        </div>

        <div className="container">
          <h2>고객센터</h2>
          <p className='what'>무엇을 도와드릴까요?</p>
          <div className="search_bar">
            <input type='text' /><FiSearch />
          </div>
        
          <div className="inner" >
            <h3>자주묻는 질문</h3>
            <div className='qbox'>
            
              {
                QA.map((it, idx) => {
                  return (
                    <div className={`list ${idx === tnum && open?"on":""}`} key={it.id}>
                      <div className='question'>
                        <a href='#!' onClick={(e) => {
                          setOpen(!open);
                          setTnum(idx);
                          e.preventDefault();
                          console.log(open)
                        }}>
                          <span>{it.kind}</span>
                          <p>{it.ques}</p>
                          <FiChevronDown />
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