import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link, useNavigate } from "react-router";
import { register } from "../../features/authSlice";
import { RegisterCredentials } from "../../types/auth";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState<RegisterCredentials>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(formData))
      .unwrap()
      .then(() => navigate("/login"))
      .catch(() => {});
  };

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-96">
      <h1 className="font-semibold text-2xl text-center">Register</h1>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-md my-4">
          <p className="error">{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Nama
          </label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Example"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
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
          <Link to={"/login"} className="text-sm text-blue-500 hover:underline">
            Sudah punya akun?
          </Link>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
