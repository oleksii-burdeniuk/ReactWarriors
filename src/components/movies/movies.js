import React from "react";
import MovieItem from "./movieItem/movieItem";
import s from './movies.module.css'
const Movies = (props) => {
    return (
        <section className={s.inner_container}>
            <div className={s.media}>
                <div className={s.column_wrapper}>
                    <div className={s.content_wrapper}>

                        <div className={s.title}>
                            <h2>Now Playing Movies</h2>
                        </div>

                        <div className={s.content}>
                            <div>
                                <div className={s.filter_panel}>Sort</div>
                                <div className={s.filter_panel}>Filters</div>
                                <div className={s.filter_panel}>Where to watch</div>
                                <div className={s.apply}>
                                    <p > <a href="#">Search</a> </p>
                                </div>
                            </div>
                            <div>
                                <div className={s.white_column}>
                                    <section className={s.panel}>
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