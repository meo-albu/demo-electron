import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMail, setMailList } from '../../store/actions/mailActions'
import Modal from '../Modal/Modal'

import Link from 'next/link'

export default function Sidebar({
    open
  }) {

  const dispatch = useDispatch()
  const {mails} = useSelector(state => state.mailReducer)

  const [modal, setModal] = useState(false)

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
        <ul className='text-xs space-y-3 h-full flex flex-col pb-6'>
          <li
            onClick={() => setModal(true)} 
            className='p-2 px-3 mb-6 bg-indigo-700 bg-opacity-80 hover:bg-opacity-60 cursor-pointer flex items-center space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>Compose</span>
          </li>
          {
            mails.map((item, index) => {
              return(
                <li
                  key={index}
                  className={`py-2 px-4 bg-gray-700 bg-opacity-0 hover:bg-opacity-50 cursor-pointer flex items-center space-x-3`}
                  onClick={() => {
                    dispatch(setMailList(item.title))
                    dispatch(setActiveMail(0)) 
                  }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              )
            })
          }
          <li className='bg-gray-700 bg-opacity-0 hover:bg-opacity-50 cursor-pointer !mt-auto'>
            <Link href='/board'>
              <span className='py-2 px-4 bg-indigo-500 block'>Board</span>
            </Link>
          </li>
          <li className='bg-gray-700 bg-opacity-0 hover:bg-opacity-50 cursor-pointer'>
            <Link href='/calendar'>
              <span className='py-2 px-4 block'>Calendar</span>
            </Link>
          </li>
        </ul>
        <div className='fixed right-0 bottom-0'>
          <Modal open={modal} onClose={setModal} />
        </div>
      </div>
    </Transition>
  )
}
