import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log("Submitting:", data);
    
    signIn(data.email, data.password)
      .then((result) => {
        console.log("Login success:", result.user);
        toast.success("Successfully logged in!"); 
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error("Login failed:", error);
        toast.error(error.message || "Login failed!"); 
      });
  };
  

  return (
    <div className="flex justify-center items-center md:py-10 px-4 ">
      <div className="flex flex-col md:flex-row bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        {/* Left Side Login Form */}
        <div className="w-full md:w-2/3 p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left text-[#174E5F]">Login</h2>
          <p className="text-gray-500 text-sm mb-6 text-center md:text-left">Please login with your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-gray-600 text-sm block mb-1">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
            </div>

            <div>
              <label className="text-gray-600 text-sm block mb-1">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Password"
              />
              <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#174E5F] text-white py-3 rounded-md text-lg font-medium hover:bg-[#35606d] transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side Register Info */}
        <div className="w-full md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-6 md:p-8">
          <p className="text-gray-700 text-sm">Do not have an account?</p>
          <button className="w-full border border-[#174E5F] cursor-pointer py-3 rounded-md mt-2 font-medium hover:bg-[#517783] transition hover:text-white text-[#174E5F]">
            <Link to='/register'>Register</Link>
          </button>
          <SocialLogin></SocialLogin>
          <p className="text-gray-500 text-xs mt-6 text-center">
            <span className="text-[#174E5F] font-semibold">*Forgot Password?</span> Reset your password securely.
          </p>
        </div>
      </div>
    </div>
  );
}
