import Navbar from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const attendanceData = [
  { month: "Jan", value: 3 },
  { month: "Feb", value: 5 },
  { month: "Mar", value: 4 },
  { month: "Apr", value: 7 },
  { month: "May", value: 10 },
  { month: "Jun", value: 6 },
  { month: "Jul", value: 8 },
  { month: "Aug", value: 5 },
  { month: "Sep", value: 10 }, // for the popup
];

const departmentData = [
  { department: "Worship", members: 6 },
  { department: "IT & Video", members: 4 },
  { department: "Media", members: 8 },
  { department: "Admin", members: 1 },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-white pb-10">
      <Navbar />

      {/* Attendance Trend Card */}
      <div className="mx-5 mt-6 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-gray-800">
          Monthly Attendance Trend
        </h2>
        <p className="text-xs text-gray-500 -mt-1 mb-3">
          Average event attendance over time
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Distribution */}
      <div className="mx-5 mt-6 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-gray-800">
          Department Distribution
        </h2>
        <p className="text-xs text-gray-500 -mt-1 mb-3">
          Members by department
        </p>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="members" fill="#10B981" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
