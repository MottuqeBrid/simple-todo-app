import React from 'react';
import Todo from './Todo';

import Style from './Todos.module.css';

const Todos = (props) => {
    // console.log('Todos', props.todos);
    return (
        <section className={Style.todos}>
            {
                props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id} id={todo.id} handleRemoveTodo={props.onRemoveTodo} />)
            }
        </section>
    );
};

export default Todos;