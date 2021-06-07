import { ipcRenderer } from 'electron'
import React from 'react'

export default function TitleBar({
    title,
    children
  }) {

  return (
    <div className='bg-indigo-900'>
      <div className='title-bar bg-indigo-900 flex items-center select-none text-indigo-200'>
        <button className='focus:outline-none hover:bg-gray-50 hover:bg-opacity-20 p-2' onClick={() => ipcRenderer.send('client-ready')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <span className='px-4 text-sm'>{title}</span>
        {children}
      </div>
    </div>
  )
}
