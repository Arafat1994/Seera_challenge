
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setFilteredHotels } from "../Redux/Actions/Actions";

export default function useSearch( fromDate , toDate ) {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    String.prototype.replaceAt = function (index, replacement) {
        if (index >= this.length) {
            return this.valueOf();
        }

        return this.substring(0, index) + replacement + this.substring(index + 1);
    }

    const dateCalc = () => {
        var date1 = new Date(fromDate)
        var date2 = new Date(toDate);
        return ((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24))
    }

    const searchHandler = (e) => {
        e.preventDefault()
        const daysNum = dateCalc(fromDate, toDate);
        axios.get("https://run.mocky.io/v3/48244d7b-52e9-4b5f-b122-bd763e53fa5c").then((res) => {
            var data = JSON.parse(res.data.replaceAt(res.data.lastIndexOf(","), ""));
            const availableHotels = data.filter((result) => {
                if (fromDate <= result.available_on && toDate >= result.available_on && fromDate !== toDate) {
                    return result
                }
            })

            dispatch(setFilteredHotels({ daysNum, availableHotels }));
            Navigate("/HotelListing")
        })
    }

    return {searchHandler}


}