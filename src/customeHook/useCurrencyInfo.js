import { useEffect } from "react";
import { useState } from "react";


function useCurrencyInfo(currency){
    const[data,setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]));
        console.log("Api called")
    },[currency]);

    return data;
    console.log(data);
}

export default useCurrencyInfo;