"use client"

import { upsertUser } from "@/lib/actions/users";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const username = formData.get("username") as string;

    if (!username) {
      setIsLoading(false);
      return;
    }

    const result = await upsertUser(username);

    if (result.success && result.data) {
      router.push(`/todos/${result.data.id}`);
    } else {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center gap-4">
      <section className="flex flex-col gap-4 p-8 bg-sky-950 rounded-lg">
        <h1>Todo App</h1>
        <p className="tracking-tight opacity-50">Enter username to view your todos</p>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            className="px-4 py-2 bg-foreground/5 rounded-lg min-w-24"
            placeholder="username"
            disabled={isLoading}
          />
          <button
            className="w-full bg-sky-500 text-background p-1 rounded-lg tracking-tight disabled:opacity-50"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </section>
    </div>
  );
}