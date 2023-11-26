import { useState } from "react";
import React from 'react'
import './signup.css'
import { auth, db } from '../../config/firebase-config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from "firebase/firestore";


export function Signup() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    signupType: 'student',
  });

  const handleButtonClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      signupType: value,
    }));
  };
  const userRef = collection(db, "users")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        // setSubmitButtonDisabled(false)
        const user = res.user;
        await updateProfile(user, { displayName: formData.name })
        // navigate("/")
        const docRef = await addDoc(userRef, {
          name: formData.name,
          email: formData.email,
          signupType: formData.signupType
        });
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false)
        // setLoading(false)
        // setErrorMsg(err.message)
        console.log(err)
      })
  };

  // console.log(formData);signupPage

  return (
    <div className="signupPage">
      <div className="signupPage-left">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <br />

          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <br />

          {/* Password */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />

          <br />

          {/* Confirm Password */}
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />

          <br />

          {/* Signup as Student or Recruiter */}
          <label>
            <input
              type="radio"
              id="student"
              name="signupType"
              value="student"
              checked={formData.signupType === 'student'}
              onChange={() => handleButtonClick('student')}
              style={{ display: 'none' }}
            />
            <div
              className={`button-label ${formData.signupType === 'student' ? 'active' : ''}`}
              onClick={() => handleButtonClick('student')}
            >
              Student
            </div>
          </label>

          <label>
            <input
              type="radio"
              id="recruiter"
              name="signupType"
              value="recruiter"
              checked={formData.signupType === 'recruiter'}
              onChange={() => handleButtonClick('recruiter')}
              style={{ display: 'none' }}
            />
            <div
              className={`button-label ${formData.signupType === 'recruiter' ? 'active' : ''}`}
              onClick={() => handleButtonClick('recruiter')}
            >
              Recruiter
            </div>
          </label>

          <br />

          {/* Submit Button */}
          <input type="submit" value="Signup" />
        </form>
      </div>
      <div className="signupPage-right">
        <h1>Hello, Friends !!</h1>
        <h3>Register with your personal detail to use all of the site features !</h3>
        <button>Register</button>
      </div>
    </div>
  )
}

