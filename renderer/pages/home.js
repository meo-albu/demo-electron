import React from 'react'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Demo App</title>
      </Head>

      <div className='h-screen bg-gradient-to-r from-gray-900 to-indigo-900 grid place-items-center'>
        <h1 className='text-indigo-200 text-3xl font-bold'>Hello, world</h1>
      </div>
    </>
  )
}

export default Home;
