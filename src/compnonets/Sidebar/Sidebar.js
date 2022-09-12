import React, { useState } from 'react'
import './Sidebar.css'
import { useEffect } from 'react'
import { SidebarData } from '../../Data/Data'
import {UilEstate} from "@iconscout/react-unicons"
import { Helmet } from 'react-helmet'

const Sidebar = () => {
    const [openPatient,setOpenPatient] = useState(false)
    const [openAppointment,setOpenAppointment] = useState(false)
    const [open,setOpen] = useState(false)
  return (
    <>
   
    <div className='sideBar'>
        
    <div className="sidebar ">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">Snehi Clinic</span>
    </div>
    <ul className="nav-links">
      <li className="menuItem showMenu" >
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Patient</a></li>
        </ul>
      </li>
      <li className={openPatient ? "menuItem showMenu" : "menuItem"}>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-collection' ></i>
            <span className="link_name">Patient</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={() => {setOpenPatient(!openPatient)}}></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Add Patient</a></li>
          <li><a href="#">View Patient</a></li>
          <li><a href="#">Patient Family</a></li>
         
        </ul>
      </li>
      <li className={openAppointment ? "menuItem showMenu" : "menuItem"}>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-book-alt' ></i>
            <span className="link_name">Appointment</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={() => {setOpenAppointment(!openAppointment)}}></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Posts</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Login Form</a></li>
          <li><a href="#">Card Design</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <a href="#">
          <i className='bx bx-pie-chart-alt-2' ></i>
          <span className="link_name">Lab Work</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Lab work</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <a href="#">
          <i className='bx bx-line-chart' ></i>
          <span className="link_name">Communication</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Communication</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <div className="iocn-link">
          <a href="#">
            <i className='bx bx-plug' ></i>
            <span className="link_name">Accounts</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Plugins</a></li>
          <li><a href="#">UI Face</a></li>
          <li><a href="#">Pigments</a></li>
          <li><a href="#">Box Icons</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <a href="#">
          <i className='bx bx-compass' ></i>
          <span className="link_name">Documents</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Explore</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <a href="#">
          <i className='bx bx-history'></i>
          <span className="link_name">Admistrator</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">History</a></li>
        </ul>
      </li>
      <li className={open ? "menuItem showMenu" : "menuItem"}>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="link_name">Report</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Setting</a></li>
        </ul>
      </li>
      <li>
   
  </li>
</ul>
  </div>
 
  
  </div>
  </>
  )
}

export default Sidebar