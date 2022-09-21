import "/mao.css";
import { useState } from "react";
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function App() {
    let auth = getAuth();
    const [data, setData] = useState({});
    const handleInput= (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({...data, ...newInput});
    };
    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((Response) =>{
        console.log(Response.user)
    }) 
    .catch((err) => {
        alert(err.message)
    })
    };
    return (
        <div className="App">
            <input 
            name="email"
            placeholder="Email"
            onChange={(event) => handleInput(event)}
            />
            <input 
            name="password"
            placeholder="password"
            onChange={(event) => handleInput(event)}
            />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
