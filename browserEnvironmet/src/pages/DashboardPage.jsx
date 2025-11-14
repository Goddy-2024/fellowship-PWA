import {
  Menu,
  Users,
  Calendar,
  UserPlus,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F1F2FF] px-4 py-6">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Menu size={20} className="text-gray-700" />
        </div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Welcome to MMU RHSF Fellowship Management System
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        
        {/* Total Members */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <Users size={22} className="text-gray-700" />
            <p className="text-gray-600 text-sm font-medium">Total Members</p>
          </div>
          <p className="text-3xl font-bold mt-2">7</p>
          <p className="text-xs text-gray-500">Active fellowship members</p>
        </div>

        {/* This Month's Events */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <Calendar size={22} className="text-gray-700" />
            <p className="text-gray-600 text-sm font-medium">
              This Month’s Events
            </p>
          </div>
          <p className="text-3xl font-bold mt-2">0</p>
          <p className="text-xs text-gray-500">Scheduled activities</p>
        </div>

        {/* New Members */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <UserPlus size={22} className="text-gray-700" />
            <p className="text-gray-600 text-sm font-medium">New Members</p>
          </div>
          <p className="text-3xl font-bold mt-2">3</p>
          <p className="text-xs text-gray-500">Joined this month</p>
        </div>

        {/* Attendance Rate */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp size={22} className="text-gray-700" />
            <p className="text-gray-600 text-sm font-medium">
              Attendance Rate
            </p>
          </div>
          <p className="text-3xl font-bold mt-2">0%</p>
          <p className="text-xs text-gray-500">
            Average event attendance
          </p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
        <h2 className="font-semibold text-lg">Recent Activities</h2>
        <p className="text-sm text-gray-500">Latest fellowship activities</p>

        <div className="mt-3 h-20 border rounded-md bg-gray-50"></div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-5">
        <h2 className="font-semibold text-lg">Upcoming Events</h2>
        <p className="text-sm text-gray-500">Scheduled fellowship events</p>

        <div className="mt-3 h-20 border rounded-md bg-gray-50"></div>
      </div>

      {/* Registration Forms */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="font-semibold text-lg">Registration Forms</h2>
        <p className="text-sm text-gray-500">
          Manage public registration links
        </p>

        <textarea
          className="w-full h-20 mt-3 rounded-md border bg-gray-50 p-2 text-sm"
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
