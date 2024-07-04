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
      width: '150px'
    },
    {
      name: "SKU",
      selector : row => <span className="w-2 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.SKU}</span>,
      width: '100px'
    },
    {
      name: "Name",
      selector : row => <span className="w-4 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.Name}</span>,
      width: '150px'
    },
    {
      name: "Title",
      selector : row => <span className="w-7 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.Title}</span>,
      width: '150px'
    },
    {
      name: "Description",
      selector: row => <span className="overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.Description}</span>,
      width: '350px'
    },
    {
      name: "Brand",
      selector : row => <span className="w-2 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.Brand}</span>,
      width: '100px'
    },
    {
      name: "Cost Price",
      selector : row =><span className="w-4 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row['Cost Price']}</span>,
      width: '150px'
    },
    {
      name: "Quantity",
      selector : row => <span className="w-2 overflow-hidden 
      whitespace-normal text-ellipsis mb-4">{row.Quantity}</span>,
      width: '150px'
    },
   ]

  

  return (
    <div>
      <NavBar />
        <DataTable className='mx-auto w-[50vw]'
          title = "Products List"
          columns={column}
          data={state.data}
          pagination
          selectableRows
          responsive
          />
      
    </div>
  )
}

export default App
