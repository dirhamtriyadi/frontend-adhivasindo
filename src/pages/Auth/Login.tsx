import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link, useNavigate } from "react-router";
import { login } from "../../features/authSlice";
import { LoginCredentials } from "../../types/auth";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(formData))
      .unwrap()
      .then(() => navigate("/dashboard"))
      .catch(() => {});
  };

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <h1 className="font-semibold text-2xl text-center">Login</h1>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-md my-4">
          <p className="error">{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="mb-4 flex justify-end">
          <Link to={"/register"} className="text-sm text-blue-500 hover:underline">
            Belum punya akun?
          </Link>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
