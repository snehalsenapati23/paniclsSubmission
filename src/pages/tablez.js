import React, { useState,Fragment} from "react";
import dummydata from '../dummydata.json'
import '../styles/tablez.css'
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import ViewButton from "../components/viewButton";
import { useNavigate } from "react-router-dom";



function Tablez(){
    const navigate=useNavigate();
    const [records,setRecords]=useState(dummydata);
    const [editRecordId,setEditRecordId]=useState(null);
    function calculateAge(dateOfBirth) {
        const birthdate = new Date(dateOfBirth);
        const age = Math.floor((Date.now() - birthdate) / (365.25 * 24 * 60 * 60 * 1000));

        return age;
      }

    const handleEditClick=(event,record)=>{
        event.preventDefault();
        setEditRecordId(record.id);
        const formValues={
            first_name: record.first_name,
            last_name: record.last_name,
            age: calculateAge(record.age),
            gender: record.gender,
            email: record.email,
        }
        setEditFormData(formValues);
    }
    
    const [editFormData,setEditFormData] = useState({
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
        email: "",

    })
    const handleEditFormSubmit=(event)=>{
          event.preventDefault();

          const editedRecord={
            id: editRecordId,
            first_name:editFormData.first_name,
            last_name:editFormData.last_name,
            age:editFormData.age,
            gender:editFormData.gender,
            email:editFormData.email,
          }
          const newRecords=[...records];

          const index=records.findIndex((record)=> record.id===editRecordId);

          newRecords[index]=editedRecord;
          setRecords(newRecords);
          setEditRecordId(null);
    }
    const handleViewClick=(event,record)=>{
        event.preventDefault();
              <ViewButton record={record}/>
    }

    const handleEditFormChange=(event)=>{
        event.preventDefault();

        const fieldName=event.target.getAttribute("name");
        const fieldValue=event.target.value;

        const newFormdata={...editFormData};
        newFormdata[fieldName]=fieldValue;
        setEditFormData(newFormdata);
    }
return(
    <>
    <div><button style={{width:'170px', height:'50px' , background:"blue", color:"white"}} type='button' onClick={()=>navigate('/form')}>Form  Page</button></div>
    <div className="table-container">
<form onSubmit={handleEditFormSubmit}>
<table>

<thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Email Address</th>
        <th>Actions</th>
        
    </tr>
</thead>
<tbody>
    {
        records.map((record)=>(
           <Fragment>
            {
                editRecordId===record.id?(<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} />):(  <ReadOnlyRow record={record} handleEditClick={handleEditClick}
                    handleViewClick={handleViewClick}
                />)

            }
         
           </Fragment>
        ))
    }
  
</tbody>
</table>
</form>


</div>

</>
)
}
export default Tablez;