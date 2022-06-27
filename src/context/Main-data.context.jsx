import { createContext, useEffect, useState } from 'react';

export const MainDataContext = createContext({
    data: [],
});

export const MainDataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const fetchedData = await (
                await fetch('https://restcountries.com/v3.1/all')
            ).json();
            setData(fetchedData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const value = {
        data,
    };
    return (
        <MainDataContext.Provider value={value}>
            {children}
        </MainDataContext.Provider>
    );
};
