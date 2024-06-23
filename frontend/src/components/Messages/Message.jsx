import React from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from '../../context/AuthContext'
import {extractTime} from '../../utils/extractTime.js'
const Message = ({message}) => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const chatClassName=fromMe?'chat-end':'chat-start';
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubblecolor=fromMe? 'bg-green-500':"";
  const time=extractTime(message.createdAt);
  const shakeClass=message.shouldShake? "shake":"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img alt="Tailwind Css Chat Bubble Component" src={profilePic}/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubblecolor} ${shakeClass} break-words`}>{message.message}</div>
        <div className={`chat-footer opacity-60 text-xs text-white flex gap-1 items-center`}>{time}</div>
    </div>
  )
}

export default Message