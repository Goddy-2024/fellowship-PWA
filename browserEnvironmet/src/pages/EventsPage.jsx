
import { CalendarDays, CalendarPlus, Search, MapPin, Clock, Users, FileText } from "lucide-react";
import { events } from "../assets/assets";


// EVENTS LIST PAGE
export default function EventsPage({ events, onSelect }) {
return (
<div className="w-full min-h-screen bg-[#EEF0FF] p-4">
<div className="flex items-center gap-2 mb-4">
<CalendarDays className="w-6 h-6" />
<h1 className="text-2xl font-bold">Events</h1>
</div>
<p className="text-sm text-gray-500 mb-4">Schedule and manage fellowship events</p>


{/* Search */}
<div className="bg-white p-3 rounded-xl shadow-sm mb-4">
<label className="text-gray-600 text-sm font-semibold">Event Calendar</label>
<div className="relative mt-2">
<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
<input
type="text"
placeholder="Search Events..."
className="w-full pl-9 py-2 rounded-lg border border-gray-200 focus:outline-none"
/>
</div>
</div>


{/* Events list */}
<div className="flex flex-col gap-3">
{events.map((ev) => (
<div
key={ev.id}
onClick={() => onSelect(ev)}
className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4 cursor-pointer hover:bg-gray-50"
>
<div className="bg-gray-200 p-3 rounded-full">
<CalendarPlus className="w-6 h-6 text-gray-700" />
</div>


<div className="flex-1">
<h2 className="font-bold text-lg">{ev.title}</h2>
<p className="text-sm text-gray-600">{ev.date}</p>
</div>


<p className="text-sm font-semibold">{ev.time}</p>
</div>
))}
</div>
</div>
);
}