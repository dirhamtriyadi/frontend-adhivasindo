import { FaRegNewspaper, FaRegUser } from "react-icons/fa6";
import { IoIosPower } from "react-icons/io";
import { IoCalendarOutline, IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutGrid, LuUsers } from "react-icons/lu";
import { Link, useLocation } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/authSlice";

interface SidebarLeftProps {
    isMenuOpen: boolean;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ isMenuOpen }) => {
    const dispatch = useAppDispatch();

    const location = useLocation();

    const isActiveRoute = (path: string) => location.pathname === path;

    return (
        <>
            <aside
                id="sidebar"
                className={`w-60 min-h-screen rounded-se-3xl flex flex-col bg-gray-800 p-2 py-5 shadow-lg z-50 transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 fixed top-0 left-0`}
            >
                <nav className="space-y-4 p-4">
                    <Link
                        to={'/'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <LuLayoutGrid /> <span>Dashboard</span>
                    </Link>
                    <Link
                        to={'/modul'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/modul') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <FaRegNewspaper /> <span>Modul</span>
                    </Link>
                    <Link
                        to={'/peserta'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/peserta') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <LuUsers /> <span>Peserta</span>
                    </Link>
                    <Link
                        to={'/group-chat'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/group-chat') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <IoChatboxEllipsesOutline /> <span>Group Chat</span>
                    </Link>
                    <Link
                        to={'/pemateri'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/pemateri') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <FaRegUser /> <span>Pemateri</span>
                    </Link>
                    <hr />
                    <Link
                        to={'/settings'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/settings') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <IoSettingsOutline /> <span>Settings</span>
                    </Link>
                    <Link
                        to={'/kalender'}
                        className={`flex items-center space-x-3 p-3 rounded-md ${isActiveRoute('/kalender') ? 'bg-white text-gray-800' : 'text-gray-300 hover:bg-gray-700'}`}
                    >
                        <IoCalendarOutline /> <span>Kalender</span>
                    </Link>
                    <hr />
                    <button
                        className="flex w-full items-center space-x-3 text-gray-300 hover:bg-gray-700 p-3 rounded-md"
                        onClick={() => dispatch(logout())}
                    >
                        <IoIosPower /> <span>Log out</span>
                    </button>
                </nav>
            </aside>
        </>
    )
}

export default SidebarLeft;