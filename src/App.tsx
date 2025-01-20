import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Modul from "./pages/Modul";
import Peserta from "./pages/Peserta";
import GroupChat from "./pages/GroupChat";
import PrivateRoute from "./components/PrivateRoute";
import Pemateri from "./pages/Pemateri";
import Settings from "./pages/Settings";
import Kalender from "./pages/Kalender";
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
          <Route path="/pemateri" element={<Pemateri />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/kalender" element={<Kalender />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
