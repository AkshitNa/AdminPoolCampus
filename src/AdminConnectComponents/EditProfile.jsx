import { User, Link as LinkIcon, Plus } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';  // For form data management and useEffect
import axios from 'axios';  // Import axios
import { toast } from "react-toastify";

import { useMyData } from "../Context/Provider";

const Profile = () => {
  // Context Values
  const profileData = useMyData();

  const location = useLocation();
  const { state } = location;

  // State for form data
  const [username, setUsername] = useState(state.username || "");
  const [email, setEmail] = useState(state.email || "");
  const [userId, setUserId] = useState(null);  // State to store the user ID
  
  // useEffect to call the API and fetch user ID
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const findUserResponse = await axios.post("http://localhost:8080/api/users/find", {
          username: state.username,
          password: state.password,
          email: state.email,
        });

        const id = findUserResponse.data; // Get the user ID from the response
        setUserId(id); // Store user ID in the state
      } catch (error) {
        toast.error("An error occurred while fetching user ID.");
        console.error("Error fetching user ID:", error);
      }
    };

    fetchUserId();
  }, [state.username, state.password, state.email]); // Depend on user data

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      toast.error("User not found. Cannot update profile.");
      return;
    }

    try {
      // Update User API request
      const updateUserResponse = await axios.put(`http://localhost:8080/api/users/${userId}`, {
        username: username,
        email: email,
      });

      if (updateUserResponse.status === 200) {
        toast.success("Profile updated successfully!");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error("There was an error with the API request:", error);
      toast.error("An error occurred while updating the profile.");
    }
  };

   // Context Values
   const editProfileData = useMyData();

  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/Userprofile');
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-emerald-500 mb-8">Edit Profile</h1>

      <div className="w-full flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="w-full md:w-1/4 flex flex-col space-y-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-4"> {profileData.username} </h2>
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
            <h2 className="text-xl font-semibold mb-6 text-center">Account Info</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username" className="block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => {setUsername(e.target.value); editProfileData.setUsername(e.target.value)}}  // Update username state
                  placeholder="Enter Name"
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
                  value={email}
                  onChange={(e) => {setEmail(e.target.value); editProfileData.setEmail(e.target.value)}}  // Update email state
                  placeholder="Enter Email Address"
                  className="w-full p-2 rounded-md border border-gray-300"
                />
              </div>

              <div className="flex justify-center">
                {/* Save Button */}
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
