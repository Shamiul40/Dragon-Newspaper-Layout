import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Register = () => {
  const { createUser , setUser } = use(AuthContext);
  console.log(createUser);

  const handleRegister = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const email = target.email.value;
    const password = target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo UrL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center my-2 text-sm">
              Already have an account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
