import axios from "axios"
import { useNavigate } from "react-router-dom"
import { imageUpload } from "../utils";
const SignUp = () => {
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const image = form.image.files[0];

        if (image === undefined) {
            alert("Image is required!");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const pic = await imageUpload(image)

        if (!name || !email || !password || !confirmPassword || !pic) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const { data } = await axios.post(" http://localhost:2000/user", { name, email, password, pic }, { headers: { "Content-Type": "application/json" } })

            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/chats")
            alert("Registration Successful!")

            form.reset()
            console.log(email, password, name,
                confirmPassword,
                image);
        } catch {
            alert("error occured");
        }

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="bor p-5 rounded-lg space-y-5 ">
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <div className="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" />
                </div>
                <div>
                    <button type="submit" className="bor w-full rounded-md">Sign Up</button>
                </div>

            </form>
        </div>
    );
};

export default SignUp;