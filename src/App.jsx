import { useState, useContext} from 'react'
import NavBar from './NavBar'
import './App.css'
import DataTable from 'react-data-table-component';
import { ApiContext} from './ApiContext';

function App() {
  const { state } = useContext(ApiContext);
  const column = [
    {
      name: "Image",
      selector : row => <img src={row.Image_1} alt="Product Image" className='w-[100px]' />,
      width: 'w-5'
    },
    {
      name: "SKU",
      selector : row => row.SKU,
    },
    {
      name: "Name",
      selector : row => row.Name,
      style: {
        margin: '20px', // Example of adding margin to the header
      }
    },
    {
      name: "Title",
      selector : row => row.Title,
    },
    {
      name: "Description",
      selector : row => row.Description,
    },
    {
      name: "Brand",
      selector : row => row.Brand,
    },
    {
      name: "Cost Price",
      selector : row => row['Cost Price'],
    },
    {
      name: "Quantity",
      selector : row => row.Quantity,
    },
   ]

  return (
    <div>
      <NavBar />
      <div className='bg-gray-400 mt-10'> 
        <DataTable className='mx-6 w-[100%] mt-5'
          title = "Products List"
          columns={column}
          data={state.data}
          pagination
          selectableRows
          responsive
          />
      </div>
    </div>
  )
}

export default App
