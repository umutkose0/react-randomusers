import React,{useState} from "react"
import ReactModal from "react-modal"
const Modal=({styles,modal,setModal,user})=>{
    ReactModal.setAppElement('#root');

    const customStyles={
        content:{
            ...styles
        }};
    return (
        <ReactModal
        isOpen={modal}
        onRequestClose={()=>{setModal(false)}}
        style={customStyles}
        contentLabel="User Profile"
        >
            <h2></h2>
        <button onClick={()=>{setModal(false)}}>X</button>
        <div className="user">
            <img src={user.picture.large}/>
            <p>{user.name.title} {user.name.first} {user.name.last}</p>
            <p>Age:{user.dob.age}  Nick:{user.login.username}</p>
            <div className="address">
                <h3>Address</h3>
            <p>{user.location.country}</p>
            <p>{user.location.city}/{user.location.state}</p>
            <p>{user.location.street.name}</p>
            </div>
        </div>
        </ReactModal>
    );
}
export default Modal;
