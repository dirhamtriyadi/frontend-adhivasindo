import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMailUnreadOutline, IoNotificationsOutline } from "react-icons/io5";
import Adhivasindo from "../../assets/adhivasindo.png";

interface NavbarProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuOpen }) => {
    return (
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
    )
}

export default Navbar;