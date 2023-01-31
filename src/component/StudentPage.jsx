import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useLocation,useNavigate} from 'react-router-dom'
import DataContext from './DataContext';


const StudentPage = () => {
    const context =useContext(DataContext);
    const data=useLocation();
    const navigate=useNavigate();

    const [state,setDetails]=useState({
        name:'',
        age:'',
        course:'',
        batch:''
    });

    useEffect(()=>{
        if(data.state !==null){
            setDetails({
                name:data.state.details.name,
                age:data.state.details.age,
                course:data.state.details.course,
                batch:data.state.details.batch
            })
        }
    },[data])

    const changeHandler=(e)=>{
        setDetails({...state,[e.target.name]:e.target.value});
    }

    const submit=()=>{
        if(data.state===null){
            context.dispatchUserEvent('ADD_USER',{newUser:state});
            navigate('/addnewstudent')
        }else{
            const newState=context.entries.map((obj,index)=>{
                if(index===data.state.id){
                    let myObj={...obj};
                    myObj['name']=state.name;
                    myObj['age']=state.age;
                    myObj['course']=state.course;
                    myObj['batch']=state.batch;
                    return myObj;
                }
                return obj;
            });
            context.dispatchUserEvent('EDIT_USER',{newUser:newState});
            navigate('/addnewstudent');
        }
    }
  return (
    <div><input type='text' placeholder='name' name="name" value={state.name} className='inputCon' onChange={changeHandler}/>
        <input type='number' placeholder='age'name="age" value={state.age} className='inputCon' onChange={changeHandler}/>
        <br/>
        <br/>
        <input type='text' placeholder='course' name="course" value={state.course} className='inputCon' onChange={changeHandler}/>
        <input type='text' placeholder='batch' name="batch" value={state.batch} className='inputCon' onChange={changeHandler}/>
        <br/>
        <br/>
        <br/>
        <Link to='/addnewstudent'><button  className='btn_btn'>Cancel</button></Link>
        <button className='btn_btn' onClick={submit}>{data.state===null ? 'Submit' : 'Update'}</button></div>
  )
}

export default StudentPage