import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/", {
        email,
        password
      });

      if (email === "admin" && password === "admin") {
        navigate("/HomeAdmin");
      } else if (response.data === "exist") {
        navigate("/Home", { state: { id: email } });
      } else if (response.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details");
      console.log(error);
    }
  }

  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?cs=srgb&dl=pexels-scott-webb-305821.jpg&fm=jpg')", backgroundSize: 'cover', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ fontWeight: '700', fontSize: '40px', textAlign: 'center', marginTop: '60px', color: 'black' }}>
          "Planting: where hope takes root"
        </div>
        <div style={{ backgroundColor: '#cde5cc', width: '470px', height: '320px', margin: 'auto', borderRadius: '30px', marginTop: '30px' }}>
          <div style={{ marginLeft: '20%', marginTop: '15px', height: '90px', color: 'white', fontSize: '50px', color: 'black' }}>GREENCART</div>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '15px', marginBottom: '30px', marginLeft: '22px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            style={{ backgroundColor: 'white', width: '425px', height: '60px', borderRadius: '20px', marginTop: '4px', marginLeft: '22px', paddingLeft: '50px', color: '#D4D0D0' }}
          />
          <button
            type='submit'
            onClick={submit}
            style={{ backgroundColor: '#cde5cc', marginLeft: '50%', transform: 'translateX(-50%)', marginTop: '50px', borderRadius: '15px', fontWeight: '500', padding: '5px 15px 5px 15px', fontSize: '20px', color: 'black' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
