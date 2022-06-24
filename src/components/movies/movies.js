import React, { useEffect, useState } from "react";
import Paginator from "../paginator";
import MovieItem from "./movieItem/movieItem";
import s from './movies.module.css'
import cn from 'classnames'
import PaginatorFunctional from "./paginator/paginatorFunctional";
const Movies = (props) => {
    let [sortInfo, hideSortInfo] = useState(true);

    const switchSortInfo = (I) => {
        hideSortInfo(!sortInfo)
    }
    return (
        <section className={s.inner_container}>
            <div className={s.media}>
                <div className={s.column_wrapper}>
                    <div className={s.content_wrapper}>

                        <div className={s.title}>
                            <h2>{props.whatIsShowing}</h2>
                        </div>

                        <div className={s.content}>
                            <div>
                                <div className={cn([s.filter_panel], [s.card], { [s.closed]: sortInfo })}>
                                    <div className={s.name}>
                                        <h2>Sort</h2>
                                        <span onClick={() => { switchSortInfo(sortInfo) }} className={cn([s.glyphicons_v2], [s.chevron_right])}></span>
                                    </div>
                                    <div className={cn([s.filter])}>
                                        <h3>Sort Results By</h3>
                                        <span className={cn([s.k_widget], [s.k_dropdown], [s.kendo_dropdown], [s.full_width], [s.font_size_1], [s.k_state_border_down])}>
                                            <span className={cn([s.k_dropdown_wrap], [s.k_state_default], [s.k_state_focused], [s.k_state_hover], [s.k_state_active], [s.k_state_border_down])}>
                                                <span className={cn([s.k_input])}>Popularity Descending</span>
                                                <span className={cn([s.k_select])}>
                                                    <span className={cn([s.k_icon], [s.k_i_arrow_60_down])}>::before</span>
                                                </span>
                                            </span>
                                            <select className={cn([s.kendo_dropdown], [s.full_width], [s.font_size_1],)} data-role='dropdownlist'>
                                                <option value="popularity.desc" selected="selected">Popularity Descending</option>
                                                <option value="popularity.asc">Popularity Ascending</option>
                                                <option value="vote_average.desc">Rating Descending</option>
                                                <option value="vote_average.asc">Rating Ascending</option>
                                                <option value="primary_release_date.desc">Release Date Descending</option>
                                                <option value="primary_release_date.asc">Release Date Ascending</option>
                                                <option value="title.asc">Title (A-Z)</option>
                                                <option value="title.desc">Title (Z-A)</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className={s.filter_panel}>Filters</div>
                                <div className={s.filter_panel}>Where to watch</div>
                                <div className={s.apply}>
                                    <p > <a href="#">Search</a> </p>
                                </div>
                            </div>
                            <div>
                                <div className={s.white_column}>
                                    <section className={s.panel}>
                                        <div className={s.paginator}> <PaginatorFunctional switchPage={props.switchPage} page={props.page} /></div>
                                        <div className={s.media_items}>
                                            <div className={s.page_wrapper}>
                                                {props.movie.map((movie) => {
                                                    return (
                                                        <MovieItem key={movie.id} movie={movie} removeMovie={props.removeMovie}
                                                            addMovieToWillWatch={props.addMovieToWillWatch} removeMovieToWillWatch={props.removeMovieToWillWatch} />
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Movies;