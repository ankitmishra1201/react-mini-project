import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import UsersList from "./UsersList";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }


    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                description: 'Please enter valid input'

            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Age cant be negative',
                description: 'Please enter Positive Number'

            })
            return;
        }
        console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge)

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler=()=>{
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} description={error.description} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </div>
    );
};

export default AddUser;