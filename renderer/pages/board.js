import { Board } from '@driven-crm/ui'
import Link from 'next/link'
import React from 'react'
import TitleBar from '../components/TitleBar/TitleBar'

const data={"columns":[{"title":"Tasks","id":"qaFnWh","cards":[{"title":"Task 1","id":"bBBA3X"},{"title":"Task 2","id":"Hd1Sg8"},{"title":"Task 3","id":"mkd6Kw"},{"title":"Task 4","id":"e96E9P"}]},{"title":"In Progress","id":"cY417U","cards":[{"title":"Task 1","id":"MMhwV1"},{"title":"Task 2","id":"eMGpIG"}]},{"title":"Done","id":"fHXGCJ","cards":[{"title":"Task 1","id":"cqMWr4"},{"title":"Task 2","id":"iLLgf0"},{"title":"Task 3","id":"ZvETbv"}]}],"columnOrder":["qaFnWh","cY417U","fHXGCJ"]}

export default function board() {
  return (
    <div className='dark text-indigo-200 bg-dark-background overflow-hidden h-screen pb-20'>
      <TitleBar title='Board'>
        <div className='ml-auto'>
          <button className='hover:bg-indigo-800 p-2 ml-auto focus:outline-none active:bg-indigo-700' onClick={() => ipcRenderer.send('minimize-app')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-3" viewBox="0 0 409.6 409.6" fill="currentColor">
              <path d="M392.533 187.733H17.067C7.641 187.733 0 195.374 0 204.8s7.641 17.067 17.067 17.067h375.467c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.067-17.068-17.067z"></path>
            </svg>
          </button>
          <button className='hover:bg-indigo-800 p-2 ml-auto focus:outline-none active:bg-indigo-700' onClick={() => ipcRenderer.send('maximize-app')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-3" viewBox="0 0 512 512" fill='currentColor'>
              <path d="M452 0H60C26.916 0 0 26.916 0 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V60c0-33.084-26.916-60-60-60zm20 452c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V60c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20v392z"></path>
            </svg>
          </button>
          <button className='hover:bg-red-500 p-2 ml-auto focus:outline-none active:bg-red-700' onClick={() => ipcRenderer.send('close-app')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </TitleBar>
      <div className='p-4 text-white'>
        <Link href='/home'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <div className='h-full overflow-x-scroll'>
        <Board data={data} />
      </div>
    </div>
  )
}
