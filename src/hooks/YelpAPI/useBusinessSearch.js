import { useState, useEffect } from 'react';
//useEffect hook to make API call to reach network

import * as api from './api';

export function useBusinessSearch(term, location) { // (method parameters)
    // const [getData, setData] = storeData
    const [businesses, setBusinesses] = useState([]); //stores businesses array
    const [amountResults, setAmountResults] = useState([]); //stores total count of businesses that show up
    const [searchParams, setSearchParams] = useState({term, location}) //store objects from preinitialized params

    useEffect(() => {
        setBusinesses([]); //clears businesses array once search is done
        const fetchData = async () => { // create function to fetch api data
            try {
                const rawData = await api.get('/businesses/search', searchParams) // fetches data
                setBusinesses(resp.businesses) //get businesses array and puts it into local state
                setAmountResults(resp.total); //get total number of businesses array and puts it into local state
            } catch(e) {
                console.error(e);
            }
        }
        fetchData(); //call fetched data
    }, ([searchParams])) //if local states change, these variables can be re-executed here
    return [businesses, amountResults, searchParams, setSearchParams] //hooks return arrays that we want. we are returning local state arrays.

}

