import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Modal({
    open,
    onClose
  }) {

  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    if(open) setIsOpen(true)
  }, [open])

  const closeModal = () => {
    setIsOpen(false)
    onClose && onClose(false)
  }
  
  return (
    <Transition
      show={isOpen}
      as={React.Fragment}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className='fixed flex flex-col right-4 bottom-4 bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-800 w-[35rem] h-[28rem]'>
        <div className='bg-indigo-900 pl-2 flex items-center justify-between'>
          <span>New Message</span>
          <button className='hover:bg-indigo-800 p-1 ml-auto focus:outline-none active:bg-indigo-700' onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className='flex-grow overflow-y-hidden'>
          <form className='flex flex-col h-full'>
            <div className='relative'>
              <label className='absolute top-1/2 transform -translate-y-1/2 left-3 opacity-70'>To</label>
              <input className='p-2 pl-10 focus:outline-none bg-transparent w-full border-b border-gray-800' />
            </div>
            <div className='relative'>
              <input className='p-2 pl-3 focus:outline-none bg-transparent w-full border-b border-gray-800' placeholder="Subject" />
            </div>
            <div
              contentEditable
              className='flex-grow overflow-y-scroll w-full bg-transparent resize-none p-2 pl-3 focus:outline-none '>
            </div>
            <div className='flex font-serif px-2 pb-2'>
              <div className='p-1 hover:bg-gray-800 w-6 cursor-pointer text-center font-bold'>B</div>
              <div className='p-1 hover:bg-gray-800 w-6 cursor-pointer text-center font-bold italic'>I</div>
              <div className='p-1 hover:bg-gray-800 w-6 cursor-pointer text-center font-bold underline'>U</div>

              <button className='ml-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  )
}
