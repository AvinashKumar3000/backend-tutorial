import { createContext, useState } from "react";


const DataContext = createContext();

function DataProvider({ children }) {
    const [count, setCount] = useState(0);
    
    function incr() {
        setCount(count + 1);
    }
    function decr() {
        setCount(count - 1);
    }

    return (
        <DataContext.Provider value={{ count, incr, decr }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };