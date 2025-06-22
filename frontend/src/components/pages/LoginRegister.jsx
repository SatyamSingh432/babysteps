import { useState, useEffect } from "react";
import { loginUser, registerUser, verifyToken } from "../../utils/apis.js";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        const res = await verifyToken(token);
        if (res) {
          navigate("/welcome");
        }
      }
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const registerChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("Login Form:", loginForm);
    try {
      const res = await loginUser(loginForm);
      if (res) {
        navigate("/welcome");
      }
      setLoginForm({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const registerFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Register Form:", registerForm);
    try {
      const res = await registerUser(registerForm);
      if (res) {
        navigate("/welcome");
      }
      setRegisterForm({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full border max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin ? (
          <form className="space-y-4" onSubmit={registerFormSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="username"
                value={registerForm.username}
                onChange={registerChangeHandler}
                autoComplete="username"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={registerChangeHandler}
                autoComplete="email"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={registerChangeHandler}
                autoComplete="new-password"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={registerForm.confirmPassword}
                onChange={registerChangeHandler}
                autoComplete="new-password"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Confirm password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 cursor-pointer rounded-lg  transition"
            >
              Register
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={loginFormSubmit}>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={loginChangeHandler}
                autoComplete="email"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={loginChangeHandler}
                autoComplete="current-password"
                required
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg   cursor-pointer transition"
            >
              Login
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
