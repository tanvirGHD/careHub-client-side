
import img from '../../assets/5477976.jpg';

const LearnCareHub = () => {
  return (
    <div className="md:flex items-center justify-center py-12 px-4">
      {/* Left Section: Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={img}
          alt="CareHub"
          className="w-[550px] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Content */}
      <div className="md:w-1/2 md:pl-4">
        <h3 className="text-3xl font-bold text-blue-600 mb-2">Welcome to CareHub</h3>
        <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
          A world where poverty will not exist
        </h1>
        <h3 className="text-3xl font-bold text-gray-700 mb-4">
          We are the largest crowdfunding platform
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn.
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnCareHub;