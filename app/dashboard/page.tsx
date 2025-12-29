import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const page = async () => {
  //   const { isAuthenticated } = getKindeServerSession();

  //   if (!(await isAuthenticated())) {
  //     redirect("/api/auth/login");
  //   }

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default page;
