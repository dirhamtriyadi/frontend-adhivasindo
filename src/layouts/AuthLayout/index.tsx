import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
