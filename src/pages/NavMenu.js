import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: "은행소개", link: "/sub01" },
    { content: "IR투자정보", link: "/sub02" },
    { content: "상품안내", link: "/sub03" },
    { content: "고객센터", link: "/sub04" },
    { content: "공인인증서 센터", link: "/sub05" },
]
const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu