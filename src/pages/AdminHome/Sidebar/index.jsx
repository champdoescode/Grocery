import { ChevronFirst, ChevronLast, MoreVertical, LayoutDashboard, ClipboardList, Layers, Users, LogOut, LifeBuoy, Settings, MessageSquare } from "lucide-react";
import logo from "../../../../public/images/2.png";
import profile from "../../../../public/images/profile.png";
import { createContext, useContext, useState } from "react";
import Dashboard from '../AdminDashboard/index';
import AddProducts from "../AddProducts/index";

// Define icons for sidebar items
const icons = {
    dashboard: <LayoutDashboard size={20} />,
    addProducts: <Layers size={20} />,
    customers: <Users size={20} />,
    orders: <ClipboardList size={20} />,
    messages: <MessageSquare size={20} />,
    feedback: <LifeBuoy size={20} />,
    logout: <LogOut size={20} />,
    settings: <Settings size={20} />,
};

const SidebarContext = createContext();

export default function Sidebar() {
    const [expanded, setExpanded] = useState(true);
    const [activeComponent, setActiveComponent] = useState('dashboard');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'addProducts':
                return <AddProducts />;
            case 'dashboard':
                return <Dashboard />;
            // Add cases for other components here
            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <aside className="h-screen fixed top-0 left-0 z-[101]">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} alt="logo" />
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded ? <ChevronFirst /> : <ChevronLast />}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">
                            <SidebarItem icon={icons.dashboard} text="Dashboard" onClick={() => setActiveComponent('dashboard')} active={activeComponent === 'dashboard'} />
                            <SidebarItem icon={icons.addProducts} text="Add Products" onClick={() => setActiveComponent('addProducts')} active={activeComponent === 'addProducts'} />
                            
                        </ul>
                    </SidebarContext.Provider>

                    {/* Profile section */}
                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md" alt="profile" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold">AdminProfile</h4>
                                <span className="text-xs text-gray-600">@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Render the active component */}
            <main className="ml-64 p-4">
                {renderComponent()}
            </main>
        </>
    );
}

function SidebarItem({ icon, text, onClick, active }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li 
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`} 
            onClick={onClick}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        </li>
    );
}
