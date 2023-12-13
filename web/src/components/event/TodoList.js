import React, { useEffect, useMemo, useState } from "react";
import { todos } from "../../utils/fakeData/events";
import { IoIosArrowRoundForward } from "react-icons/io";

const TodoList = ({ eventId }) => {
  const todoList = todos.filter((todo) => todo.id === eventId);
  const todoInit = useMemo(() => {
    return todoList;
  }, [eventId]);
  console.log(todoInit);
  return (
    <div>
      <div className="space-y-4">
        {todoInit.map((todo, index) => (
          <li key={index} className="flex justify-between items-center py-3">
            <span className="text-gray-800">{todo.title}</span>
            <div className="flex items-center">
              <IoIosArrowRoundForward className="text-gray-400 text-2xl" />
              <span className="text-gray-500 ml-2">{todo?.time}</span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
