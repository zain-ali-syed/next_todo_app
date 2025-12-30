import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default page;
