import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { Login, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const handleLogin = (event) => {
      event.preventDefault();
      setSuccess(false);
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      Login(email, password)
        .then((user) => {
          const currentUser = user.user;
          console.log(currentUser);
          setError("");
          setSuccess(true);
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.error(err);
          const errorMessage = err.message;
          setError(errorMessage);
        });
    };
    //github
  
    const handleGithubSignIn = () => {
      githubSignIn()
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((err) => {
          setError(err);
        });
    };
  
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-4/5 h-4/5 rounded-full"
              src="Hiring.svg"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl text-emerald-400 font-bold">Login now</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <p className="text-red-500">{error}</p>
                  {success && (
                    <p className="text-success p-2">logged in successfully</p>
                  )}
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </div>
              </form>
              {/* <p>or</p>
              <button onClick={handleGithubSignIn} className="btn">
                Sign in with github
              </button> */}
              <p className="mt-3 text-lg">
                Don't have an account? <Link className="bg-green-400 rounded px-2 hover:bg-green-300 font-semibold" to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Login;