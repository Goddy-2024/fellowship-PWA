import { UploadCloud, Users, Mail } from "lucide-react";
import Navbar from "../components/Navbar";

const MailingPage = () => {
  const recipients = [
    { name: "Godswill Omondi Ajuoga", email: "gaaojuoga@gmail.com", dept: "IT & Video" },
    { name: "admin", email: "admin.rhsf@gmail.com", dept: "Administration" },
    { name: "Ndiema William Kiptoch", email: "ndiemawilliam581@gmail.com", dept: "Worship" },
    { name: "Phabriziah Agitsa Achesa", email: "phabriziah@gmail.com", dept: "Worship" },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar title="Bulk Email" subtitle="Send emails to fellowship members" />

      {/* Stats */}
      <div className="flex gap-3 px-5 mt-4">
        <div className="w-1/2 bg-blue-50 p-3 rounded-lg text-center">
          <p className="text-[10px] text-gray-500">Total Members</p>
          <p className="text-xl font-bold text-blue-600">12</p>
        </div>
        <div className="w-1/2 bg-green-50 p-3 rounded-lg text-center">
          <p className="text-[10px] text-gray-500">Active Members</p>
          <p className="text-xl font-bold text-green-600">12</p>
        </div>
      </div>

      {/* Compose Email */}
      <div className="bg-white mt-5 mx-5 p-4 rounded-xl shadow">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <Mail size={18} /> Compose Email
        </h2>

        <label className="block mt-4 text-sm font-medium">Subject *</label>
        <input
          className="w-full p-2 border rounded-md mt-1 text-sm"
          placeholder="Enter email subject"
        />

        <label className="block mt-4 text-sm font-medium">Message *</label>
        <textarea
          rows={5}
          className="w-full p-3 border rounded-md mt-1 text-sm"
          placeholder="Enter your message here..."
        ></textarea>

        <label className="block mt-4 text-sm font-medium">Attachments</label>
        <div className="border-2 border-dashed rounded-md p-6 text-center text-gray-500 mt-1">
          <UploadCloud className="mx-auto mb-2" />
          <p>Click to upload files (max 5 files, 10MB each)</p>
        </div>
      </div>

      {/* Recipients Section */}
      <div className="bg-white mt-5 mx-5 p-4 rounded-xl shadow">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <Users size={18} /> Recipients
        </h2>

        {/* Filter */}
        <label className="block mt-3 text-sm font-medium">Send to</label>
        <select className="w-full p-2 border rounded-md mt-1 text-sm">
          <option>All Active Members</option>
          <option>All Members</option>
          <option>Specific Departments</option>
        </select>

        <button className="w-full mt-3 bg-gray-100 py-2 rounded-md font-medium hover:bg-gray-200">
          Refresh Recipients
        </button>

        {/* Recipients List */}
        <div className="mt-4">
          <div className="flex justify-between items-center pb-2">
            <h3 className="font-bold text-gray-700">Recipients (12/12)</h3>
            <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded">+ Add</button>
          </div>

          <div className="space-y-3">
            {recipients.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
              >
                <input type="checkbox" defaultChecked />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.email}</p>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                  {item.dept}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Send Button */}
      <button className="fixed bottom-5 left-5 right-5 bg-gray-600 text-white py-3 rounded-lg text-center shadow">
        Send Email (12)
      </button>
    </div>
  );
};

export default MailingPage;

