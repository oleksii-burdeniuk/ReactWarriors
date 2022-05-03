import React, { useEffect, useState } from "react";
import '../App.css';
import cn from 'classnames'
const PaginatorFunctional = (props) => {
    let [pagesCount, setPagesCount] = useState(500);
    let [leftPortion, setLeftPortion] = useState(props.page);
    let [rightPortion, setRightPortion] = useState(props.page + 7);
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    let [pages, setPages] = useState(page)

    useEffect(() => {
        if (props.page === 1) {
            setLeftPortion(props.page);
            setRightPortion(props.page + 7);
        }
        else if (props.page === 2) {
            setLeftPortion(props.page - 1);
            setRightPortion(props.page + 6);
        }
        else if (props.page === 3) {
            setLeftPortion(props.page - 2);
            setRightPortion(props.page + 5);
        }
        else if (props.page === 4) {
            setLeftPortion(props.page - 3);
            setRightPortion(props.page + 4);
        }

        else {
            setLeftPortion(props.page - 4);
            setRightPortion(props.page + 4);
        }
    }, [props.page])

    let next = () => {
        if (props.page < pagesCount)
            props.switchPage(props.page + 1)
    }
    let previous = () => {
        if (props.page > 1) {
            props.switchPage(props.page - 1)
        }

    }
    return <div className='PageBtnCont'>
        <div className={cn({ 'changePageBtn': props.page > 1 })} >
            <button type="button" onClick={previous} className={'activeChangePageBtn'}> previous page </button >
        </div>
        <div className={'paginatorItemCont'}>
            {pages.filter(p => p >= leftPortion && p <= rightPortion)
                .map((p) => {
                    return <button key={p} onClick={() => { props.switchPage(p) }} className={cn({ 'selected': p === props.page }, { 'notSelected': p !== props.page })}>{p}</button>
                })
            }
        </div>
        <div className={cn({ 'changePageBtn': props.page < 500 })}>
            <button type="button" onClick={next} className={'activeChangePageBtn'} >next page </button>
        </div>
    </div >
};
export default PaginatorFunctional;
