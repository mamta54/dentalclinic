import React, { useState } from 'react'
import './Sidebar.css'
import { useEffect } from 'react'
import { SidebarData } from '../../Data/Data'
import {UilEstate} from "@iconscout/react-unicons"
import { Helmet } from 'react-helmet'
import Ditem from './Ditem'
import { SiderItem } from '../../Data/Data'
const D = () => {
   
   
  return (
    <>
   
    <div className='sideBar'>
        
    <div className="sidebar ">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Snehi Clinic</span>
    </div>
    <ul className="nav-links">
   {SiderItem.map((item,index) => <Ditem key={index} item={item}/>)}
    </ul>
  </div>
 
  
  </div>
  </>
  )
}

export default D