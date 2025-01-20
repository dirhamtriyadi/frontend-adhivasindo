import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import SidebarLeft from "../../components/SidebarLeft";
import SectionRight from "../../components/SectionRight";

const MainLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen">
      {/* Section Left */}
      <div className="text-gray-900 min-h-screen flex flex-col w-[100%]">
        {/* Header */}
        <Navbar toggleMenu={toggleMenu} />

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
          <main
            className={`flex-1 flex flex-col transition-all duration-300 ${
              isMenuOpen ? "lg:pl-60" : "lg:pl-0"
            } w-full`}
          >
            <Outlet />
          </main>
        </div>
      </div>

      {/* Section Right */}
      <SectionRight />
    </div>
  );
};

export default MainLayout;
