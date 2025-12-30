"use client";

import { deleteTodo } from "@/actions/todos";

const TodoDeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={() => deleteTodo(id)}>
      <button className="bg-blue-900 text-white rounded-xl px-4 py-2 mt-5">Delete Todo</button>
    </form>
  );
};

export default TodoDeleteButton;
