
import './App.css'

function App() {
  const handleform=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.name.value;
    const user={name,email}
    console.log(user);
    fetch('http://localhost:7000/users',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('login sucsess')
        form.reset()
      }
    })
  }

  return (
    <>
      <h1>LOGIN TO WEBSITE</h1>
      <form onSubmit={handleform}>
        <input type="text" name='name' placeholder='type your name'/>
        <br />
        <input type="email" name='email' placeholder='type your email'/>
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
