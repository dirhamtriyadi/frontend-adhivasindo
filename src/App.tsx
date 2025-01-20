import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Modul from "./pages/Modul";
import Peserta from "./pages/Peserta";
import GroupChat from "./pages/GroupChat";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modul" element={<Modul />} />
          <Route path="/peserta" element={<Peserta />} />
          <Route path="/group-chat" element={<GroupChat />} />
          <Route path="/pemateri" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/kalender" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
