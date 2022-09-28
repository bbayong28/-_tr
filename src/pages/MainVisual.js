import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../css/Main.scss'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";



const ML = [
    {cont:"이미 모두의 은행\n지금은 카카오뱅크", des:"한 사람, 한 사람을 위해 시작한 은행이\n더 많은 사람들이 찾는 모두의 은행이 되었습니다.\n\n보내고, 받고, 모으고, 쓰는\n당신의 모든 일이 바뀌고 있습니다.", link:"/" },
    {cont:"함께 도전해서\n재미있는 26주적금", des:"26주동안 변화하는 재미에 빠져있는 사이\n어느덧 만기 달성 경험을 맛보게 됩니다.", link:"/" },
    {cont:"함께 쓰고 같이 보는\n모임통장", des:"카카오톡 친구를 바로 모임통장으로 초대하고\n친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.\n재미있는 메시지 카드로 회비 입금 요청도 해보세요.", link:"/" },
    {cont:"해외계좌송금과\n더 빠른해외송금을\n더 쉽고, 저렴하게", des:"해외계좌송금이 가능한 22개국을 포함하여\n전세계 200여개국으로\n더 빠른해외송금이 가능합니다.", link:"/" },
    {cont:"복잡한 서류 제출을 간편하게,\n내가 원하는 시간에", des:"이사 날짜가 주말이나 공휴일이어도\n전월세보증금 대출을 신청할 수 있습니다.", link:"/" },
]

const MainSlide = () => {
    
    const MainSlide = useRef(null);

    return (
        <div className='MainSlide'>
            <Slider
                arrows={false}
                autoplay={true}
                autoplaySpeed={4000}
                pauseOnHover={false}
                ref={MainSlide}
                dots={true}
            >
                {
                    ML.map((it, idx) => {
                        return (
                            <figure className={`itm itm0${idx + 1}`}>
                                <div className="inner">
                                    <strong>{it.cont}</strong>
                                    <p>{it.des}</p>
                                    <Link to={it.link}>자세히 보기</Link>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            <div className="arrow">
                <FiArrowLeft onClick={() => MainSlide.current.slickPrev()} className="icon left" />
                <FiArrowRight onClick={() => MainSlide.current.slickNext()} className="icon right" />
            </div>
        </div>

    )
}

export default MainSlide