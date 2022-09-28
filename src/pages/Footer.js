import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Footer.scss'

const ID = [
  { id: 1, tit:"모바일뱅킹 서비스 이용약관", link: "/" },
  { id: 2, tit:"전자금융거래 기본약관", link: "/" },
  { id: 3, tit:"위치기반 서비스 이용약관", link: "/" },
  { id: 4, tit:"개인정보처리방침", link: "/" },
  { id: 5, tit:"전자민원접수", link: "/" },
  { id: 6, tit:"보호금융 상품등록부", link: "/" },
  { id: 7, tit:"상품공시실", link: "/" },
  { id: 8, tit:"경영공시", link: "/" },
  { id: 9, tit: "공지사항", link: "/" },
]

  const Footer = ({ content }) => {
    return (
      <footer className='Footer'>
        <div className="inner">
          <ul className='ft_top'>
          {
            ID.map((it, idx) => { 
              return (
                <li key={it.id}>
                  <Link to={it.link}>{it.tit}</Link>
                </li>
              )
            } )
          }
        </ul>
        <ul className="ft__con">
          <li>{content.name}</li>
          <li>사업자등록번호 : {content.number}</li>
          <li>대표전화 : {content.tel}</li>
        </ul>
        <span>
          &copy; {content.copy}
        </span>

        </div>

        
      </footer>
  )
}

export default Footer