import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import UseFilters from "../customHooks/UseFilters";
import Header from "./Header";
import './HotelListing.scss'

export default function HotelListing() {

    const daysNum = useSelector((state) => state.AvailableHotels.FilterdData.daysNum);
    const data = useSelector((state) => state.AvailableHotels.FilterdData.availableHotels);
    const { SortingData, HotelsData, HandleFilter } = UseFilters(data, daysNum)


    const HotelDataToHtml = HotelsData?.map((res) => {
        return (
            <div className="HotelDetails" key={Math.random()}>
                <p><span className="headText">  Name    : </span> <span> {res.name} </span>   </p>
                <p><span className="headText">  Price   : </span> <span> {Number(res.price) * daysNum} AED </span>  </p>
                <p><span className="headText">  City    : </span> <span> {res.city}</span> </p>
            </div>
        )
    })


    return (
        <div className="ResultContainer">
            <Header header="HotelListing" />

            <div className="ResultsDiv">

                <div className="filterLeft" >
                    <input type="text" placeholder="Hotel Name" onChange={(event) => { HandleFilter(event, "byName") }} className="searchInp" />
                    <p> Price Filter </p>
                    <input type="range" min="1" max="20000" onChange={(event) => { HandleFilter(event, "byPrice") }} className="slidderInp" />
                </div>

                <div className="dataRight">
                    <div className="TotalNight">
                        <span className="headText"> Total Night : </span> {daysNum}
                    </div>

                    <div className="FilteredButton" >
                        <button onClick={() => { SortingData("byName") }}> Sort By Name  </button>
                        <button id="PriceSort" onClick={() => { SortingData("byPrice") }}> Sort Low Price   </button>
                    </div>

                    <>
                        {HotelDataToHtml}
                    </>

                </div>
            </div>
        </div>
    )
}