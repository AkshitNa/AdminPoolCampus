import { User, Link as LinkIcon, Plus } from "lucide-react";

import { useMyData } from "../Context/Provider";
import { useNavigate } from "react-router-dom";

const AccountInfo = () => {
  // Context Values
  const accountData = useMyData();

  const navigate = useNavigate();

  const handleClick = () => {
    const editProfileData = { username: accountData.username, email: accountData.email, password: accountData.password};
    navigate('/UserEditprofile', { state: editProfileData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-emerald-500 mb-8">
        Profile
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/4 flex flex-col space-y-6">
          {/* Share Profile Link Card */}
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-4">
                {" "}
                {accountData.username}{" "}
              </h2>
              <button className="flex items-center text-sm gap-2 text-orange-500 border border-orange-500 rounded-md px-4 py-2 hover:bg-orange-50">
                <LinkIcon className="w-4 h-4" />
                Share profile link
              </button>
            </div>
          </div>

          {/* Add Work Preferences Card */}
          <div className="bg-orange-50 rounded-lg p-6">
            <p className="mb-4">
              Let recruiters know what role you're looking for to make sure you
              find opportunities that are right for you.
            </p>

            <div className="flex justify-center gap-2 text-wrap text-sm">
              <button className="flex items-center gap-2 text-orange-500 border border-orange-500 rounded-md px-4 py-1 hover:bg-orange-50">
                <Plus className="w-4 h-4" />
                <div>Add work Preferences </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Centered Account Info Form */}
        <div className="border-2 border-black w-full md:w-36 bg-orange-50 flex-grow flex justify-center items-center">
          <div className="rounded-lg p-6 w-full max-w-xl">
            <h2 className="text-xl text-center font-semibold mb-6">Account Info</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username" className="block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="username"
                  value={accountData.username}
                  className="w-full p-2 rounded-md border border-gray-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={accountData.email}
                  className="w-full p-2 rounded-md border border-gray-300"
                />
              </div>

              <div className="flex justify-center">
                {/* Save Button */}
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  onClick={handleClick}
                >
                  Edit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
