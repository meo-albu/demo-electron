import { ipcRenderer } from 'electron';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Message from '../components/Message/Message';
import Sidebar from '../components/Sidebar/Sidebar';
import TitleBar from '../components/TitleBar/TitleBar';
import { setActiveMail } from '../store/actions/mailActions';

function Home() {
  const [open, setOpen] = useState(true)

  const dispatch = useDispatch()
  const {active, mails, activeMail} = useSelector(state => state.mailReducer)

  return (
    <div className='flex flex-col h-screen overflow-hidden text-gray-100 font-light text-sm'>
      <TitleBar title='Mail App'>
        <button className='hover:bg-red-500 p-2 ml-auto focus:outline-none active:bg-red-700' onClick={() => ipcRenderer.send('close-app')}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </TitleBar>

      <div className='overflow-hidden flex flex-col flex-grow bg-gray-900'>
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

        <div className='overflow-hidden flex h-full'>
          <Sidebar open={open} />
          <div className='flex-grow flex'>
            {
              mails.map((mail, index) => {
                if(mail.title.toLowerCase() === active.toLowerCase()) {
                  return (
                    <div key={index} className='flex-grow flex h-full'>
                      <div className='w-72 bg-gray-800 bg-opacity-10 border-r border-gray-800 h-full'>
                        <h1 className='text-xl mb-4 px-4 py-2 flex items-center space-x-3'>
                          {mail.icon}
                          <span>{mail.title}</span>
                        </h1>
                        <ul className='space-y-3'>
                          {
                            mail.list.map((item, index) => {
                              return (
                                <li 
                                  onClick={() => dispatch(setActiveMail(index))}
                                  key={index}
                                  className={`px-4 py-2 bg-gray-800 ${activeMail === index ? 'bg-opacity-40' : 'bg-opacity-0'} hover:bg-opacity-50 cursor-pointer`}>
                                  <p className='font-semibold mb-2'>{item.name}</p>
                                  <p>
                                    {item.message.title}:
                                    <span className='opacity-40'>{item.message.message.substring(0, 20)}...</span> 
                                  </p>
                                </li>
                              )
                            })
                          }        
                        </ul>
                      </div>
                      <div className='w-full'>
                        {
                          mail.list.map((item, index) => {
                            if(activeMail === index) {
                              return (
                                <div key={index} className='flex flex-col h-full'>
                                  <div className='p-4 border-b border-gray-700'>
                                    {item.message.title}
                                  </div>
                                  <div className='p-4 overflow-y-scroll flex-grow'>
                                    <Message text={item.message.message} index={index} list={mail.title} />
                                  </div>
                                </div>
                              )
                            }
                          })
                        }
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
