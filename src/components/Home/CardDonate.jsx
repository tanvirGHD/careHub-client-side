

const CardDonate = () => {
  const cardColors = ['#CAE4F7', '#FDF0DD', '#D2F4F4', '#E0EAFD'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-17">
      {/* Card 1: Clean Water */}
      <div
        className="group relative max-w-[350px] overflow-hidden bg-white px-6 py-8 text-black shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2"
        style={{ backgroundColor: cardColors[0] }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Clean Water</h1>
            <p>Provide clean and safe drinking water to children in need. Your donation can help prevent waterborne diseases.</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#1b8efa] px-6 py-2 rounded-md hover:bg-[#0064c2] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Card 2: Education */}
      <div
        className="group relative max-w-[350px] overflow-hidden bg-white px-6 py-8 text-black shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2"
        style={{ backgroundColor: cardColors[1] }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Education</h1>
            <p>Support education for underprivileged children. Your contribution can help build schools and provide learning materials.</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#1b8efa] px-6 py-2 rounded-md hover:bg-[#0064c2] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Card 3: Surgery & Treatment */}
      <div
        className="group relative max-w-[350px] overflow-hidden bg-white px-6 py-8 text-black shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2"
        style={{ backgroundColor: cardColors[2] }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Surgery & Treatment</h1>
            <p>Help children access life-saving surgeries and medical treatments. Your donation can save lives.</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#1b8efa] px-6 py-2 rounded-md hover:bg-[#0064c2] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Card 4: Healthy Food */}
      <div
        className="group relative max-w-[350px] overflow-hidden bg-white px-6 py-8 text-black shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-2"
        style={{ backgroundColor: cardColors[3] }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Healthy Food</h1>
            <p>Provide nutritious meals to children in need. Your support can help fight malnutrition and hunger.</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#1b8efa] px-6 py-2 rounded-md hover:bg-[#0064c2] transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDonate;