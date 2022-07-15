import React from 'react';
import Item from './Item';

const List =({listData, deleteData}) =>{
    return <div className='list'>
        {
            listData.map ((item) =>{
                const {name, date, time, id} = item
                return <Item 
                key={id} 
                id={id} 
                name={name} 
                date={date} 
                time={time} 
                deleteData={deleteData} />
            })
        }
    </div>
}

export default List;