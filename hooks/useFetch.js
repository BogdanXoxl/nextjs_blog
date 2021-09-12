import {useEffect, useState, useCallback} from "react";
import API from "../API";


const useFetch = (initPage, initialState, initTotalCount, model) => {
    const [fetching, setFetching] = useState(false);
    const [page, setPage] = useState(initPage);
    const [data, setData] = useState([...initialState]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(false);
    const [totalCount, setTotalCount] = useState(initTotalCount);

    const scrollHandler = useCallback((e) => {
        if(e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && data.length < totalCount)
                setFetching(true);
    }, [data.length]);

    const fetchData = async (page, searchTerm="") => {
        try{
            setError(false);
            API.getData(model, page, searchTerm).then(res => {
                setPage(prev => prev + 1);
                setTotalCount(+res.headers['x-total-count']);
                setData((prev) => [
                    ...prev,
                    ...res.data
                ]);
            }).finally(() => setFetching(false));
        }catch (e){
            setError(true);
        }
    }

    useEffect(() => {
        if(fetching)
            fetchData(page, searchTerm);
    }, [fetching]);

    useEffect(() => {
        if(searchTerm){
            setData([]);
            setPage(1);
            setTotalCount(0);
            setFetching(true);
        }else{
            setData(initialState);
            setPage(initPage);
            setTotalCount(initTotalCount);
        }
    }, [searchTerm]);

    return {scrollHandler, data, fetching, error, setSearchTerm};
};

export default useFetch;