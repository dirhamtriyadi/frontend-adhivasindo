import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SectionRight from "./components/SectionRight";
import Dashboard from "./pages/Dashboard";
import Modul from "./pages/Modul";
import Peserta from "./pages/Peserta";
import GroupChat from "./pages/GroupChat";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen">
      {/* Section Left */}
      <div className="text-gray-900 min-h-screen flex flex-col w-[100%]">
        {/* Header */}
        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

        <div className="flex flex-1 gap-4 relative">
          {/* Sidebar */}
          <SidebarLeft isMenuOpen={isMenuOpen} />

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Main Content */}
          <main className={`flex-1 flex flex-col transition-all duration-300 ${isMenuOpen ? "lg:pl-60" : "lg:pl-0"} w-full`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Dashboard />} />
              <Route path="/modul" element={<Modul />} />
              <Route path="/peserta" element={<Peserta />} />
              <Route path="/group-chat" element={<GroupChat />} />
              <Route path="/pemateri" element={<Dashboard />} />
              <Route path="/settings" element={<Dashboard />} />
              <Route path="/kalender" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>

      {/* Section Right */}
      <SectionRight />
    </div>
  );
}

export default App;
