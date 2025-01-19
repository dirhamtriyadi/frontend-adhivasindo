import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import Pemrograman from "../../assets/pemrograman.jpg";

const Dashboard: React.FC = () => {
  return (
    <section className="w-full px-2 space-y-6 flex flex-col rounded-lg">
      <div className="bg-purple-600 p-5 rounded-lg text-white">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-yellow-400 py-2">Pemrograman</h1>
            <h1 className="text-2xl font-semibold text-gray-100">Pemrograman Frontend Modern <br /> dengan React dan Angular</h1>
            <p className="mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum amet ex cum earum mollitia quod, dolore harum delectus ducimus error architecto cupiditate maxime libero iure? Dicta sint nihil non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati dolorum amet itaque ducimus necessitatibus delectus labore exercitationem laborum asperiores quibusdam dolorem similique est sequi dolor, non excepturi suscipit! Quisquam.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-row items-center">
                <FaRegUser />
                <span className="text-lg ml-2">Pemateri By Josep</span>
              </div>
              <div className="flex flex-row items-center">
                <IoCalendarOutline  />
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
  )
}

export default Dashboard;