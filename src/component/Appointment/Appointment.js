import React from 'react';
import Edit from './Edit';
import List from './List';
import {useState} from 'react';

const Appointment =() => {
  const [data,setData] =useState([])

  return <div className='app-appointment'>
    <Edit add={setData}/>
    <List listData={data} deleteData={setData} />
  </div>
}

export default Appointment;