import React from 'react';
import Style from './Todo.module.css'

const Todo = (props) => {
    const { title, desc } = props.todo;
    const id = props.id;

    const handleClick = (id) => {
        props.handleRemoveTodo(id);
        // console.log(props.handleRemoveTodo)
    }

    return (
        <article className={Style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className={Style.btn} onClick={() => handleClick(id)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;