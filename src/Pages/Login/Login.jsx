import React, { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const password = target.email.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .then((error) => {
        const errorCode = error.code
        
        setErrorMessage(errorCode);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {errorMessage && <p> {errorMessage}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              <Link to="/">Login</Link>
            </button>
            <p className="font-semibold text-center my-2 text-sm">
              Dont have any account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Regiser
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
