import React from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        {/* Input fields for signing up */}
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already have an account? Log in!</Link>
    </div>
  );
}

export default SignUpPage;
