import { useNavigate } from "react-router-dom";

const BackToHome = () => {

  const navigate = useNavigate();

  return (
    <button 
    onClick={()=>navigate(`/`)}
    className="rounded-full border border-[#ffffff2a] px-3 py-1
    text-xs mx-auto bg-[#ffffff11]
    hover:bg-[#ffffff2a] focus:bg-[#ffffff2a]">
        back to home
    </button>
  )
}

export default BackToHome;