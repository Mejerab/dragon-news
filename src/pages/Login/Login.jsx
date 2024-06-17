import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    console.log('added', location);
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            // Navigate
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-[752px] bg-base-200 mx-auto mt-5 rounded">
                <h2 className="text-2xl py-10 font-semibold border-b text-center text-[#403F3F] mx-16">Login your account</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold ">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="text-[#F75B5F] font-bold" to="/register">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;