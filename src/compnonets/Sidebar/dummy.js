import React from 'react'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
import {UilEstate} from "@iconscout/react-unicons"
const Sidebar = () => {
  return (
   <div className='Sidebar'>
    <div className='logo'>
        <span> Snehi Clinic </span>
    </div>

    {/* menu */}
    <div className='menu'>
       {SidebarData.map((item,index)=>{
        return(
            <div className='menuItem'>
                <item.icon/>
                <span>
                    {item.heading}
                </span>
                </div>
        )
       }
       )
       }

      
    </div>
   </div>
  )
}

export default Sidebar