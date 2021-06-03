import React from 'react'
import Head from 'next/head'
import { ipcRenderer } from 'electron';

function Home() {

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <div className='h-screen bg-gradient-to-r from-gray-900 to-indigo-900 grid place-items-center'>
        <h1 className='text-indigo-200 text-3xl font-bold'>Settings</h1>

        <button onClick={() => ipcRenderer.send('close-app')}>
          Close
        </button>
      </div>
    </>
  )
}

export default Home;
