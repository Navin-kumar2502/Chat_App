import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const {loading,logout}=useLogout();
  return (
  <div className='mt-auto ml-0'>
  {!loading ? (
    <BiLogOut className="w-9 h-9 text-white cursor-pointer" onClick={logout}/>
  ): (
    <span className="loading loading-spinner"></span>
  )}
  </div>
  );
}

export default LogoutButton;