import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isBuffer, setBuffer] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortConst.signal})
            .then(res => {
                if(res.status === 404){
                    throw Error('route does not exist!');
                } else if (!res.ok) {
                    throw Error('could not connect to server');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setBuffer(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('aborted');
                } else {                    
                    setError(err.message);
                    setBuffer(false);
                }
            })
        }, 1000);

        return () => abortConst.abort();
    }, [url]);

    return {data, isBuffer, error};
}

export default useFetch;