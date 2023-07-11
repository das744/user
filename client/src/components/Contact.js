import React,{useState} from 'react'
import axios from 'axios';

const Contact = () => {
 
    const [user, setUser] = useState({
        name:'',
        pho: '',
        message:''
    })
    const handleChange=(e)=>{
      const {name, value} = e.target;
      setUser({...user, [name]: value})
    
    }

const sendUserInfo =(e)=>{
    e.preventDefault();
    console.log(user)
   

    // const newUser ={
    //   name : user.name,
    //   pho : user.pho,
    //   message : user.message,
    // }
    //     axios
    //     .post("http://localhost:5000/createUser", newUser)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    //     setUser({
    //       name:'',
    //       pho: '',
    //       message:''
    //     });
      
// }; or

    axios
    .post("/createUser", user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    setUser({
      name:'',
      pho: '',
      message:''
    });
    alert('user added');
};


  return (
    <div>
      <form>
              <input 
              type="text"
              name="name"
              onChange={handleChange}
              value={user.name}
              placeholder="User Name" />
              <input 
              type="number"
              name="pho"
              onChange={handleChange}
              value={user.pho}
              placeholder="User Pho number" />
              <input 
              type="text"
              name="message"
              onChange={handleChange}
              value={user.message}
              placeholder="Message" />

              <button className="btn" onClick={sendUserInfo}>Submit</button>
        </form>

    </div>
  )
}

export default Contact