import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const Register = () => {

    const [user,setUser] = useState([]);

    const {createNewUser} = useContext(AuthContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.photo.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // // console.log(name,photo,email,password)

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        createNewUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="w-1/3 mx-auto border-2">
        <h3 className="text-xl font-bold text-center pt-6">Register your account</h3>
        <form onSubmit={handleSubmit} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="Enter your email adress" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-neutral rounded-none">Register</button>
    </div>
    <p className="text-center p-2">Already Have An Account? Please <Link to="/auth/login" className="text-red-500">Login</Link></p>
  </form>
    </div>
    );
};

export default Register;