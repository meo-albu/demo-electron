import React from 'react'
import Head from 'next/head'
import { ipcRenderer } from 'electron';

function Home() {

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div className='h-screen bg-gray-900'>

        <div className='title-bar bg-indigo-900 flex items-center select-none text-indigo-200'>
          <span className='px-4 text-sm'>Settings</span>
          <button className='hover:bg-gray-50 hover:bg-opacity-10 p-2 ml-auto' onClick={() => ipcRenderer.send('close-settings')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className='py-3 px-6'>
        </div>

      </div>
    </>
  )
}

export default Home;
