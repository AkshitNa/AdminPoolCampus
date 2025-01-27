import Placement01 from "../assets/Courses/Placement01.png";
import Placement02 from "../assets/Courses/Placement02.png";
import Placement03 from "../assets/Courses/Placement03.png";
import Placement04 from "../assets/Courses/Placement04.png";
import Placement05 from "../assets/Courses/Placement05.png";
import Placement06 from "../assets/Courses/Placement06.png";

const purchases = [
  {
    title: "C/C++ Programming Language",
    duration: "1 Year",
    price: "$2,300",
    originalPrice: "$4,560",
    image: Placement01,
  },
  {
    title: "Learn Java Programming",
    duration: "10-12 Months",
    price: "$3,100",
    originalPrice: "$5,160",
    image: Placement02,
  },
  {
    title: "JavaScript Basic from Scratch",
    duration: "1 Year",
    price: "$5,700",
    originalPrice: "$7,720",
    image: Placement03,
  },
  {
    title: "Learn HTML for Web Development",
    duration: "1 Year",
    price: "$2,500",
    originalPrice: "$3,100",
    image: Placement04,
  },
  {
    title: "Learn CSS for Web Development",
    duration: "1 Year",
    price: "$6,000",
    originalPrice: "$7,760",
    image: Placement05,
  },
  {
    title: "Web Development",
    duration: "1 Year",
    price: "$6,000",
    originalPrice: "$7,760",
    image: Placement06,
  },
];

const Purchases = () => {
  return (
    <div className="p-6 font-lato">
      <h1 className="text-2xl text-btn-green font-semibold mb-4">Purchases</h1>
      <h2 className="text-xl text-btn-green font-semibold mb-6 border-b-2 border-btn-green">
        Payment History
      </h2>

      <div className="flex flex-col text-wrap space-y-6 md:px-10">
        
        {purchases.map((purchase, index) => (
          <div
            className="flex flex-row min-w-[19rem] justify-between p-2 bg-orange-100 rounded-lg shadow-md"
            key={index}
          >
            {/* Image and Details */}
            <div className="flex text-sm md:text-lg items-center text-wrap space-x-2 md:space-x-6">
              <img
                src={purchase.image}
                alt={purchase.title}
                className="w-[3.5rem] h-[3.5rem] md:w-24 md:h-24 rounded-md object-cover"
              />
              <div>
                <h3 className="text-sm md:text-lg font-medium text-gray-900 truncate max-w-[200px] md:max-w-full">
                  {purchase.title}
                </h3>
                <p className="text-gray-600">Duration: {purchase.duration}</p>
              </div>
            </div>

            {/* Pricing Details */}
            <div className="flex flex-col justify-center items-baseline md:items-end mt-4 md:mt-0">
              <div className="text-sm md:text-lg font-bold text-gray-800">{purchase.price}</div>
              <div className="text-xs md:text-sm text-gray-500 line-through">{purchase.originalPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
