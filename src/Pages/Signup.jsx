import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/Signup", {
        email,
        password,
        firstName,
        lastName
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        navigate("/"); // Redirect to the login page
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?cs=srgb&dl=pexels-scott-webb-305821.jpg&fm=jpg')", backgroundSize: 'cover', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ fontWeight: '700', fontSize: '40px', textAlign: 'center', marginBottom: '60px',color:'black' }}>
          "Planting: where hope takes root"
        </div>
        <div style={{ backgroundColor: '#cde5cc', width: '470px', height: '400px', borderRadius: '30px', marginTop: '30px', padding: '20px' }}>
          <div style={{ marginLeft: '20%', marginTop: '15px', height: '90px', color: 'blac', fontSize: '50px' }}>GREENCART</div>
          <input
            type='text'
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '15px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <input
            type='text'
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '4px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '4px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '4px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
        </div>
        <button
          type='submit'
          onClick={submit}
          style={{ backgroundColor: 'black', marginTop: '30px', borderRadius: '15px', fontWeight: '500', padding: '5px 15px 5px 15px', fontSize: '20px', color: 'white' }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
