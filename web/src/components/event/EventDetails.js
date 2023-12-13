import { useState } from "react";
import TodoList from "./TodoList";

const EventDetails = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex items-center p-3 cursor-pointer ${
            selectedEvent?.id == event.id ? "bg-slate-300" : ""
          }`}
          onClick={() => handleEventClick(event)}
        >
          <div
            className={`w-10 h-10 mr-2 rounded-full border-2 flex items-center justify-center ${
              selectedEvent?.id == event.id
                ? "border-green-500 bg-green-500"
                : "border-gray-300"
            }`}
          >
            {<span className="text-3xl text-white">✓</span>}
          </div>
          <div>
            <h2 className={`text-lg font-bold ${"text-gray-800"}`}>
              {event.title}
            </h2>
            <p className={`${"text-gray-600"}`}>{event.time}</p>
          </div>
        </div>
      ))}
      <hr />
      {selectedEvent && <TodoList eventId={selectedEvent?.id} />}
    </div>
  );
};

export default EventDetails;
