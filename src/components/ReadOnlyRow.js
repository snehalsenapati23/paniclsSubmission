import React from 'react';
import { useNavigate } from 'react-router-dom';



const ReadOnlyRow = ({record,handleEditClick,handleViewClick}) => {
  const navigate=useNavigate();
    function calculateAge(dateOfBirth) {
        const birthdate = new Date(dateOfBirth);
        const age = Math.floor((Date.now() - birthdate) / (365.25 * 24 * 60 * 60 * 1000));

        return age;
      }
     
  return (
    <tr>
                <td>{record.first_name}</td>
                <td>{record.last_name}</td>
                <td>{calculateAge(record.dob)}</td>
                <td> {record.gender}</td>
                <td>{record.email} </td>
                <td>
                    <button type='button' onClick={(event)=>handleEditClick(event,record)}>Edit</button>
                    <button type='button' onClick={()=>navigate("/table/view")}>View</button>
                </td>
            </tr>
  )
}

export default ReadOnlyRow;