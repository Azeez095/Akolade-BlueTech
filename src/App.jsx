import { useState, useContext} from 'react'
import NavBar from './NavBar'
import './App.css'
import DataTable from './components/data-table';
import { columns } from './components/columns';
// import { ApiContext} from './ApiContext';
import { useQuery } from '@tanstack/react-query';

function App() {
  // const { state } = useContext(ApiContext);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => fetchSupplier({}),
    queryKey: ['products']
  })

  console.log(data, '-> data')


  return (
    <div className='space-y-2 space-x-8'>
      <NavBar />

<div className='flex items-start'>
    <div className='mt-4 w-[15%] space-y-6 border-r h-screen'>
      <p>Filters:</p>
      <div className='space-y-2'>
        <p className='font-bold'>Suppliers:</p>

        <div className='space-x-2'>
          <input type="radio" id="FragranceX" name="suppliers" value='FragranceX' />
          <label for="FragranceX">FragranceX</label>
        </div>

        <div className='space-x-2'>
          <input type="radio" id="FragranceNet" name="suppliers" value="FragranceNet" />
          <label for="FragranceNet">FragranceNet</label>
        </div>

        <div className='space-x-2'>
          <input type="radio" id="Morris Costumes" name="suppliers" value="Morris Costumes" />
          <label for="Morris Costumes">Morris Costumes</label>
        </div>
      </div>

      <div className='space-y-6'>
        <div className='space-y-2'>
          <p className='font-bold'>Quantity</p>
          <div className='flex space-x-2 items-center'>
            <input type="number" placeholder="min" className='w-[25%] border rounded-md p-1' />
            <p>-</p>
            <input type="number" placeholder='max' className='w-[25%] border rounded-md p-1' />
            <button className='bg-[#000] text-white px-2 rounded-md py-1'>Go</button>
          </div>
        </div>

        <div className='space-y-2'>
          <p className='font-bold'>Price</p>
          <div className='flex space-x-2 items-center'>
            <input type="number" placeholder="min" className='w-[25%] border rounded-md p-1' />
            <p>-</p>
            <input type="number" placeholder='max' className='w-[25%] border rounded-md p-1' />
            <button className='bg-[#000] text-white px-2 py-1 rounded-md'>Go</button>
          </div>
        </div>
      </div>
    </div> 

    <div className='w-[85%]'>

      <DataTable
          columns={columns}
          data={[]}
          pageSize={pageSize}
          dataLength={10}
          handleChangePageSize={setPageSize}
        />
    </div>
</div>
      
    </div>
  )
}

export default App
