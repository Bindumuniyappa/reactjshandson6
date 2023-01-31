import React, { useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function EditPage() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) // the id present with the state property of the location object
   const navigate = useNavigate();
   const index = (location.state.data);

    // the object in which the changes will be done 
    const newObj = {
        name : context.entries[index].name,
        age : context.entries[index].age,
        course : context.entries[index].course,
        batch : context.entries[index].batch
        
    }

    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(context.entries[index])
       context.updateFunction(
        (prevObj)=>{
            prevObj[index] = newObj;
            return (prevObj)
        }
       );
       navigate('/student');
    }
   return (
    <>
        <input onChange={handleChange} name='name' placeholder= {context.entries[index].name} className='inputCon'></input>
        <input onChange={handleChange} name='age'  placeholder= {context.entries[index].age} className='inputCon'></input>
        <input onChange={handleChange} name='course'  placeholder= {context.entries[index].course} className='inputCon'></input>
        <input onChange={handleChange} name='batch'  placeholder= {context.entries[index].batch} className='inputCon'></input>
        <br/>
        <br/>
        <button onClick={handleUpdate} id='update_btn'>Update</button>
    </>
  )
}

export default EditPage;