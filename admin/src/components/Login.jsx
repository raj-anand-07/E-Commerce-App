import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-10 text-center">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <label htmlFor="email" className="block font-medium mb-1 text-left">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              type="email"
              placeholder="your@email.com"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <label
              htmlFor="password"
              className="block font-medium mb-1 text-left"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              type="password"
              placeholder="Enter your password"
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer active:bg-gray-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
