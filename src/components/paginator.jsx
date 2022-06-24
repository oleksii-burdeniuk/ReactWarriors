import React from "react";
import '../App.css';
import cn from 'classnames'
class Paginator extends React.Component {
    constructor() {
        super()
        this.state = {
            pagesCount: 500,
            leftPortion: 0,
            rightPortion: 2,
            pages: []

        }
    }
    componentDidMount() {
        let pages = []
        let leftPortionSize = this.props.page;
        let rightPortionSize = this.props.page + 7;
        for (let i = 1; i <= this.state.pagesCount; i++) {
            pages.push(i)
        }
        this.setState({
            leftPortion: leftPortionSize,
            rightPortion: rightPortionSize,
            pages: pages
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.page !== prevProps.page) {
            if (this.props.page === 1) {
                this.setState({
                    leftPortion: this.props.page,
                    rightPortion: this.props.page + 7,
                })
            }
            else if (this.props.page === 2) {
                this.setState({
                    leftPortion: this.props.page - 1,
                    rightPortion: this.props.page + 6,
                })
            }
            else if (this.props.page === 3) {
                this.setState({
                    leftPortion: this.props.page - 2,
                    rightPortion: this.props.page + 5,
                })
            }
            else if (this.props.page === 4) {
                this.setState({
                    leftPortion: this.props.page - 3,
                    rightPortion: this.props.page + 4,
                })
            }

            else this.setState({
                leftPortion: this.props.page - 4,
                rightPortion: this.props.page + 4,
            })
        }
    }

    next = () => {
        if (this.props.page < this.state.pagesCount)
            this.props.switchPage(this.props.page + 1)
    }
    previous = () => {
        if (this.props.page > 1) {
            this.props.switchPage(this.props.page - 1)
        }

    }
    render() {
        return <div className='PageBtnCont'>
            <div className={cn({ 'changePageBtn': this.props.page > 1 })} >
                <button type="button" onClick={this.previous} className={'activeChangePageBtn'}> previous page </button >
            </div>
            <div className={'paginatorItemCont'}>
                {this.state.pages.filter(p => p >= this.state.leftPortion && p <= this.state.rightPortion)
                    .map((p) => {
                        return <button key={p} onClick={() => { this.props.switchPage(p) }} className={cn({ 'selected': p === this.props.page }, { 'notSelected': p !== this.props.page })}>{p}</button>
                    })
                }
            </div>
            <div className={cn({ 'changePageBtn': this.props.page < 500 })}>
                <button type="button" onClick={this.next} className={'activeChangePageBtn'} >next page </button>
            </div>
        </div >
    }
};
export default Paginator;
