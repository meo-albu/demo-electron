import { ipcRenderer } from 'electron';
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import TitleBar from '../components/TitleBar/TitleBar';

function Home() {
  const [open, setOpen] = useState(true)

  return (
    <div className='flex flex-col h-screen text-gray-100 font-light text-sm'>
      <TitleBar title='Mail App'>
        <button className='hover:bg-red-500 p-2 ml-auto focus:outline-none active:bg-red-700' onClick={() => ipcRenderer.send('close-app')}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </TitleBar>

      <div className='flex-grow flex flex-col bg-gray-900'>
        <div className='p-2 px-6 border-b border-gray-600 flex items-center justify-between'>
          <button className='text-white focus:outline-none' onClick={() => setOpen(prev => !prev)}>
            {
              open 
              ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            }
          </button>

          <input className='px-4 py-1 bg-transparent border border-gray-800 focus:border-gray-600 focus:outline-none w-1/3' placeholder='Search' />
        </div>

        <div className='flex-grow flex'>
          <Sidebar open={open} />
          <div className='p-4 flex-grow'>
            <h1 className='text-indigo-200 text-3xl font-bold'>Hello, World</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
