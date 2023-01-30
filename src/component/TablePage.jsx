import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './DataContext';


const handleAdd = ()=>
{
    console.log("Add called")
}

function TablePage() {
  const context = useContext(DataContext);
  // context is the value that we have provided
  console.log(context);
  return (
    <>
    <div style={{fontSize:'30px',marginTop:'30px'}}>Student Details</div>
    <Link to='/addnewstudent'><button onClick={handleAdd} id='addButton'>Add New student</button></Link>
    <table border={1} width='80%' cellPadding={10} id='tableDesign'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {
        context.entries.map((item,index) => (
          // each item is an object
            <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Age}</td>
            <td>{item.Course}</td>
            <td>{item.Batch}</td>
            <td>{item.Change}<Link to='/editpage' state={{data:index}}>
                    Edit
                </Link>
            </td>
            
              {/* Pass the ID of the row to fetch the data in the edit compoennt */}
                {/* <Link to='/editpage' state={{data:item.id}}>
                    Edit
                </Link>  */}
            
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default TablePage;
