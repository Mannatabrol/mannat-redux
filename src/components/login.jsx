import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: '',
  isLoggedIn: false, // Track login state
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'login':
      return {
        ...state,
        isLoggedIn: true, 
      };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'field', field: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === state.email && storedUser.password === state.password) {
      dispatch({ type: 'login' }); 
      alert('Thank you for logging in!'); 
      console.log('Invalid credentials');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 50px)', backgroundColor: '#003366' }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Page</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
          <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} required />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}>Submit</button>
        </form>
        {state.isLoggedIn && <p style={{ textAlign: 'center', marginTop: '10px' }}>You have logged Sucessfully!</p>} {/* Show message if isLoggedIn is true */}
      </div>
    </div>
  );
};

export default Login;
