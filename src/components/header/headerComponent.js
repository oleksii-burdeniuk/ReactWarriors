import React from "react";
import s from './headerComponent.module.css'

const Header = (props) => {
    return <div className={s.header}>
        <div className={s.content}>
            <div className={s.sub_media}>
                <div className={s.naw_wrapper}>
                    <a href="https://www.instagram.com/olekssiy/" className={s.logo} >Made by Oleksii</a>
                    <ul className={s.dropdown_menu}>
                        <li className={s.k_item}>
                            <a href="#" className={s.k_link}>Movies</a>
                            <span></span>
                            <div></div>
                        </li>
                        <li className={s.k_item}>
                            <a href="#" className={s.k_link}>TV Shows</a>
                            <span></span>
                            <div></div>
                        </li>
                        <li className={s.k_item}>
                            <a href="#" className={s.k_link}>People</a>
                            <span></span>
                            <div></div>
                        </li>
                        <li className={s.k_item}>
                            <a href="#" className={s.k_link}>More</a>
                            <span></span>
                            <div></div>
                        </li>
                    </ul>
                </div>
                <div className={s.flex}>
                    <ul className={s.primary}>
                        <li className={s.gliph}>
                            <a href="#">
                                <span className={s.glyph_icon}>+</span>
                            </a>
                        </li>
                        <li className={s.translate}>
                            <div>EN</div>
                        </li>
                        <li className={s.bell}></li>
                        <li className={s.user}></li>
                        <li className={s.search_button}></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
}
export default Header