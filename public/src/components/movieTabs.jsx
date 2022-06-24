import React from "react";
import '../App.css';
class MovieTabs extends React.Component {
    getClassLink = (value) => {
        return this.props.sort_by === value ? 'active' : ''
    }
    handleSortBy = (value) => {
        return () => { this.props.updateSortBy(value) }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.sort_by !== this.props.sort_by ? true : false
    }
    render() {
        return <div className='sortBy'>
            <button onClick={this.handleSortBy('popularity.desc')} className={this.getClassLink('popularity.desc')}> popularity desc</button >
            <button onClick={this.handleSortBy('primary_release_date.desc')} className={this.getClassLink('primary_release_date.desc')} >primary_release_date desc</button>
            <button onClick={this.handleSortBy('revenue.desc')} className={this.getClassLink('revenue.desc')} >revenue desc</button>
        </div >
    }
}
export default MovieTabs