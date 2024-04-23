import { useState, useEffect } from "react";

export const useFetch = <T>(fetchFn: () => Promise<T>) => {
    const [data, setData] = useState<T>([] as T);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const dataFetch = async () => {
            setIsLoading(true);
            try {
                const res: T = await fetchFn();
                setData(res);
            } catch(e) {
                console.log('Error fetching data:', e);
            }
            setIsLoading(false);
        };
        dataFetch();
    }, []);  

    return { data, isLoading };
}