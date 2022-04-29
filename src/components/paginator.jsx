import React from "react";
import '../App.css';
import cn from 'classnames'
class Paginator extends React.Component {
    constructor() {
        super()
        let pages = []
        for (let i = 1; i <= 10; i++) {
            pages.push(i)
        }
        this.state = {
            pagesCount: 500,
            portionSize: 9,
            pages: pages,

        }
    }
    next = () => {
        let nextPage;
        if (this.props.page < this.state.pagesCount) {
            nextPage = this.props.page + 1
        }
        else { nextPage = this.props.page }
        this.props.switchPage(nextPage)
    }
    previous = () => {
        let previousPage
        if (this.props.page > 1) {
            previousPage = this.props.page - 1
        }
        else { previousPage = this.props.page }
        this.props.switchPage(previousPage)
    }
    changePage = (page) => {
        this.props.switchPage(page)
    }
    render() {
        return <div className='PageBtnCont'>
            <div className={cn({ changePageBtn: this.props.page > 1 })} > <button type="button" onClick={this.previous} className={'activeChangePageBtn'}> previous page </button ></div>
            <div> {this.state.pages.map(p => {
                return (
                    <span className={cn({ 'selected': p === this.props.page })} kay={p} onClick={(e) => {
                        this.changePage(p)
                    }}>
                        {p}
                    </span>
                )
            })}
            </div>
            <div className={cn({ changePageBtn: this.props.page < 500 })}> <button type="button" onClick={this.next} className={'activeChangePageBtn'} >next page </button></div>
        </div >
    }
};
export default Paginator;
