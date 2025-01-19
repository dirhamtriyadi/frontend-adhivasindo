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
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
                            <div key={index} className="flex flex-col text-black bg-gray-50 rounded-md p-2 text-center border border-gray-50">
                                <p>{day}</p>
                                <div className={`text-black bg-white border border-gray-400 rounded-md p-2 text-center ${index === 3 ? "text-white bg-gray-800" : ""}`}>
                                    <p>{index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h2 className="text-lg font-semibold">JADWAL PEMATERI</h2>
                    <div className="flex flex-col gap-8 mt-4">
                        {[
                            { title: "Storytelling dalam Pemasaran", time: "09:00 - 11:00 With mr.ijam", color: "bg-purple-600" },
                            { title: "Pemrograman Frontend Modern", time: "12:00 - 14:00 With mr.firman", color: "bg-orange-400" },
                            { title: "Pengembangan API", time: "14:30 - 15:30 With mr.Parija", color: "bg-yellow-300" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-row items-center">
                                <div className={`w-10 h-10 rounded-md border border-gray-600 ${item.color}`}></div>
                                <div className="flex flex-col ml-2">
                                    <h1 className="text-md font-semibold">{item.title}</h1>
                                    <p className="text-xs">{item.time}</p>
                                </div>
                                <IoIosArrowForward className="ml-auto text-gray-600" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <img src={Computer} alt="User Avatar" className="w-full h-40 rounded-lg" />
                </div>
                <div className="flex flex-col mt-4">
                    <div className="w-full h-40 rounded-lg bg-gray-300"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionRight;
