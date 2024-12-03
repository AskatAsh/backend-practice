import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        login(email, password)
        .then(userCredentials => {
            // console.log(userCredentials.user);
            const userInfo = userCredentials.user;
            const user = {
                email,
                lastLoginAt: userInfo?.metadata?.lastSignInTime
            }
            // update last logged at in the database
            fetch('http://localhost:5000/user', {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => {
                if(data.modifiedCount === 1){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated last login time successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                      form.reset();
                }
            })
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
            // console.error(error);
        })
    }
    return (
        <div className="hero py-10 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="py-6 max-w-md text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D2B48C] text-[#331A15]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;