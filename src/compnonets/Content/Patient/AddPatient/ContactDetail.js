import React from 'react'

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ContactDetail() {
  return (
    <form>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Flat/Door/Block No.' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Road/Street/Lane' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='City' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Country' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Email 1' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Phone' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Name of building/Village' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Area/Locality' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='State' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Pin Code' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-2'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Email 2' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label=' Mobile' />
        </MDBCol>
      </MDBRow>
     
    </form>
  );
}