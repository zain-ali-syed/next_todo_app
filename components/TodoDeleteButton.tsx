"use client";

import { deleteTodo } from "@/actions/todos";

const TodoDeleteButton = ({ id }: { id: string }) => {
  console.log("delete id ", id);
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="bg-blue-900 text-white rounded-xl px-4 py-2 mt-5"
    >
      Delete Todo
    </button>
  );
};

export default TodoDeleteButton;
