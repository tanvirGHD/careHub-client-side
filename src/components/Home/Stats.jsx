import React from 'react';
import { FaHandHoldingHeart, FaSmile, FaMoneyBillWave, FaUsers } from 'react-icons/fa'; // React Icons
import CountUp from 'react-countup'; // For count-up animation

const Stats = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Total Campaign */}
        <div className="flex flex-col items-center text-center bg-[#E0EAFD] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaHandHoldingHeart className="text-4xl text-[#1d657a] mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">
            <CountUp end={2348} duration={3} />
          </h3>
          <p className="text-lg text-gray-600">Total Campaign</p>
        </div>

        {/* Satisfied Donors */}
        <div className="flex flex-col items-center text-center bg-[#D2F4F4] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaSmile className="text-4xl text-[#1d657a] mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">
            <CountUp end={1785} duration={3} />
          </h3>
          <p className="text-lg text-gray-600">Satisfied Donors</p>
        </div>

        {/* Fund Raised */}
        <div className="flex flex-col items-center text-center bg-[#f7efe3] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaMoneyBillWave className="text-4xl text-[#1d657a] mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">
            <CountUp end={4287} duration={3} />
          </h3>
          <p className="text-lg text-gray-600">Fund Raised</p>
        </div>

        {/* Happy Volunteers */}
        <div className="flex flex-col items-center text-center bg-[#CAE4F7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaUsers className="text-4xl text-[#1d657a] mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">
            <CountUp end={1294} duration={3} />
          </h3>
          <p className="text-lg text-gray-600">Happy Volunteers</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;