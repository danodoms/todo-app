"use server";

import { User } from "@/generated/prisma/client";
import { prisma } from "../prisma";
import { ActionResult } from "./types";

export async function upsertUser(
  username: string,
): Promise<ActionResult<User>> {
  try {
    const user = await prisma.user.upsert({
      where: { name: username },
      update: { name: username },
      create: { name: username },
    });
    return { success: true, data: user };
  } catch (error) {
    return { success: false, message: "Failed to upsert user" };
  }
}
