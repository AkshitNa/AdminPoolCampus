import Student01 from "../../assets/StudentEnrolls/Student01.png";
import Student02 from "../../assets/StudentEnrolls/Student02.png";
import Student03 from "../../assets/StudentEnrolls/Student03.png";
import Student04 from "../../assets/StudentEnrolls/Student04.png";

import EnrollUser from "../../assets/StudentEnrolls/EnrollUser.png";

const EnrollStudents = () => {
  const studentImages = [
    Student01, 
    Student02,
    Student03,
    Student04
  ];

  return (
    <div className="bg-white py-1 px-2 rounded-2xl shadow-lg min-w-[5rem] text-center border">
      {/* Top Icon */}
      <div className="flex justify-center mb-2">
        <img 
          src={EnrollUser}
          alt="User Icon"
          className="w-9 h-9 rounded-full"
        />
      </div>

      {/* Text */}
      <h2 className="text-xs md:text-sm font-semibold">Students Enrolls</h2>
      <p className="text-xs md:text-sm font-bold">45+</p>

      {/* Student Avatars */}
      <div className="flex justify-center mt-1 space-x-[-10px]">
        {studentImages.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Student ${index + 1}`} 
            className="w-6 h-6 md:w-9 md:h-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
    </div>
  );
};

export default EnrollStudents;
