
import { useState } from 'react';
const UseFilter = (data , daysNum ) => {

    const [HotelsData, SetHotelsData] = useState(data);

    const SortingData = (value) => {
        let actual_show = [...data];
        if (value === "byPrice") { actual_show.sort((a, b) => a.price - b.price); }
        else if (value = "byName") { actual_show.sort((a, b) => a.name.localeCompare(b.name)); }
        SetHotelsData(actual_show)
    }
    const HandleFilter = (event, FilterType) => {
        event.preventDefault();
        let value = event.target.value;
        if (value && FilterType) {
            let fiteredHotels = [];
            fiteredHotels = data.filter((res) => {
                if (FilterType === "byName") { return res.name.search(value) != -1; }
                else {
                    let hotelPrice = Number(res.price) * daysNum;
                    let ValPrice = Number(value);
                    return hotelPrice < ValPrice
                }
            });
            SetHotelsData(fiteredHotels);
        }
        else {
            SetHotelsData(data)
        }
    }

    return { SortingData, HotelsData , HandleFilter}
}


export default UseFilter; 