import React from 'react'
import PersonalDetail from './PersonalDetail'
import ContactDetail from './ContactDetail'
import './ContentPatient.css'
const AddPatient = () => {
  return (
   <div className='content'>
    <div>
      <h1>Add New Patient</h1>
    </div>
    <PersonalDetail/>
    <div>
      <h2>Contact Detail</h2>
    </div>
    <ContactDetail />
   </div>
  )
}

export default AddPatient