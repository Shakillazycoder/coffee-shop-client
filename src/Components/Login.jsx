import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Header from "./Header";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const HandleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user.metadata.lastSignInTime
        const user = { email, lastSignInTime };
        fetch("https://practice-coffee-server-beta.vercel.app/users", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              Swal.fire({
                icon: "success",
                title: "User logged in successfully",
                confirmButtonText: "ok",
              });
            }
 
         })
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonText: "ok",
        });
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={HandleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
              <p>
                Don&apos;t have an account?{" "}
                <Link to="/register">
                  <span className="text-blue-600 font-semibold hover:underline ml-1">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
