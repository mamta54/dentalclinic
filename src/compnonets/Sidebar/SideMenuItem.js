import './Sidebar.css'
import React, { useState } from 'react'


import { Submenu } from './Submenu';

export default function SideMenuItem({item}){
    const [open,setOpen] = useState(false)
    if(item.childrens){
        return (
       
            <li className= {open ? "menuItem showMenu": "menuItem"}>
        <div className="iocn-link">
          <a href="#">
          {item.icon && <i className={item.icon} ></i> || <item.icon/>}
            
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