"use client";
import { Label } from "@radix-ui/react-label";
import TodoDeleteButton from "./TodoDeleteButton";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { completeTodo } from "@/actions/todos";

type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  userId?: string;
};

const TodoItem = ({ id, title, description, completed }: Todo) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <TodoDeleteButton id={id} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          <Checkbox
            id="todo"
            checked={completed}
            onCheckedChange={() => completeTodo(id)}
            disabled={completed}
          />
          <Label htmlFor="todo">Mark Done</Label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TodoItem;
