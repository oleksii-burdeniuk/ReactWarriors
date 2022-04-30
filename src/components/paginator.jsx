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
        let leftPortionSize = this.props.page - 4;
        let rightPortionSize = this.props.page + 4;
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
            this.setState({
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

            {this.state.pages.filter(p => p >= this.state.leftPortion && p <= this.state.rightPortion)
                .map((p) => {
                    return <span onClick={() => { this.props.switchPage(p) }} className={cn({ 'selected': p === this.props.page })}>{p}</span>
                })
            }


            {/* <p> {this.props.page}</p> */}



            <div className={cn({ 'changePageBtn': this.props.page < 500 })}>
                <button type="button" onClick={this.next} className={'activeChangePageBtn'} >next page </button>
            </div>
        </div >
    }
};
export default Paginator;
