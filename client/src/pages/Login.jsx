import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const { data } = await axios.post(" http://localhost:2000/user/login", { email, password }, { headers: { "Content-Type": "application/json" } })

            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/chats")
            alert("Registration Successful!")
            form.reset()
            console.log(email, password);
        } catch {
            alert("error occured");
        }
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
                <button type="button" className="bor w-full rounded-md">Guest Credentials</button>
                <Link to="/sign-up">Register</Link>
            </form>
        </div>
    );
};

export default Login;