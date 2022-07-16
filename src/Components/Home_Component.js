import "./Home_Component.scss"
import React, { useEffect, useState } from 'react'
import useSearch from "../customHooks/UseSerarch";
import Header from "./Header";


export default function HomeComp() {

    const fromDateRef = React.useRef();
    const toDateRef = React.useRef();

    const [fromDate, setFormDate] = useState();
    const [toDate, setToDate] = useState();
    const { searchHandler } = useSearch(fromDate, toDate);


    useEffect(() => {
        getIntialDate();
    }, [])

// use this functioon to put the date of today once user open home page 
    const getIntialDate = () => {
        const todayDate = new Date();
        var dateControl = document.querySelectorAll('input[type="date"]');
        const formatDate = todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
        const formatMonth = todayDate.getMonth() < 10 ? `0${todayDate.getMonth() + 1}` : todayDate.getMonth() + 1;
        const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join('-');
        setFormDate(formattedDate);
        setToDate(formattedDate)
        for (let i = 0; i < dateControl.length; i++) {
            dateControl[i].value = formattedDate;
        }
    }


    return (
        <div className="searchArea">
            <Header header=" Search Hotel " />
            <form>
                <div className="MarginForm">
                    <div className="FromDateDiv">
                        <label> From : </label>
                        <input className="fromdate" type="date" ref={fromDateRef} onChange={(e) => { setFormDate(e.target.value) }} />
                    </div>
                    <div  className="ToDateDiv">
                        <label > To :  </label>
                        <input className="todate" type="date" ref={toDateRef} onChange={(e) => { setToDate(e.target.value) }} />
                    </div>
                    <div className="ButtonDiv">
                        <button onClick={searchHandler}>  Search   </button>
                    </div>
                </div>

            </form>

        </div>
    )

}