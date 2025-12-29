import { getTodos } from "@/actions/todos";
import Todo from "./TodoItem";
import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId?: string;
};

const TodoList = async () => {
  const { data } = await getTodos();
  const completedTodos = data.filter((todo) => todo.completed).reverse();
  const incompletedTodos = data.filter((todo) => !todo.completed).reverse();

  return (
    <div className="mt-10 flex flex-col px-5 gap-4">
      {incompletedTodos.length > 0 && <h1 className="font-bold text-2xl">Tasks To Do</h1>}
      {incompletedTodos?.map(({ id, title, description, completed }: Todo) => (
        <TodoItem key={id} id={id} title={title} description={description} completed={completed} />
      ))}
      {completedTodos.length > 0 && <h1 className="font-bold text-2xl">Completed Tasks</h1>}
      {completedTodos?.map(({ id, title, description, completed }: Todo) => (
        <TodoItem key={id} id={id} title={title} description={description} completed={completed} />
      ))}
    </div>
  );
};

export default TodoList;
