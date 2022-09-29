import React from 'react'
import '../css/Sub02.scss'
import { FiDownload } from "react-icons/fi";

const GIST = [
  {id:1, tit:"주식매수선택권 부여", file:"다운로드",date:"2022.09.28"},
  {id:2, tit:"2022년 상반기 카카오뱅크 현황", file:"다운로드",date:"2022.08.31"},
  {id:3, tit:"2022년 1분기 카카오뱅크 현황", file:"다운로드",date:"2022.05.31"},
  {id:4, tit:"2021년 카카오뱅크 현황", file:"다운로드",date:"2022.03.31"},
  {id:5, tit:"2021년 3분기 카카오뱅크 현황", file:"다운로드",date:"2021.11.30"},
  {id:6, tit:"2021년 상반기 카카오뱅크 현황", file:"다운로드",date:"2021.08.31"},
  {id:7, tit:"[정정공시]유상증자 결정 공시", file:"다운로드",date:"2021.07.22"},
  {id:8, tit:"2021년 1분기 카카오뱅크 현황", file:"다운로드",date:"2021.06.28"},
  {id:9, tit:"2020년 카카오뱅크 현황", file:"다운로드",date:"2021.05.31"},
  {id:10, tit:"2020년 3분기 카카오뱅크 현황", file:"다운로드",date:"2020.11.30"},
  {id:11, tit:"신주발행 공고", file:"다운로드",date:"2020.11.17"},
  {id:12, tit:"유상증자 결정 공시", file:"다운로드",date:"2021.05.31"},
]

const Sub02 = ({ content }) => {
  const num =1
  return (
    <section className="Sub02">
      <div className="top_bg">
        <img src={process.env.PUBLIC_URL +  content[num].src } alt="" />
        <div className="txt">
          <strong>{ content[num].tit}</strong>
          <p>{ content[num].des }</p>
        </div>
      </div>
      <div className="container">
          <h2>IR투자정보</h2>
        <div className="inner">
          <div className='credit'>
            <h3>신용등급</h3>
            <table className='credit_rating'>
              <tr>
                <th>구분</th>
                <th>한국신용평가</th>
                <th>NICE신용평가</th>
                <th>한국기업평가</th>
              </tr>
              <tr>
                <td>(주)카카오뱅크</td>
                <td>AA+(안정적)</td>
                <td>AA+(안정적)</td>
                <td>AA+(안정적)</td>
              </tr>
            </table>
          </div>
          <div className='management'>
            <h3>경영공시</h3>
            <table className='Mdisclose'>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>첨부파일</th>
                  <th>등록일</th>
                </tr>
                  {
                GIST.map((it, idx) => {
                      return(
                        <tr key={it.id}>
                          <td>{it.id}</td>
                          <td><a href='#!'>{it.tit}</a></td>
                          <td><a href='#!'>{it.file} <FiDownload/></a></td>
                          <td>{it.date}</td>
                        </tr>
                      )
                    
                    })
                  }
              </table>
          </div>
          
          
          
        </div>
      </div>
    </section>
  )
}

export default Sub02