import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img alt="Tailwind Css Chat Bubble Component" src="../../../public/avatar.png"/>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-green-500`}>Hii! What is upp?</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>10:45</div>
    </div>
  )
}

export default Message