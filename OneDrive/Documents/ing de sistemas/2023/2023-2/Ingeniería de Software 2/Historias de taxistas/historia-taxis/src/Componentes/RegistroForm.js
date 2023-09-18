import { useState } from "react";

function RegistroForm(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );



}






//import 
export { RegistroForm };