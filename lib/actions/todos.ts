"use server";

import { Todo } from "@/generated/prisma/client";
import { prisma } from "../prisma";
import { ActionResult } from "./types";

export async function getTodosByUserId(
  userId: string,
): Promise<ActionResult<Todo[]>> {
  try {
    const todos = await prisma.todo.findMany({
      where: { userId: userId },
    });
    return { success: true, data: todos };
  } catch (error) {
    return { success: false, message: "Failed to get todos" };
  }
}

export async function upsertTodo(
  userId: string,
  title: string,
  todoId?: string,
): Promise<ActionResult<Todo>> {
  try {
    const todo = await prisma.todo.upsert({
      where: { id: todoId ?? "" },
      update: { title: title },
      create: { userId: userId, title: title },
    });
    return { success: true, data: todo };
  } catch (error) {
    return { success: false, message: "Failed to upsert todo" };
  }
}
