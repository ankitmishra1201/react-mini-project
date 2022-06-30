import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, {useState} from "react";

function App() {
  const[usersList,setUsersList]=useState([]);

  const AddUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name:uName,age:uAge, id: Math.random().toString()}]

    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
     

    </div>
  );
}

export default App;
