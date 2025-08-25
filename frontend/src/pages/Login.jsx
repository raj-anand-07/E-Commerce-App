/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const { token, setToken, navigate, backendUrl, getUserCart } =
    useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          sessionStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          sessionStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
      getUserCart(token);
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-25 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <div className="min-w-full">
          <label htmlFor="name" className="block mb-1 text-left">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            type="text"
            className="min-w-full px-3 py-2 border border-gray-800"
            placeholder="Your Name"
            required
          />
        </div>
      )}
      <div className="min-w-full">
        <label htmlFor="email" className="block mb-1 text-left">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          value={email}
          type="email"
          className="min-w-full px-3 py-2 border border-gray-800"
          placeholder="your@gmail.com"
          required
        />
      </div>
      <div className="min-w-full">
        <label
          htmlFor="password"
          className="mb-1 text-left flex justify-between"
        >
          Password
          {currentState === "Login" ? (
            <Link className="text-sm cursor-pointer font-normal">
              Forgot Password?
            </Link>
          ) : (
            ""
          )}
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          value={password}
          type="password"
          className="min-w-full px-3 py-2 border border-gray-800"
          placeholder="*******"
          required
        />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <div className="min-w-full">
          <label htmlFor="confirmPassword" className="block mb-1 text-left">
            Confirm Password
          </label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
            value={confirmPassword}
            type="password"
            className="min-w-full px-3 py-2 border border-gray-800"
            placeholder="*******"
            required
          />
        </div>
      )}

      <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer active:bg-gray-700">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>

      <div className="w-full flex justify-around text-sm mt-[-8px]">
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer py-2 mt-6"
          >
            Don't have an account?
            <span className="font-medium"> Register Now</span>
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer py-2 mt-6"
          >
            Already have an account?
            <span className="font-medium"> Login here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
