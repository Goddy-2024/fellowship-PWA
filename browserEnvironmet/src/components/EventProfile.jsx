import { CalendarDays, CalendarPlus, MapPin, Users, FileText } from "lucide-react";

// EVENT PROFILE PAGE


export function EventProfile({ event, onEdit, onDelete }) {
if (!event) return null;


return (
<div className="w-full min-h-screen bg-[#EEF0FF] p-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<CalendarDays className="w-6 h-6" />
<h1 className="text-2xl font-bold">Event</h1>
</div>
<button
onClick={onEdit}
className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-sm"
>
Edit event
</button>
</div>
<p className="text-sm text-gray-500 mb-4">Manage an Event information for reporting</p>


{/* Banner */}
<div className="bg-gray-200 w-full h-40 rounded-xl flex items-center justify-center mb-6">
<CalendarPlus className="w-12 h-12 text-gray-600" />
</div>


<div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2">
<CalendarDays className="w-5 h-5" />
<p className="font-semibold">Event name:</p>
<span>{event.title}</span>
</div>


<div className="flex items-center gap-2">
<Clock className="w-5 h-5" />
<p className="font-semibold">Date & Time:</p>
<span>{event.date} — {event.time}</span>
</div>


<div className="flex items-center gap-2">
<MapPin className="w-5 h-5" />
<p className="font-semibold">Venue:</p>
<span>{event.venue}</span>
</div>


<div className="flex items-center gap-2">
<Users className="w-5 h-5" />
<p className="font-semibold">Visitors:</p>
<span>{event.visitors}</span>
</div>


<div className="flex items-start gap-2">
<FileText className="w-5 h-5 mt-1" />
<p className="font-semibold">Description:</p>
<span>{event.description}</span>
</div>
</div>


<div className="mt-6">
<button
onClick={onDelete}
className="w-full py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow hover:bg-red-700"
>
Delete event
</button>
</div>
</div>
);
}