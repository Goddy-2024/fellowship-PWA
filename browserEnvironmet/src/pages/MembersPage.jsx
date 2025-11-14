import { Menu, UserPlus, Search, User } from "lucide-react";

export default function Members() {
  const members = ["William", "Oulton", "Godswill", "Emmanuel", "Ephraim"];

  return (
    <div className="min-h-screen bg-[#F1F2FF] px-4 py-6 flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Menu size={20} className="text-gray-700" />
          </div>
          <h1 className="text-2xl font-bold">Members</h1>
        </div>

        <UserPlus size={26} className="text-gray-800" />
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Manage fellowship members and their information
      </p>

      {/* Section Title */}
      <h2 className="font-semibold text-lg mb-2">Members Directory</h2>

      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search Members..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 bg-white"
        />
      </div>

      {/* Members List */}
      <div className="flex-1 overflow-y-auto bg-white rounded-t-2xl pb-6">
        {members.map((name, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-4 border-b last:border-none"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={28} className="text-gray-700" />
            </div>
            <p className="ml-4 text-lg font-medium">{name}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-600 mt-4">
        fellowship-admin v2.1.0 (2025-09-28) © Allure Graphics distributions
      </div>

    </div>
  );
}
