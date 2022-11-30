import { useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header'
import User from './components/User'
import axios from 'axios';

function App() {
  const [users,setUsers]=useState([]);
  const getUsers=async()=>{
    let response=await axios.get("https://randomuser.me/api?results=15");
    let r=response.data;
    console.log(r)
    setUsers(r.results)
  }
  useEffect(()=>{
     (async()=>{
      await getUsers();
     })()
  },[])

  return (
    <div className="App">
      <Header/>
      <div className="users">
      {users?users.map((user,i)=><User key={i} user={user}/>):""}
      </div>
    </div>
  );
}

export default App;
