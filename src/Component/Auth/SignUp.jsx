import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../CSS/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const keys = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (name.includes("geolocation.")) {
      const keys = name.split(".");
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geolocation: {
            ...prev.address.geolocation,
            [keys[1]]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Basic Information</h3>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="name.firstname"
              value={formData.name.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="name.lastname"
              value={formData.name.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Address Information</h3>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Number:</label>
            <input
              type="text"
              name="address.number"
              value={formData.address.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Zipcode:</label>
            <input
              type="text"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Latitude (Geolocation):</label>
            <input
              type="text"
              name="address.geolocation.lat"
              value={formData.address.geolocation.lat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Longitude (Geolocation):</label>
            <input
              type="text"
              name="address.geolocation.long"
              value={formData.address.geolocation.long}
              onChange={handleChange}
              required
            />
          </div>
          <p className="login-link">
            Already have an account? <NavLink to="/">LogIn</NavLink>
          </p>
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
