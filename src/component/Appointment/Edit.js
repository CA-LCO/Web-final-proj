import React from 'react';
import {useState} from 'react';
import {v4} from 'uuid';

export default function Edit({add}) {
    const [name,setName] = useState ("")
    function nameChange(e){
        setName(e.target.value)
    }

    const [date,setDate] = useState ("")
    function dateChange(e){
        setDate(e.target.value)
    }

    const [time,setTime] = useState ("")
    function timeChange(e){
        setTime(e.target.value)
    }

    function addItem(){
        add(function (prevData){
            return [
            {   
                id: v4 (),
                name,
                date,
                time
            },
            ...prevData,
        ];
    });
    }
  return (
    <div>
        <h1>Make An Appointment At Our Showroom</h1>
        <p>Name:</p>
        <input type="text" value={name} onChange={nameChange}/>
        <p>Date:</p>
        <input type="date" value={date} onChange={dateChange}/>
        <p>Time:</p>
        <input type="time"  value={time} onChange={timeChange} />
        <button onClick={addItem} className='add'>Confirm</button>

    </div>
  )
}
