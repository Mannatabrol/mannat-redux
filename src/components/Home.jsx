import React from 'react';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 50px)', backgroundColor: '#003366' }}>
      <h2>Home Page</h2>
      <div style={{ maxWidth: '600px', width: '100%', margin: 'auto' }}>
        <img src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" alt="Login Screen" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Home;
