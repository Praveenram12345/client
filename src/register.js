import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './App.css';  // Import CSS file

export default function Register() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    let item = { name, email, password, amount: 0 };

    try {
      await axios.post('https://server-2-gc2e.onrender.com/create', item);
      setMessage("Registration Successful! 🎉");
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage("Error: Unable to register. Try again.");
    }
  };

  return (
    <div className="rg-container">
      <h1 className="form-heading1">Create Account</h1>

      {message && <p className="message">{message}</p>}

      <Form className="custom-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 custom-form-group">
          <Form.Label className="custom-label">Name:</Form.Label>
          <Form.Control
            className="custom-input"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 custom-form-group">
          <Form.Label className="custom-label">Email address:</Form.Label>
          <Form.Control
            className="custom-input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 custom-form-group">
          <Form.Label className="custom-label">Password:</Form.Label>
          <Form.Control
            className="custom-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="custom-button" variant="primary" type="submit">
          Register Now
        </Button>
      </Form>
    </div>
  );
}
