import React, { useReducer, useRef, useEffect, useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password' || name === 'confirmPassword') {
      dispatch({ type: 'field', field: name, value });
      // Check if passwords match
      if (name === 'confirmPassword' && value !== state.password) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    } else {
      dispatch({ type: 'field', field: name, value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match before submitting
    if (state.password !== state.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    // Store data in localStorage
    localStorage.setItem('user', JSON.stringify(state));
    console.log('User data stored:', state);
    // Clear the email field in the state
    dispatch({ type: 'field', field: 'email', value: '' });
    // Set submitted state to true
    setSubmitted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 50px)', backgroundColor: '#003366'}}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center' }}>Hi!{'\u{1F44B}'}Users</h2>
        <h5 style={{ textAlign: 'center' }}>Enter your details to connect with us </h5>
        {submitted ? (
          <p style={{ textAlign: 'center', color: 'green' }}>Thank you for signing up</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={state.firstName} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} ref={firstNameRef} autoFocus required />
            <input type="text" name="lastName" placeholder="Last Name" value={state.lastName} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
            <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', color: '#000' }} required />
            <input type="tel" name="contact" placeholder="Contact" value={state.contact} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', color: '#000' }} required />
            <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', color: '#000' }} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleChange} style={{ width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', color: '#000' }} required />
            {passwordMatchError && <p style={{ color: 'red', textAlign: 'center' }}>Passwords do not match</p>}
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none' }}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
