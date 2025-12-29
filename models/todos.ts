import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String, // <-- store Kinde user.id directly
    required: true,
    index: true, // <-- good for querying todos by user
  },
});

// Prevent model overwrite error in Next.js hot reload
const TodoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema, "todos");

export default TodoModel;
