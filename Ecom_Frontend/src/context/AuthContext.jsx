// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  const verifyUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await axios.get(`${API_URL}/api/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user); // ✅ Make sure this is correct
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Verification failed:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const storedUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/auth/getuser`);
        setData(response?.data?.data);
      } catch (error) {
        console.log(error, "error in Home");
      }
    };
    // if (storedUser) {
    //   setUser();
    // }
    storedUser();
  }, []);

  useEffect(() => {
    verifyUser(); // ✅ Call it once on app load
  }, []);

  const matchId = data.find((item) => item._id === user.id);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated, matchId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
