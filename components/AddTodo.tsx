"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "@/schemas/todo";
import { addTodo } from "@/actions/todos";

const AddTodo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(todoSchema), mode: "onBlur" });

  return (
    <Card className="min-w-75 self-start bg-gray-100">
      <CardHeader>
        <CardTitle>Add Todo...</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(addTodo)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Title"
                className="border-gray-200"
                {...register("title")}
              />
              {errors.title && <div className="text-red-800 text-sm">{errors.title.message}</div>}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Description</Label>
              </div>
              <Textarea placeholder="Type your description here." {...register("description")} />
              {errors.description && (
                <div className="text-red-800 text-sm">{errors.description.message}</div>
              )}
            </div>
            <div className="flex-col gap-2">
              <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
                Add Todo
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTodo;
