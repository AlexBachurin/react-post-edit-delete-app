import React from 'react'

import ListItem from './ListItem'

export default function List(props) {
    return (
        <>
            {props.list.map((item) => {
                return (
                    <ListItem item={item}  {...props} />
                )
            })}
            <button onClick={props.clearList} type='button' className='clear-btn'>clear All</button>
        </>
    )
}
