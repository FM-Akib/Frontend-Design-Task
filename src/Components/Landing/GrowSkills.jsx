import growskils1 from '../../assets/Rectangle 7.png'
import CodeLearningCentre from './CodeLearningCentre';
const GrowSkills = () => {
  return (
    <div className="bg-purple-50 py-16 px-32">
      {/* Title Section */}
      <div className=" mb-8">
        <h3 className="text-lg text-purple-600">Let&apos;s Learn together to</h3>
        <h1 className="text-4xl font-bold text-gray-900">Grow Your Skills</h1>
      </div>

      {/* Content Section */}
      <div className="flex  items-center gap-16">
        {/* Image Section */}
        <div className="relative">
          <img
            src={growskils1}
            alt="growskils1"
            className="rounded-lg"
          />
  
        </div>

        {/* Steps Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#4B44BB] text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
            <div>
              <h4 className="text-xl font-bold">Describe Your Learning Skills</h4>
              <p className="text-gray-600">There are many variations of passages of Lorem Ipsum available...</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#4B44BB] text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
            <div>
              <h4 className="text-xl font-bold">Select Course</h4>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-[#4B44BB] text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
            <div>
              <h4 className="text-xl font-bold">Keep track of your experts</h4>
            </div>
          </div>

          {/* Get Started Button */}
          <button className="bg-white border border-purple-500 text-purple-500 px-6 py-2 rounded-md hover:bg-[#4B44BB] hover:text-white transition duration-200">
            Get Started
          </button>
        </div>
      </div>
      <CodeLearningCentre/>
    </div>
  );
};

export default GrowSkills;
