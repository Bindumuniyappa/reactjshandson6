import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUsePage from './ContactUsePage';
import HomePage from './HomePage';
import TablePage from './TablePage';
import DataContext from './DataContext';
import EditPage from './EditPage';
import AddNewStudentPage from './AddNewStudentPage';

function RoutingPage() {
    const [data, setData] = useState([{ Name: 'john', Age: 26 ,Course:'MERN',Batch:'october',Change:''},
{ Name: 'Doe', Age: 25 ,Course:'MERN',Batch:'November',Change:''}, 
{ Name: 'Biden', Age: 26 ,Course:'MERN',Batch:'September',Change:''},
{ Name: 'Barar', Age: 22 ,Course:'MERN',Batch:'September',Change:''},
{ Name: 'Christ', Age: 23 ,Course:'MERN',Batch:'october',Change:''},
{ Name: 'Elent', Age: 24 ,Course:'MERN',Batch:'November',Change:''}]);
  return (
    <>
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='tablepage' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
            <TablePage/>
         </DataContext.Provider>
      }/>

    <Route path='editpage' element={<EditPage/>}/>
    {/* <Route path='editpage' element={<DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <EditPage/>
        </DataContext.Provider>}/> */}
    <Route path='addnewstudent' element={<AddNewStudentPage/>}/>
    <Route path='contactusepage' element={<ContactUsePage/>}/>

    {/* <Route path='/addStudent' element={
        <DataContext.Provider value={{entries : data, updateFunction : setData}}>
          <EditPage/>
        </DataContext.Provider>
      }/> */}
       
    </Routes>
    </>
  )
    }

export default RoutingPage;