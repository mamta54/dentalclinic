import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody , MDBCheckbox} from 'mdb-react-ui-kit';
import Icon from "react-crud-icons";

export default function Table() {
  return (
    
    <MDBTable align='middle' responsive>
      <MDBTableHead dark>
        <tr>
          <th scope='col'>
            
          </th>
          <th scope='col'>Sr.</th>
          <th scope='col'>Case No.</th>
          <th scope='col'>Registration Date</th>
          <th scope='col'>Reference No.</th>
          <th scope='col'>FirstName</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Date Of Birth</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Ocuupation</th>
          <th scope='col'>Rferred By</th>
          <th scope='col'>Nationality</th>
          <th scope='col'>Contact Details</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>2</td>
          <td>CS02</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Ashutosh</td>
          <td>Singh</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Engineer</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        <tr>
          <th scope='col'>
            <MDBCheckbox></MDBCheckbox>
          </th>
          <td>1</td>
          <td>CS01</td>
          <td>13/09/2022</td>
          <td>RF01</td>
          <td>Jhon</td>
          <td>Sint</td>
          <td>27/05/1998</td>
          <td>Male</td>
          <td>Businessman</td>
          <td>Sam</td>
          <td>Indian</td>
          <td>
          <MDBBtn className='mx-2' color='info'>
        View 
      </MDBBtn>
          </td>
          <td>
          <Icon
        name = "edit"
        tooltip = "Edit"
        theme = "light"
        size = "medium"
       
      />
      
          </td>
          <td>
          <Icon
        name = "delete"
        tooltip = "Delete"
        theme = "light"
        size = "small"
       
      />
          </td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
  );
}