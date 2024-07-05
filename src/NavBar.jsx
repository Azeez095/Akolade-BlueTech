import React, { useContext } from 'react';
import logo from './assets/Logo.png'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {AppContext} from './app-provider'

function NavBar() {
    const { setSearch, search } = useContext(AppContext);
    console.log(search);
  return (
    <div className=''>
        <div className='flex justify-between mx-10 py-6'>
            <div className='flex gap-10'>
                <img src={logo} alt='company logo' 
                className='bg-white' />

                <div class="relative flex items-center text-gray-400
                focus-within:text-gray-600">
                    <IoIosSearch class="w-5 h-5 absolute ml-3 pointer-events-none"/>
                    <input type="text" name="search" placeholder="Search Products"
                    aria-label="Search talk"
                    class="pr-3 pl-10 py-2 font-semibold placeholder-gray-500
                    text-black rounded-md border-none ring-2 ring-gray-300
                    focus:ring-gray-500 focus:ring-2" onChange={({target}) => setSearch(target.value)} value={search} />

                </div>
            </div>
                
            <div className='flex self-center gap-4'>
                <IoIosNotificationsOutline className='rounded-full bg-gray-200' size={30} />
                <IoPerson className='rounded-full bg-gray-200' size={30}/>
                <h6 className='self-center'>Akolade</h6>
                <IoIosArrowDown className='self-center' />
            </div>
        </div>
    </div>
  )
}

export default NavBar