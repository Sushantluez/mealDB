import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
  const nav = useNavigate();

  const [show, setShow] = useState(false);

  return (
    <header className="bg-black  text-yellow-500 flex justify-between px-7 py-5 items-baseline pt-5">
      <div>
        <NavLink to='/' replace> <img src="https://themealdb.com/images/logo-small.png" alt="" />
        </NavLink>
      </div>

      {show && <nav className=" msm:flex hidden flex-col space-y-2 ">
        <NavLink className="font-bold" to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>
      </nav>
      }




      <button onClick={() => setShow(!show)}>
        {show ? <i className="fa-solid fa-xmark hidden msm:flex"></i> : <i className="fa-solid fa-bars hidden msm:flex"></i>}
      </button>
      <nav className="msm:hidden space-x-5 flex items-center  ">
        <NavLink className="font-bold" to='/about'>About</NavLink>
        <NavLink className="font-bold" to='/contact'>Contact</NavLink>


      </nav>
    </header>

  )
}
export default Header


