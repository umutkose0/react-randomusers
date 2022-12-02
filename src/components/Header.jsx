import React from "react"
const Header=({search,setSearch})=>{
    return (
        <header>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder="search in users..."/>
        </header>
    );
}
export default Header;
