import React from "react"
const User=({user,onClick})=>{
    return (
        <div  className="user" onClick={()=>{onClick(user)}}>  
            <img title={user.login.username} src={user.picture.large}/>
            <p>{user.name.title} {user.name.first} {user.name.last}</p>
            <p>Age:{user.dob.age}  Nick:{user.login.username}</p>
        </div>
    );
}
export default User;
