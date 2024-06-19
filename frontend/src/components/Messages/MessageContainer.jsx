import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti"
const MessageContainer = () => {
const Nochat=true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {/* Heaader */}
        {Nochat ?(<NoChatSelected/>):
          (<>
            <div className='bg-slate-400 px-4 py-2 mb-2 rounded-tr-2xl rounded-br-2xl'>
                <span className='label-text text-gray-950'>To:</span>{" "}
                <span className='text-gray-950 font-bold'>Rohit Kumar</span>
            </div>
            <Messages/>
            <MessageInput/>
          </>
          )}
    </div>
  );
}
const NoChatSelected=()=>{
  return(
  <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome 🙋‍♂️ Navin Kumar 🍀</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
  </div>)
}
export default MessageContainer