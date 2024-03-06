import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Newuser = () => {
    const userdata=useLoaderData()
const [user,setuser]=useState(userdata);
    const deletevanthandlar=_id=>{
        console.log('delete',_id)
        fetch(`http://localhost:7000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletecount>0){
                const reminig=user.filter(user=>user._id!==_id)
                setuser(reminig)
                alert('delete succses') 
            }
        })
    }
    return (
        <div>
            <h1>{userdata.length}</h1>
            <div>
                {
                    userdata.map(userprofile=><p key={userprofile.id}>
                        {userprofile.name}
                        {userprofile.email}
                        {userprofile.id}
                        <Link to={`/update/${user._id}`}>
                            <button>update</button>
                        </Link>
                        <button onClick={()=>deletevanthandlar(userprofile._id)}>Delete</button></p>)
                }
            </div>
        </div>
    );
};

export default Newuser;