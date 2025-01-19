import { useState } from "react";
import { LuLayoutGrid, LuUsers } from "react-icons/lu";
import { FaRegNewspaper, FaRegUser } from "react-icons/fa6";
import { IoChatboxEllipsesOutline, IoSettingsOutline, IoCalendarOutline, IoNotificationsOutline, IoMailUnreadOutline } from "react-icons/io5";
import { IoIosPower, IoIosSettings, IoIosArrowForward } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Adhivasindo from "./assets/adhivasindo.png";
import Computer from "./assets/computer.jpg";
import Image from "./assets/merah.jpg";
import Pemrograman from "./assets/pemrograman.jpg";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Section Left */}
      <div className="text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 flex items-center">
          <div className="flex items-center cursor-pointer w-60">
            <button
              id="menuButton"
              className="text-gray-100 text-3xl lg:hidden hover:text-gray-400"
              onClick={toggleMenu}
            >
              <BsList color="black" />
            </button>
            <img src={Adhivasindo} alt="Adhivasindo" height={40} width={40} />
            <span className="text-2xl font-semibold">Adhivas<span className="text-blue-600">indo</span></span>
          </div>
          <div className="flex items-center w-full">
            <div className="relative hidden lg:flex justify-between items-center w-full">
              <div className="flex justify-between items-center ml-10">
                <h1 className="text-2xl font-semibold">LEARNING MANAGEMENT SYSTEM</h1>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-600 rounded-md p-2">
                  <CiSearch size={30} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search className..."
                    className="w-full px-4 bg-transparent outline-none text-gray-200"
                  />
                </div>
                <div className="flex items-center">
                  <IoNotificationsOutline size={30} />
                </div>
                <div className="flex items-center">
                  <IoMailUnreadOutline size={30} />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 gap-4 relative">
          {/* Sidebar */}
          <aside
            id="sidebar"
            className={`w-60 min-h-screen rounded-se-3xl flex flex-col bg-gray-800 p-2 py-5 shadow-lg z-50 transition-transform duration-300 ease-in-out 
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 fixed top-0 left-0`}
          >
            <nav className="space-y-4 p-4">
              <a href="#" className="flex items-center bg-white space-x-3 text-gray-900 hover:bg-gray-700 p-3 rounded-md">
                <LuLayoutGrid /> <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <FaRegNewspaper /> <span>Modul</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <LuUsers /> <span>Peserta</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <IoChatboxEllipsesOutline /> <span>Group  Chat</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <FaRegUser /> <span>Pemateri</span>
              </a>
              <hr />
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <IoSettingsOutline /> <span>Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <IoCalendarOutline /> <span>Kalender</span>
              </a>
              <hr />
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md">
                <IoIosPower /> <span>Logout</span>
              </a>
            </nav>
          </aside>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Main Content */}
          <main className={`flex-1 flex flex-col transition-all duration-300 ${isMenuOpen ? "lg:pl-60" : "lg:pl-0"} w-full`}>
            <section className="w-full px-2 space-y-6 flex flex-col rounded-lg">
              <div className="bg-purple-600 p-5 rounded-lg text-white">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold text-yellow-400 py-2">Pemrograman</h1>
                    <h1 className="text-2xl font-semibold text-gray-100">Pemrograman Frontend Modern <br /> dengan React dan Angular</h1>
                    <p className="mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum amet ex cum earum mollitia quod, dolore harum delectus ducimus error architecto cupiditate maxime libero iure? Dicta sint nihil non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati dolorum amet itaque ducimus necessitatibus delectus labore exercitationem laborum asperiores quibusdam dolorem similique est sequi dolor, non excepturi suscipit! Quisquam.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex flex-row items-center">
                        <FaRegUser />
                        <span className="text-lg ml-2">Pemateri By Josep</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <IoCalendarOutline />
                        <span className="text-lg ml-2">14-06-2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <button className="font-semibold bg-white text-black rounded-lg px-4 py-2 text-sm w-[60%] h-16">MULAI LEARNING</button>
                  </div>
                </div>
              </div>
              <div className="px-2 rounded-lg">
                <h1 className="text-2xl font-semibold">MODUL KOMPETENSI</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
                  <img className="w-full rounded-xl" src={Pemrograman} alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-md mb-2">MATERI KOMPETENSI</div>
                    <table className="text-sm">
                      <tr className="border-b border-black">
                        <td>Pemrograman Frontend Modern dengan React dan Angular</td>
                      </tr>
                      <tr className="bg-yellow-300 border-b border-black">
                        <td>Pengembangan API Berstandar Industridengan GraphQL dan REST</td>
                      </tr>
                      <tr>
                        <td>Menerapkan Clean Code dan Desain Pattern dalam Pengembangan Software</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
                  <div className="w-full h-56 border border-black bg-red-400 rounded-xl flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold">CREATIVE MARKETING</h1>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-md mb-2">MATERI KOMPETENSI</div>
                    <table className="text-sm">
                      <tr className="border-b border-black">
                        <td>Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi</td>
                      </tr>
                      <tr className="border-b border-black">
                        <td>Pemasaran Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar</td>
                      </tr>
                      <tr>
                        <td>Memaksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6">
                  <div className="w-full h-56 border border-black bg-yellow-300 rounded-xl flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold">MANAGEMENT SDM</h1>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-md mb-2">MATERI KOMPETENSI</div>
                    <table className="text-sm">
                      <tr className="border-b border-black">
                        <td>Storytelling dalam Pemasaran: Mengubah Data menjadi Cerita yang Menginspirasi</td>
                      </tr>
                      <tr className="border-b border-black">
                        <td>Pemasaran Viral: Bagaimana Menciptakan Konten yang Cepat Menyebar</td>
                      </tr>
                      <tr>
                        <td>Memaksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="px-2 rounded-lg">
                <h1 className="text-2xl font-semibold">NILAI PESERTA</h1>
              </div>
              <table className="min-w-full text-left text-sm overflow-x-auto">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Modul</th>
                    <th>Point</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="h-20">
                    <td>1</td>
                    <td>Parija faija</td>
                    <td>PEMROGRAMAN</td>
                    <td>L1</td>
                    <td>1,234 Point</td>
                  </tr>
                  <tr className="h-20">
                    <td>2</td>
                    <td>Dirham</td>
                    <td>PEMROGRAMAN</td>
                    <td>L1</td>
                    <td>1,234 Point</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>

      {/* Section Right */}
      <div className="mt-6 px-10">
        <div className="flex flex-col w-96">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-row">
              <img src={Image} alt="User Avatar" className="w-32 h-32 rounded-full border border-gray-600" />
              <IoIosSettings />
            </div>
            <div className="flex flex-col mt-4 items-center">
              <h1 className="text-lg font-semibold">SELAMAT DATANG, DIRHAM</h1>
              <p className="text-xs">Di LMS by Adhivasindo</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center mt-10  bg-gray-800  rounded-xl">
            <p className="text-white mt-4">{`< April 2025 >`}</p>
            <div className="flex flex-row gap-2 py-8">
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Su</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>1</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Mo</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>2</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Tu</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>3</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>We</p>
                <div className="text-white bg-gray-800 border border-gray-400 rounded-md p-2 text-center">
                  <p>4</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Th</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>5</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Fr</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>6</p>
                </div>
              </div>
              <div className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                <p>Sa</p>
                <div className="text-black bg-white border border-gray-400 rounded-md p-2 text-center">
                  <p>7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 ">
            <h2 className="text-lg font-semibold">JADWAL PEMATERI</h2>
            <div className="flex flex-col gap-8 mt-4">
              <div className="flex flex-row items-center">
                <div className="w-10 h-10 rounded-md border border-gray-600 bg-purple-600"></div>
                <div className="flex flex-col ml-2">
                  <h1 className="text-md font-semibold">Storyteling dalam Pemasaran</h1>
                  <p className="text-xs">09:00 - 11:00 With mr.ijam</p>
                </div>
                <div className="flex flex-col ml-14">
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-10 h-10 rounded-md border border-gray-600 bg-orange-400"></div>
                <div className="flex flex-col ml-2">
                  <h1 className="text-md font-semibold">Pemrograman Frontend Modern</h1>
                  <p className="text-xs">12:00 - 14:00 With mr.firman</p>
                </div>
                <div className="flex flex-col ml-14">
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-10 h-10 rounded-md border border-gray-600 bg-yellow-300"></div>
                <div className="flex flex-col ml-2">
                  <h1 className="text-md font-semibold">Pengembangan API</h1>
                  <p className="text-xs">14:30 - 15:30 With mr.Parija</p>
                </div>
                <div className="flex flex-col ml-14">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 ">
            <img src={Computer} alt="User Avatar" className="w-full h-40 rounded-lg" />
          </div>
          <div className="flex flex-col mt-4 ">
            <div className="w-full h-40 rounded-lg bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
