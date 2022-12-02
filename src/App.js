import { useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header'
import User from './components/User'
import Modal from './components/Modal'
import axios from 'axios';

function App() {
  const [users,setUsers]=useState([]);
  const [filteredUsers,setFilteredUsers]=useState([]);
  const [search,setSearch]=useState([]);
  const [user,setUser]=useState();
  const [modal,setModal]=useState(true);
  const styles={
    color:"black",
    padding:"50px",
    backgroundColor:"white",
    width:"22vw",
    right:"auto",
    left:"35%",
  };
  const openModal=(user)=>{
    setModal(true);
    setUser(user);
  }
  const getUsers=async()=>{
    let response=await axios.get("https://randomuser.me/api?results=15");
    let r=response.data;
    console.log(r)
    setUsers(r.results)
    setFilteredUsers(r.results);
  }
  useEffect(()=>{
     (async()=>{
      await getUsers();
     })()
  },[])
  useEffect(()=>{
    let filtered=users.filter((user)=>(user.name.first.toLowerCase()+" "+user.name.last.toLowerCase()).includes(search))
    
    search?setFilteredUsers(filtered):setFilteredUsers(users)
    console.log(filteredUsers)
  },[search])
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <div className="users">
      {filteredUsers?filteredUsers.map((user,i)=><User onClick={openModal} key={i} user={user}/>):""}
      </div>
      {user?
      <Modal user={user} styles={styles} modal={modal} setModal={setModal}/>
      :""
      }
    </div>
  );
}
export default App;
