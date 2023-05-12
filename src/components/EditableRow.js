import React from 'react'

const EditableRow = ({editFormData,handleEditFormChange}) => {
  return (
    <tr>
        <td>

         <input type="text" required="required"
           placeholder='Enter a first name'
             name="first_name" 
            value={editFormData.first_name}
             onChange={handleEditFormChange}></input>
              </td>
        <td>

            <input type="text" required="required"
            placeholder='Enter a last name'
            name="last_name" 
            value={editFormData.last_name}
            onChange={handleEditFormChange}></input>
        </td>
        <td>
            <input type="text" required="required"
            placeholder='Enter age'
            name="age"
            value={editFormData.age}
            onChange={handleEditFormChange} ></input>
        </td>
        <td>   
            <input type="text" required="required"
            placeholder='Enter gender'
            name="gender" 
            value={editFormData.gender}
            onChange={handleEditFormChange}>
                </input>
            </td>
        <td>  
             <input type="text" required="required"
            placeholder='Enter email'
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange} ></input>
        </td>
       <td><button type='submit'> Save</button>
       </td>
       
    </tr>
  )
}

export default EditableRow