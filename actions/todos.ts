"use server";
import { connectToDatabase } from "@/lib/mongoose";
import TodoModel from "@/models/todos";
import { requireUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  const user = await requireUser();

  try {
    await connectToDatabase();
    const todos = await TodoModel.find({ userId: user?.id });
    return { data: todos, success: true };
  } catch (err) {
    return { data: [], success: false, err };
  }
};

export const addTodo = async ({ title, description }: { title: string; description: string }) => {
  const user = await requireUser();
  try {
    await TodoModel.create({
      title,
      description,
      completed: false,
      userId: user?.id,
    });
    revalidatePath("/dashboard");
  } catch (err) {
    console.log("some error ", err);
  }
};

export const deleteTodo = async (todoId: string) => {
  const user = await requireUser();

  try {
    //also check ownership at the same time
    await TodoModel.findOneAndDelete({
      _id: todoId,
      userId: user.id,
    });

    revalidatePath("/dashboard");
  } catch (err) {
    console.log("some error ", err);
  }
};

export const completeTodo = async (todoId: string) => {
  const user = await requireUser();

  try {
    await TodoModel.findOneAndUpdate(
      { _id: todoId, userId: user.id },
      { completed: true },
      { new: true }
    );

    revalidatePath("/dashboard");
  } catch (err) {
    console.log("some error ", err);
  }
};
