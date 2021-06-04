import { ipcRenderer } from 'electron'
import React from 'react'

export default function TitleBar({
    title,
    children
  }) {

  return (
    <div className='bg-indigo-900'>
      <div className='title-bar bg-indigo-900 flex items-center select-none text-indigo-200'>
        <span className='px-4 text-sm'>{title}</span>
        {children}
      </div>
    </div>
  )
}
