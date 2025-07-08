import React,{useState} from 'react'
import { NavLink } from 'react-router'
import { CgProfile } from "react-icons/cg";
import { FaRegFileCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleSideToggle() {
    setIsCollapsed(!isCollapsed) 
      
  }
  return (
    <div>
      <aside className={`${isCollapsed === true ? 'w-24' :'w-64'} min-h-screen bg-gray-900 text-white p-4" `>
      <button onClick={handleSideToggle}><GiHamburgerMenu size={30}/></button>
  <ul className="space-y-6 my-5">
    <li className='flex '><CgProfile className='' size={25}/> <NavLink className='px-3 font-semibold text-lg' to="profile">Profile</NavLink></li>
    <li className='flex'><FaRegFileCode className='' size={25}/> <NavLink className='px-3 font-semibold text-lg'  to="skills">Skills</NavLink></li>
    <li className='flex'><GoProjectSymlink  className='' size={25}/> <NavLink className='px-3 font-semibold text-lg'  to="projects">Projects</NavLink> </li>
    <li className='flex'><IoSettingsOutline className='' size={25} /> <NavLink className='px-3 font-semibold text-lg'  to="settings">Settings</NavLink></li>
  </ul>
</aside>

    </div>
  )
}

export default Sidebar
