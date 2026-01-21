import { getTodosByUserId, upsertTodo } from '@/lib/actions/todos';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function TodosPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await getTodosByUserId(id)
    if (!res.success || !res.data) {
        return <div>Error: {res.message}</div>
    }

    async function handleSubmit(formData: FormData) {
        "use server"
        const title = formData.get("title") as string;

        if (!title) return;

        const result = await upsertTodo(id, title);

        if (result.success && result.data) {
            redirect(`/todos/${id}`);
        }
    }

    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-center gap-4">
            <section className="flex flex-col gap-4 p-8 bg-sky-950 rounded-lg min-h-96 min-w-80">
                <div className='flex justify-between items-center'>
                    <h1>Add Todo</h1>
                    <Link href={`/todos/${id}`} className='bg-red-500/70 px-4 py-2 rounded-lg font-bold tracking-tight'>Cancel</Link>
                </div>

                <form action={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="title"
                        className="p-2 bg-foreground/5 rounded-lg min-w-sm"
                        placeholder="title"
                    />
                    <button className="w-full bg-sky-500 text-background p-1 rounded-lg tracking-tight" type="submit">
                        Submit
                    </button>
                </form>
            </section>
        </div>

    );
}