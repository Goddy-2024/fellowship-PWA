import { useState } from "react";
import {
  Menu,
  LayoutDashboard,
  Users,
  Calendar,
  BarChart3,
  Mail,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#EFF1FF] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Menu
            size={28}
            className="text-gray-800"
            onClick={() => setOpen(true)}
          />

          <div>
            <h1 className="text-xl font-bold text-gray-900">Reports</h1>
            <p className="text-xs text-gray-500 -mt-1">
              Generate and view fellowship reports
            </p>
          </div>
        </div>

        <button className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 shadow hover:bg-blue-600 transition">
          Generate Report
        </button>
      </div>

      {/* Slide-out Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <h2 className="font-semibold text-gray-600 mb-4 flex items-center space-x-2">
            <Menu /> <span>NAVIGATION</span>
          </h2>

          {/* Menu Items */}
          <div className="space-y-3">

            <NavItem icon={<LayoutDashboard />} label="Dashboard" link="/dashboard"/>
            <NavItem icon={<Users />} label="Members" link="/members"/>
            <NavItem icon={<Calendar />} label="Events" link="/events"/>
            <NavItem icon={<BarChart3 />} label="Reports" link="/reports" />
            <NavItem icon={<Mail />} label="Email" link="/mailing"/>

          </div>

          {/* Sign Out */}
          <button className="mt-10 w-full bg-gray-200 py-3 rounded-md text-gray-700 font-semibold">
            <LogOut className="inline-block mr-2" size={20} /> Sign-out
          </button>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, label }) => (
  <button className="w-full bg-gray-100 hover:bg-gray-200 flex items-center space-x-3 px-4 py-3 rounded-md transition">
    <span>{icon}</span>
    <span className="text-gray-800 font-medium">{label}</span>
  </button>
);

export default Navbar;
