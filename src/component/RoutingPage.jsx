import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUsePage from './ContactUsePage';
import HomePage from './HomePage';
import DataContext from './DataContext';
import AddNewStudentPage from './AddNewStudentPage';
import StudentPage from './StudentPage';

function RoutingPage() {
    const [data, setData] = useState([]);

    const dispatchUserEvent=(actionType,payload)=>{
      switch(actionType){
        case 'ADD_USER':
          setData([...data,payload.newUser]);
          return;
        case 'EDIT_USER':
          setData(payload.newuser);
          return;
        default:
          return;
      }
    };
  return (
    <>
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/addnewstudent' element={<DataContext.Provider value={{entries : data, dispatchUserEvent}}>
            <AddNewStudentPage/>
         </DataContext.Provider>
      }/>
      <Route path='contactuspage' element={<ContactUsePage/>}/>
      
      <Route path='/student' element={<DataContext.Provider value={{entries : data, dispatchUserEvent}}>
            <StudentPage/>
         </DataContext.Provider>
      }/>
      <Route path='/student/:id' element={<DataContext.Provider value={{entries : data, dispatchUserEvent}}>
            <StudentPage/>
         </DataContext.Provider>
      }/>
    </Routes>
    </>
  )
    }

export default RoutingPage;