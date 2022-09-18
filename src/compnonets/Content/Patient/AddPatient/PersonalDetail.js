import React from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBRadio,
  
} from 'mdb-react-ui-kit';

export default function PersonalDetail() {

  const options = [
    { label: 'Mr.', value: 'Mr.' },
    { label: 'Mrs.', value: 'Mrs.' },
    { label: 'Miss', value: 'Miss' },
  ];
  const doctors = [
    { label: 'Dr. Akshay', value: 'Dr. Akshay' },
    { label: 'Dr. Rakesh', value: 'Dr. Rakesh' },
    { label: 'Dr. Snehal', value: 'Dr. Snehal' },
  ];
  const [value, setValue] = React.useState('Mr.');
  const [Doctor, setDoctor] = React.useState('Select a Doctor');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <MDBRow className='mb-2'>
        
        <MDBCol>
        
          <MDBInput id='form6Example1' label='Case No.' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Reference No.' />
        </MDBCol>
        
      </MDBRow>
      <MDBRow className='mb-2'>
      <MDBCol>
          <MDBInput id='form6Example2' label='Registration Date' />
        </MDBCol>
        <MDBCol>
   
   
        <select value={Doctor} onChange={handleChange}style={{width:"100%",height:"100%",borderBlockColor:"rgb(184 175 175);",backgroundColor:"#e1e1e1"}}>
          {doctors.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        </MDBCol>
        
        
      </MDBRow>
      <MDBRow className='mb-2'>
      <MDBCol>

  
    
      <select value={value} onChange={handleChange}style={{width:"100%",height:"100%",borderBlockColor:"rgb(184 175 175);",backgroundColor:"#e1e1e1"}}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
   
      
    
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example1' label='Nationality' />
        </MDBCol>
        
      </MDBRow>
      <MDBRow className='mb-2'>
      <MDBCol>
          <MDBInput id='form6Example2' label='First Name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last Name' />
        </MDBCol>
      
       
      </MDBRow>
      <MDBRow className='mb-2'>
      <MDBCol>
          <MDBInput id='form6Example1' label='Date of birth' />
        </MDBCol>
       
      <MDBCol>
        <MDBRow>
        <MDBCol> <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline /></MDBCol>
      <MDBCol><MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline /></MDBCol>
      <MDBCol><MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Others' inline /></MDBCol>
        </MDBRow>
      </MDBCol>
       
      </MDBRow>
      <MDBRow className='mb-2'>
      <MDBCol>
          <MDBInput id='form6Example2' label='Occupation' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Referred By' />
        </MDBCol>
      </MDBRow>
     <MDBRow className='mb-2'>
    
     </MDBRow>
    </form>
  );
}