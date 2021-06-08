import { Avatar, Button, FormControl, Heading, Input } from '@driven-crm/ui'
import React from 'react'

export default function Settings({closeSettings}) {

  return (
    <div className='p-6 flex flex-col h-full'>
      <Heading level='5' className='mb-8' >Settings</Heading>
      <div className='flex flex-col justify-center items-center pb-6 mb-10 border-b border-gray-700'>
        <Avatar size='medium' src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        <Heading level='6' className='mt-4' >John Doe</Heading>
      </div>

      <div className='flex-grow '>
        <div className='space-y-6'>
          <FormControl htmlFor='name' label='Name'>
            <Input placeholder='John Doe' name='name' size='compact' />
          </FormControl>

          <FormControl htmlFor='pass' label='Password'>
            <Input placeholder='••••••' name='pass' size='compact' type='password' />
          </FormControl>

          <FormControl htmlFor='cpass' label='Confirm Password'>
            <Input placeholder='••••••' name='cpass' size='compact' type='password' />
          </FormControl>
        </div>
      </div>

      <div className='flex justify-end'>
        <Button className='bg-transparent p-2' onClick={closeSettings}>Close</Button>
        <Button size='compact' onClick={closeSettings}>Save</Button>
      </div>
    </div>
  )
}
