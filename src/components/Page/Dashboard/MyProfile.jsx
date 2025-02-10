import useAuth from "../../../hook/useAuth";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg shadow-md w-80 mx-auto bg-white"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {user?.photoURL ? (
          <motion.img
            src={user.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
            animate={{
              scale: [1, 1.1, 1], 
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : (
          <motion.div
            className="w-24 h-24 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full text-xl font-semibold"
            animate={{
              scale: [1, 1.1, 1], 
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            No Image
          </motion.div>
        )}

        <h2 className="mt-3 text-xl font-bold text-gray-800">
          {user?.displayName || "Unknown User"}
        </h2>
        <p className="text-gray-600">{user?.email || "No Email Available"}</p>
      </motion.div>
    </div>
  );
};

export default MyProfile;
