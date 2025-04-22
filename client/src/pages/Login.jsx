import { Link } from "react-router-dom";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset()
        console.log(email, password);
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="bor p-5 rounded-lg space-y-5 ">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="submit" className="bor w-full rounded-md">Login</button>
                </div>
                <button className="bor w-full rounded-md">Guest Credentials</button>
                <Link to="/sign-up">Register</Link>
            </form>
        </div>
    );
};

export default Login;