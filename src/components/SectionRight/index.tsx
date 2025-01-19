import { IoIosArrowForward, IoIosSettings } from "react-icons/io";
import Image from "../../assets/merah.jpg";
import Computer from "../../assets/computer.jpg";

const SectionRight: React.FC = () => {
    return (
        <div className="mt-6 px-10">
            <div className="flex flex-col">
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
                <div className="flex flex-col justify-between items-center mt-10 px-2 bg-gray-800  rounded-xl">
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
    )
}

export default SectionRight;