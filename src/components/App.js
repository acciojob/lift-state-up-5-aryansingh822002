import React, { useState } from "react";
import './../styles/App.css';

// Child Component for the login form
const LoginForm = ({ onLogin }) => {
  // This function is called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the default browser action of reloading the page
    event.preventDefault();
    // Call the onLogin function that was passed down from the parent
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

// Parent Component
const App = () => {
  // 1. The isLoggedIn state is held in the parent component.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. This function updates the parent's state. It will be passed to the child.
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {
        // Conditionally render content based on the isLoggedIn state
        isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          // 3. Pass the handleLogin function to the child as a prop named onLogin
          <LoginForm onLogin={handleLogin} />
        )
      }
    </div>
  );
};

export default App;
