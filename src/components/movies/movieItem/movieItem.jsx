import React from "react";
import '../../../App.css'
import cn from 'classnames'
import s from './movieItem.module.css'
let imagesBaseUrl = 'https://image.tmdb.org/t/p/w500/'
class MovieItem extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            like: false,
            willWatch: false
        }
    }
    taggleOverviev = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handleLike = () => {
        this.setState({
            like: !this.state.like
        })
    }
    handleWillWatch = () => {
        this.setState({
            willWatch: !this.state.willWatch
        })
    }
    render() {
        let image = this.props.movie.backdrop_path ? this.props.movie.backdrop_path : this.props.movie.poster_path
        let title = this.props.movie.original_title
        let vote_average = this.props.movie.vote_average
        let overviev = this.props.movie.overview
        return (
            <div className={s.card} key={this.props.movie.id}>
                <div className={s.image}>
                    <div className={s.wrapper}>
                        <a href="#" className={s.image}>
                            <img src={image ? imagesBaseUrl + image : '#'} alt={title} alt={title} />
                        </a>
                    </div>
                </div>
                <div className={s.content}>
                    <h2>
                        <a href="#"> {title}</a>
                    </h2>
                </div>
            </div>













            // <div className="itemContainer">
            //     <img src={image ? imagesBaseUrl + image : '#'} alt={title} ></img>
            //     <p> {title}</p>
            //     <p>{vote_average} </p>
            //     <div className='buttonBox'>
            //         <button type='button' onClick={this.taggleOverviev}>
            //             {this.state.show ? "hide" : "show"}
            //         </button>
            //         <button className={cn({ 'like': this.state.like })} type='button' onClick={this.handleLike} >Like</button>
            //         <button type='button' onClick={
            //             () => { this.props.removeMovie(this.props.movie) }
            //         } >delete movie</button>
            //         {this.state.willWatch ? <button className="willWatch" type='button' onClick={
            //             () => {
            //                 this.props.removeMovieToWillWatch(this.props.movie)
            //                 this.handleWillWatch()
            //             }
            //         } >don't watch</button> :
            //             <button type='button' onClick={
            //                 () => {
            //                     this.props.addMovieToWillWatch(this.props.movie)
            //                     this.handleWillWatch()
            //                 }
            //             } >will watch</button>}
            //     </div>
            //     {this.state.show ? <p>{overviev}</p> : ""}
            // </div >
        )
    }
}
export default MovieItem