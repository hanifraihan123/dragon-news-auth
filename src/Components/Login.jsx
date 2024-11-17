import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const Login = () => {

  const {userLogin,setUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(result=>{
      const user = result.user
      setUser(user)
    })
    .catch(error=>{
      alert(error.message)
    })
  }
    return (
        <div className="w-1/3 mx-auto border-2">
            <h3 className="text-xl font-bold text-center pt-6">Login your account</h3>
            <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email adress</span>
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
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
        <p className="text-center p-2">Don't Have An Account? <Link to="/auth/register" className="text-red-500">Register</Link></p>
      </form>
        </div>
    );
};

export default Login;