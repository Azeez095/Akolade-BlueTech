import { useState, useContext} from 'react'
import NavBar from './NavBar'
import './App.css'
import DataTable from './components/data-table';
import { columns } from './components/columns';
import { useQuery } from '@tanstack/react-query';
import { fetchSupplier } from './apis';
import Loading from './components/ui/loading';
import { handleMinChange, handleMaxChange } from './utils'
import {AppContext} from './app-provider'

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered component.
 */
function App() {
  const { 
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
    search,
    setPriceRange } = useContext(AppContext)

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchSupplier({supplier: selectedSupplier, first: 0, last: 50, search, ...qtyRange, ...priceRange }),
    queryKey: ['products', selectedSupplier, qtyRange, priceRange, search]
  });

  const suppliers = ['FragranceX', 'FragranceNet', 'Morris Costumes'];

  console.log(priceRange);

  const handleSetQtyRange = () => {
    setQtyRange({ Quantity_gte: qtyMin, Quantity_lte: qtyMax })
  }
  const handleSetPriceRange = () => {
    setPriceRange({ 'Cost Price_gte': qtyMin, 'Cost Price_lte': qtyMax })
  }

  if (isError) return <p>Sorry, an error occured from the server</p>

  return (
    <div className='space-y-2 space-x-8 bg-gray-100'>
      <NavBar />
     
    
    <div className='flex items-start '>
    <div className='mt-[70px] lg:w-[15%] w-[50%] space-y-6 border-r h-screen '>
      <p>Filters:</p>
      <div className='space-y-2'>
        <p className='font-bold'>Suppliers:</p>

      {suppliers.map((supplier) => (
          <div className='space-x-2' key={supplier} onClick={() => setSelectedSupplier(supplier)}>
            <input type="radio" id={supplier} name="suppliers" value={supplier}  defaultChecked={selectedSupplier === supplier} />
            <label for={supplier}>{supplier}</label>
          </div>
      ))}
      </div>

      <div className='space-y-6'>
        <div className='space-y-2'>
          <p className='font-bold'>Quantity</p>
          <div className='flex space-x-2 items-center'>
            <input type="number" placeholder="min" value={qtyMin || ''} className='w-[25%] border rounded-md p-1' onChange={(e) => handleMinChange(e, setErrorQtyInput, qtyMax, setQtyMin)} />
            <p>-</p>
            <input type="number" placeholder='max' value={qtyMax || ''} className='w-[25%] border rounded-md p-1' onChange={(e) => handleMaxChange(e, setErrorQtyInput, qtyMin, setQtyMax)} />
            <button className='bg-[#000] text-white px-2 rounded-md py-1 disabled:opacity-30 disabled:cursor-not-allowed' 
            disabled={errorQtyInput || !qtyMax || !qtyMin} onClick={handleSetQtyRange}>Go</button>
          </div>
          <p className='text-[#ED4337] text-xs'>{errorQtyInput || ''}</p>
        </div>

        <div className='space-y-2'>
          <p className='font-bold'>Price</p>
          <div className='flex space-x-2 items-center'>
            <input type="number" placeholder="min" value={priceMin || ''} className='w-[25%] border rounded-md p-1' onChange={(e) => handleMinChange(e, setErrorPriceInput, priceMax, setPriceMin)} />
            <p>-</p>
            <input type="number" placeholder='max' value={priceMax || ''} className='w-[25%] border rounded-md p-1' onChange={(e) => handleMaxChange(e, setErrorPriceInput, priceMin, setPriceMax)} />
            <button className='bg-[#000] text-white px-2 py-1 rounded-md disabled:opacity-30 disabled:cursor-not-allowed' disabled={errorPriceInput || !priceMax || !priceMin} onClick={handleSetPriceRange}>Go</button>
          </div>
          <p className='text-[#ED4337] text-xs'>{errorPriceInput || ''}</p>
        </div>

        <p className="text-sm bg-white rounded-full w-[23%] p-2 text-center" role="button" onClick={() => { setPriceRange(null); setQtyRange(null); setQtyMin(null); setQtyMax(null); setPriceMin(null); setPriceMax(null); }}>Reset</p>
      </div>
    </div> 

    <div className='lg:w-[85%] w-[75%]'>
    <h1 className='text-xl text-[#191635]'>Products List</h1>
        {isLoading ? <Loading /> : (
          <DataTable
            columns={columns}
            data={data}
          />
        )}

    </div>
</div>
      
    </div>
  )
}

export default App
