import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from "../../components/Messages/MessageContainer";
const Home = () => {
  return <div className='flex sm:h-[400px] md:h-[600px] rounded-2xl bg-clip-padding  background-filter backdrop-blur-lg bg-opacity-0 pl-2 pb-4'>
        <Sidebar/>
        <MessageContainer/>
    </div>
};
export default Home;