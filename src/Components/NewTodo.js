import React, { useState } from 'react';
import Style from './NewTodo.module.css';

const NewTodo = (props) => {

    const [todo, setTodo] = useState({ title: "", desc: "" });
    const { title, desc } = todo;


    const handleChange = (e) => {
        // setTodo({...todo, [e.target.name]: e.target.value });
        const name = e.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({ title: "", desc: "" })
    }



    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style["form-field"]}>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' value={title} onChange={handleChange} />
            </div>
            <div className={Style["form-field"]}>
                <label htmlFor="desc">Description</label>
                <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    );
};

export default NewTodo;