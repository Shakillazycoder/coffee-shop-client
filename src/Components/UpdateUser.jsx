import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateUser = () => {
    const updateUser = useLoaderData();
    const handleUpdateUser = e => {
        e.preventDefault()
        const form= e.target;
        const user = {
            name: form.name.value,
            email: form.email.value,
        }
        fetch(`https://practice-coffee-server-beta.vercel.app/users/${updateUser._id}`, {
            method: "PUT",
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
                        title: "User updated successfully",
                        confirmButtonText: "ok",
                    });
                }
            })
    }
    return (
        <div>
          <Header></Header>
            <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <h1 className="text-5xl font-bold">Update User</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                    defaultValue={updateUser.name}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter image url"
                    className="input input-bordered"
                  />
                </div>
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
                    defaultValue={updateUser.email}
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default UpdateUser;