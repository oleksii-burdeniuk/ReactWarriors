import React, { useEffect, useState } from "react";
import s from './headerComponent.module.css'
import cn from 'classnames'

const Header = (props) => {
    let [moviesVisibility, setMoviesVisibilityt] = useState(false);
    let [tvShowVisibility, setTvShowVisibility] = useState(false);
    let [peopleVisibility, setPeopleVisibility] = useState(false);
    let [moreleVisibility, setMoreVisibility] = useState(false);
    useEffect(() => {

    }, [])

    const setMovieInfoVis = (I) => {
        setMoviesVisibilityt(I)
    }
    const setTvShowInfoVis = (I) => {
        setTvShowVisibility(I)
    }
    const setPeopleInfoVis = (I) => {
        setPeopleVisibility(I)
    }
    const setMoreInfoVis = (I) => {
        setMoreVisibility(I)
    }

    return <div className={s.header}>
        <div className={s.content}>
            <div className={s.sub_media}>
                <div className={s.naw_wrapper}>
                    <a href="https://www.linkedin.com/in/oleksii-burdeniuk-9b1b6a22b" className={s.logo} >Made by Oleksii</a>
                    <ul className={s.dropdown_menu}>
                        <li onMouseLeave={(event) => { setMovieInfoVis(false) }} onMouseOver={(event) => { setMovieInfoVis(true) }} className={s.k_item}>
                            <a onClick={() => { props.setWhatToWath('movie') }} href="#" className={s.k_link}>
                                <span>Movies</span></a>
                            <div className={cn([s.k_animation_container], { [s.movies]: moviesVisibility })}>
                                <ul>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('popular') }} className={s.k_menu_link} href="#">Popular</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('now_playing') }} className={s.k_menu_link} href="#">Now Playing</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('upcoming') }} className={s.k_menu_link} href="#">Upcoming</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('top_rated') }} className={s.k_menu_link} href="#">Top Rated</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onMouseLeave={(event) => { setTvShowInfoVis(false) }} onMouseOver={(event) => { setTvShowInfoVis(true) }} className={s.k_item}>
                            <a onClick={() => { props.setWhatToWath('tv') }} href="#" className={cn([s.k_link])}>
                                <span>TV Shows</span></a>
                            <div className={cn([s.k_animation_container], { [s.tv_shows]: tvShowVisibility })}>
                                <ul>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('popular') }} className={s.k_menu_link} href="#">Popular</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('airing_today') }} className={s.k_menu_link} href="#">Airing Today</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('on_the_air') }} className={s.k_menu_link} href="#">On TV</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a onClick={() => { props.updateSortBy('top_rated') }} className={s.k_menu_link} href="#">Top Rated</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onMouseLeave={(event) => { setPeopleInfoVis(false) }} onMouseOver={(event) => { setPeopleInfoVis(true) }} className={s.k_item}>
                            <a href="#" className={s.k_link}>
                                <span>People</span></a>
                            <div className={cn([s.k_animation_container], { [s.people]: peopleVisibility })}>
                                <ul>
                                    <li className={s.k_menu_item}>
                                        <a className={s.k_menu_link} href="#">Popular People</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li onMouseLeave={(event) => { setMoreInfoVis(false) }} onMouseOver={(event) => { setMoreInfoVis(true) }} className={s.k_item}>
                            <a href="#" className={s.k_link}>
                                <span>More</span></a>
                            <div className={cn([s.k_animation_container], { [s.more]: moreleVisibility })}>
                                <ul>
                                    <li className={s.k_menu_item}>
                                        <a className={s.k_menu_link} href="#">Discussions</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a className={s.k_menu_link} href="#">Leaderboard </a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a className={s.k_menu_link} href="#">Support</a>
                                    </li>
                                    <li className={s.k_menu_item}>
                                        <a className={s.k_menu_link} href="#">Api</a>
                                    </li>
                                </ul>
                            </div>
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
    </div >
}
export default Header