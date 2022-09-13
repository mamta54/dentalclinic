import './Sidebar.css'
import React, { useState } from 'react'
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
// import { SiderItem } from '../../Data/Data'
import { Submenu } from './Submenu';
import { IconName } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
export default function Ditem({item}){
    const [open,setOpen] = useState(false)
    // return (
       
    //         <li className= {open ? "menuItem showMenu": "menuItem"}>
    //     <div className="iocn-link">
    //       <a href="#">
    //         <i className='bx bx-collection' ></i>
    //         <span className="link_name">{item.title}</span>
    //       </a>
    //       <i className='bx bxs-chevron-down arrow' onClick={() => setOpen(!open)}></i>
    //     </div>
    //     <ul className="sub-menu">
    //       <li><a className="link_name" href="#">Add Patient</a></li>
    //       <li><a href="#">View Patient</a></li>
    //       <li><a href="#">Patient Family</a></li>
         
    //     </ul>
    //   </li>

    // )

    if(item.childrens){
        return (
       
            <li className= {open ? "menuItem showMenu": "menuItem"}>
        <div className="iocn-link">
          <a href="#">
          {item.icon && <i className={item.icon} ></i> || <item.icon/>}
            {/* <i className={item.icon} ></i> */}
            <span className="link_name">{item.title}</span>
          </a>
          <i className='bx bxs-chevron-down arrow' onClick={() => setOpen(!open)}></i>
        </div>
       
        <ul className="sub-menu">
        {item.childrens.map((item,index) =>  <Submenu key={index} item={item}/>)}
         
         
        </ul>
      </li>

    )
    }
    else{
        return (
       
            <li className=  "menuItem">
        <div className="iocn-link">
          <a href="#">
          {item.icon && <i className={item.icon} ></i>}
            <span className="link_name">{item.title}</span>
          </a>
         
        </div>
       
      </li>

    )
    }
}