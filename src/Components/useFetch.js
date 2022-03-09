import { useState, useEffect } from "react";

const useFetch = (url) => {


    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
             fetch(url)
             .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
             })
             .then(data => {
                 setData(data)
                 setIsLoading(false)
             })
             .catch(err => {
                 setIsLoading(false);
                 setError(err.message);
                 setError(null);
             })
        }, 1000);
    }, []);

    return { data, isLoading, error};
}

export default useFetch; 