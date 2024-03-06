import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userdata=useLoaderData();
    const handleevant=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email)
    }
    return (
        <div>
            <h1>{userdata.name}</h1>
            <form onClick={handleevant}>
                <input type="text" name='name' defaultValue={userdata?.name}/>
                <br />
                <input type="email" name='email' defaultValue={userdata?.email}/>
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;