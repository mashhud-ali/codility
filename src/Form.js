import React, { useState } from 'react';
import FormSignup from './FormSignup';
import { Route, Switch } from 'react-router-dom';
import './Form.css';
import './Todo.css';
import TodoList from './TodoList';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <Switch>
            <div className="form-container">
                <div className="form-content-left">
                    <img src="img/img-5.svg" alt="loginImage" className="form-img" />
                </div>
                {!isSubmitted ? 
                (
                    <FormSignup submitForm={submitForm} />
                ) : 
                (<TodoList />)
                }
            </div>
                <Route path="/" component={FormSignup} />
                <Route path="/todo" component={TodoList} />
            </Switch>
        </>
    )
}

export default Form;
