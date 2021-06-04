import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDOM from 'react-dom'

export default function Message({text, index, list}) {

  useEffect(() => {
    ReactDOM.render(<ReactMarkdown className='prose-lg max-w-none' children={text} />, document.getElementById(`message-${list}-${index}`))    
  }, [])

  return (
    <div id={`message-${list}-${index}`} />
  )
}
