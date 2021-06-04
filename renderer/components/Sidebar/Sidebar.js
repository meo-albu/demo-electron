import { Transition } from '@headlessui/react'
import React from 'react'

const items = [
  {
    title: 'Inbox',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
        </svg>
  },
  {
    title: 'Sent',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
  },
  {
    title: 'Spam',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
  },
]

export default function Sidebar({
    open
  }) {

  return (
    <Transition
      show={open}
      as={React.Fragment}
      enter="transition-transform duration-300"
      enterFrom="transform -translate-x-full"
      enterTo="transform translate-x-0"
      leave="transition-transform duration-300"
      leaveFrom="transform translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <div className='w-28 bg-gray-800 bg-opacity-20 h-full border-r border-gray-800'>
        <ul className='text-xs space-y-3'>
          <li className='p-2 px-3 mb-6 bg-indigo-700 bg-opacity-80 hover:bg-opacity-60 cursor-pointer flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>Compose</span>
          </li>
          {
            items.map((item, index) => {
              return(
                <li
                  key={index}
                  className={`py-2 px-4 bg-gray-700 bg-opacity-0 hover:bg-opacity-50 cursor-pointer flex items-center space-x-3`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Transition>
  )
}
