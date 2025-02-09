import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();



  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.imageURL)
        .then(() =>{
          console.log('user profile info updated')
          reset();
          toast.success("User successfully registered!");
          navigate('/');
        })
        .catch((error) => {
          toast.error(error.message);
          console.error("Error:", error);
        });
        console.log("User created:", loggedUser);
      })
  };
  

  return (
    <div className="flex justify-center items-center md:mt-24 px-4">
      <div className="flex flex-col md:flex-row bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        {/* Left Side Form */}
        <div className="w-full md:w-2/3 p-6 md:p-10">
          <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Create Account</h2>
          <p className="text-gray-500 text-sm mb-6 text-center md:text-left">Please register below account detail</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* User name */}
            <div>
              <label className="text-gray-600 text-sm block mb-1">First Name</label>
              <input
                {...register("name", { required: "First Name is required" })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="First Name"
              />
              <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
            </div>

            {/* User email */}
            <div>
              <label className="text-gray-600 text-sm block mb-1">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Email"
              />
              <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
            </div>

            {/* Image URL Input */}
            <div>
              <label className="text-gray-600 text-sm block mb-1">Image URL</label>
              <input
                {...register("imageURL", { required: "Image URL is required" })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Image URL"
              />
              <p className="text-red-500 text-sm mt-1">{errors.imageURL?.message}</p>
            </div>

            {/* Password */}
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
              className="w-full bg-yellow-500 text-white py-3 rounded-md text-lg font-medium hover:bg-yellow-600 transition"
            >
              Create
            </button>
          </form>
        </div>

        {/* Right Side Login Info */}
        <div className="w-full md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-6 md:p-8">
          <p className="text-gray-700 text-sm">Already an account holder?</p>
          <button className="w-full border border-yellow-500 text-yellow-500 py-3 rounded-md mt-2 font-medium hover:bg-yellow-100 transition">
            <Link to='/login'>Log in</Link>
          </button>

          <p className="text-gray-500 text-xs mt-6 text-center">
            <span className="text-yellow-500 font-semibold">*Terms & conditions.</span> Your privacy and security are important to us.
            For more information on how we use your data, read our <span className="text-yellow-500 font-semibold">privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Register;