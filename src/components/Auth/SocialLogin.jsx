
import useAuth from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';
// import useAxiosSecure from '../../hook/useAxiosSecure';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
//     const axiosSecure = useAxiosSecure
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate('/');
          //   const userInfo = {
          //       email: result.user?.email,
          //       name: result .user?.displayName
          //   }
          //   axiosSecure.post('/users', userInfo)
          //   .then(res =>{
          //       console.log(res.data);
               //  navigate('/');
          //   })
        })
    }


    return (
        <div className="w-full mx-auto mt-2">
          <div className='divider'>OR</div>
        {/* Google Sign-in */}
        <button className='px-12 cursor-pointer rounded-lg text-white py-3 bg-green-500' onClick={handleGoogleSignIn} 
        
        >
          Google Login
        </button>
        
      </div>
    );
};

export default SocialLogin;