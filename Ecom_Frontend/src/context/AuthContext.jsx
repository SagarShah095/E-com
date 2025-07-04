import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [matchId, setMatchId] = useState(null); // ✅ Store match result

  const API_URL = import.meta.env.VITE_API_URL;

  console.log(user, "User in AuthContext");
  
  // ✅ Verify token and user
  const verifyUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const response = await axios.get(`${API_URL}/api/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Verification failed:", error);
      setIsAuthenticated(false);
    }
  };

  // ✅ Fetch all user data
  const AllUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/getuser`);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("Error in fetching users:", error);
    }
  };

  useEffect(() => {
    AllUser();
    verifyUser();
  }, []);

  const refreshAuth = async () => {
    await verifyUser();
    await AllUser();
  };

  // console.log(user,"USerUSer")

  // ✅ Set matchId only when both user and data are available
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (user && data.length > 0) {
      const match = data.find((item) => item._id === user.id);
      setMatchId(match);
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        matchId,
        refreshAuth,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
