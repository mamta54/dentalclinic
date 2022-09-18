import React, { useState } from 'react'
import './Sidebar.css'

import SideMenuItem from './SideMenuItem'
import { SiderItem } from '../../Data/Data'
const Sidebar = () => {
   
   
  return (
    <>
   
    <div className='sideBar'>
        
    <div className="sidebar ">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Snehi Clinic</span>
    </div>
    <ul className="nav-links">
   {SiderItem.map((item,index) => <SideMenuItem key={index} item={item}/>)}
    </ul>
  </div>
 
  
  </div>
  </>
  )
}

export default Sidebar