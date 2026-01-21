import { upsertUser } from "@/lib/actions/users";
import { redirect } from "next/navigation";

export default async function Home() {

  async function handleSubmit(formData: FormData) {
    "use server"
    const username = formData.get("username") as string;

    if (!username) return;

    const result = await upsertUser(username);

    if (result.success && result.data) {
      redirect(`/todos/${result.data.id}`);
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
          />
          <button className="w-full bg-sky-500 text-background p-1 rounded-lg tracking-tight" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}