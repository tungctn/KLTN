import React, { useState } from "react";
import EventDetails from "../components/event/EventDetails";
import { events } from "../utils/fakeData/events";

const Today = () => {
  let dateNow = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateString = dateNow.toLocaleDateString("en-US", options);

  return (
    <div className="p-4 flex flex-row divide-gray-300">
      <div className="w-1/2 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Entry/Event
          </button>
        </div>
        <div>
          {events.map((event, index) => (
            <div
              key={index}
              className={`p-4 mb-4 ${event.color} text-white rounded`}
            >
              <h2 className="text-lg font-bold">{event.title}</h2>
              <p>{event.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div className="font-semibold text-3xl mb-5">{dateString}</div>
        <p className="text-gray-400">
          Click any item in the To do list for more information
        </p>
        <EventDetails events={events} />
      </div>
    </div>
  );
};

export default Today;
