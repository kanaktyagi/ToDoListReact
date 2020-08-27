import React from 'react'

function ToDoList(props) {
    return (
        <li>
            <button onClick={() => {
                props.onSelect(props.id)
            }}>D</button>
            {props.text}
        </li>
    )
}

export default ToDoList
