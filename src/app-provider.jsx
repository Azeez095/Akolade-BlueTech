import { createContext, useState } from "react";

export const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const [selectedSupplier, setSelectedSupplier] = useState('FragranceX');
    const [qtyMin, setQtyMin] = useState(null);
    const [qtyMax, setQtyMax] = useState(null);
    const [priceMin, setPriceMin] = useState(null);
    const [priceMax, setPriceMax] = useState(null);
    const [errorQtyInput, setErrorQtyInput] = useState('');
    const [errorPriceInput, setErrorPriceInput] = useState('');
    const [qtyRange, setQtyRange] = useState(null);
    const [priceRange, setPriceRange] = useState(null);
    const [search, setSearch] = useState('');
    
    const value = {
        selectedSupplier,
        qtyMin,
        qtyMax,
        priceMin,
        priceMax,
        errorQtyInput,
        errorPriceInput,
        qtyRange,
        priceRange,
        setSelectedSupplier,
        setQtyMin,
        setQtyMax,
        setPriceMin,
        setPriceMax,
        setErrorQtyInput,
        setErrorPriceInput,
        setQtyRange,
        setPriceRange,
        setSearch,
        search
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}