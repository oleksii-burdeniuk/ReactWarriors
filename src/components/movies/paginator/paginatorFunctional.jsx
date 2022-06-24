import React, { useEffect, useState } from "react";
import '../../../App.css';
import cn from 'classnames'
import s from './paginator.module.css'
const PaginatorFunctional = (props) => {
    let [pagesCount, setPagesCount] = useState(500);
    let [leftPortion, setLeftPortion] = useState(props.page);
    let [rightPortion, setRightPortion] = useState(props.page + 7);
    let [screenWidth, setScreenWidth] = useState(200);
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    let [pages, setPages] = useState(page)

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      useEffect(()=>{
        let x = getWindowDimensions();
        setScreenWidth(x)
      },[])

    useEffect(() => {
       let {width} =getWindowDimensions();
       setScreenWidth(width)
        if (screenWidth <= 850 && props.page === 1) {
            setLeftPortion(props.page - 1);
            setRightPortion(props.page + 2);
          }else if( screenWidth <= 850 ){
            setLeftPortion(props.page - 1);
            setRightPortion(props.page + 1);
          }
        else if (props.page === 1) {
            setLeftPortion(props.page);
            setRightPortion(props.page + 8);
        }
        else if (props.page === 2) {
            setLeftPortion(props.page - 1);
            setRightPortion(props.page + 7);
        }
        else if (props.page === 3) {
            setLeftPortion(props.page - 2);
            setRightPortion(props.page + 6);
        }
        else if (props.page === 4) {
            setLeftPortion(props.page - 3);
            setRightPortion(props.page + 5);
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
    return (
        <div className={s.PageBtnCont}>
            <div className={cn({ [s.changePageBtn]: props.page > 1 })} >
                <button type="button" onClick={previous} className={s.activeChangePageBtn}> &#8249; </button >
            </div>
            <div className={s.paginatorItemCont}>
                {pages.filter(p => p >= leftPortion && p <= rightPortion)
                    .map((p) => {
                        return <button key={p}
                            onClick={() => { props.switchPage(p) }}
                            className={cn({ [s.selected]: p === props.page }, { [s.notSelected]: p !== props.page })}>
                            {p}
                        </button>
                    })
                }
            </div>
            <div className={cn({ [s.changePageBtn]: props.page < 500 })}>
                <button
                    type="button"
                    onClick={next}
                    className={s.activeChangePageBtn} >&#8250; </button>
            </div>
        </div >
    )
};
export default PaginatorFunctional;
