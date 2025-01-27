import React, {createContext, useContext, useState} from "react";

// Create a context "UserContext"
const UserContext = createContext(); 

// Storing the value of UserContext in "useMyData" using "useContext Hook"
export const useMyData = () => useContext(UserContext); //Custom Hook

// Creating "Provider Component" so to share value among those
// components which are wrapped by "Provider Component" ONLY.

function Provider ({ children }) {

  // Putting various States in the "UserContext" Here::
  const [adminPool, setAdminPool] = useState(false); //01
  const [campusPool, setCampusPool] = useState(false); //02
  const [username, setUsername] = useState("Akshit"); //03
  const [password, setPassword] = useState("12345"); //04
  const [email, setEmail] = useState(""); //05
  const [register, setRegister] = useState(false); //06
  
  const values = { adminPool, setAdminPool, campusPool, setCampusPool, username, setUsername, password, setPassword, email, setEmail, register, setRegister};

  return (  
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
}

// The "component Provider" is used to wrap other components
export default Provider;