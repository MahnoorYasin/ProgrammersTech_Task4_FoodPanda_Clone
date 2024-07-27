import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://localhost:5000/api/createruser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
        })
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        setError(json.errors ? json.errors : "Failed to create user");
      } else {

        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} id="geolocation" placeholder="Enter your address" />
          </div>
          <button type="submit" className="btn btn-success w-100">Submit</button>
          <Link to="/Login" className="btn btn-danger w-100 mt-2">Already a user</Link>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
