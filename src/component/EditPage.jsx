import React, { useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function EditPage() {
   const context = useContext(DataContext);
   const location = useLocation(); // returns the location object 
   console.log(location.state.data) // the id present with the state property of the location object
   const navigate = useNavigate();
   const index = (location.state.data);

//    useEffect(() => {
//      return () => {
//         context.updateFunction(
//             (prevObj)=>{
//                 prevObj[index-1] = newObj;
//                 return (prevObj)
//             }
//            );
//      }
//    },[context])
   
    // array of objects : context.entries
    // function         : context.updateFunction


    // the object in which the changes will be done 
    const newObj = {
        Name : context.entries[index].Name,
        Age : context.entries[index].Age,
        Course : context.entries[index].Batch,
        Batch : context.entries[index].Age
        
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
       navigate('/');
    }


   return (
    <>
        <input onChange={handleChange} name='Name' placeholder= {context.entries[index].Name}></input>
        <input onChange={handleChange} name='Age'   placeholder= {context.entries[index].Age}></input>
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </>
  )
}

export default EditPage;