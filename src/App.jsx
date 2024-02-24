import React, { useState } from 'react'


const App = () => {

  const [data, setdata] = useState({

    "name": "",
    "email": "",
    "password": "",
    "city": ""
  })
  const handlechange = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value
    })
  }
  const submitbtn =(e)=>{
    e.preventDefault()

    console.log(data.name);
    console.log(data.email);
    console.log(data.password);
    console.log(data.city);

  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>name</label>
          <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" onChange={handlechange} />
        </div>
        <div className="form-group">
          <label >email</label>
          <input  name='email' type="email" className="form-control" id="exampleInputPassword1" placeholder="email" onChange={handlechange} />
        </div>
        <div className="form-group">
          <label >password</label>
          <input name='password' type="text" className="form-control" id="exampleInputPassword1" placeholder="password" onChange={handlechange} />
        </div>
        <div className="form-group">
          <label >city</label>
          <input name='city' type="text" className="form-control" id="exampleInputPassword1" placeholder="city" onChange={handlechange} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={submitbtn}>Submit</button>
      </form>

    </div>
  )
}

export default App
