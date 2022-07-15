import React from 'react'

export default function Item({id,name,date,time, deleteData}) {
function deleteItem (){
    deleteData (function (prev){
    return prev.filter (item => item.id !== id)
    })
}

  return (
    <div className='item'>
    <p>{name}</p>
    <p>{`${date} ${time}`}</p>
    <button onClick={deleteItem} className='remove'>Delete</button>
    </div>
  )
}
