import React, { useContext } from 'react'
import TablePage from './TablePage'
import { Link } from 'react-router-dom'
import DataContext from './DataContext';

const AddNewStudentPage = () => {
const context=useContext(DataContext)

  return (
    <div>
      <div style={{fontSize:'30px',marginTop:'30px'}}>Student Details</div>
      <div>
        <Link to='/student'><button id='addButton'>Add New student</button></Link></div>

      <div>
        {context.entries.length ? <TablePage/>:''}
      </div>
    </div>
  )
}

export default AddNewStudentPage