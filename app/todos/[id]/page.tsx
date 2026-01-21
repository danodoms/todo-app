import { getTodosByUserId } from '@/lib/actions/todos';
import Link from 'next/link';

export default async function TodosPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const res = await getTodosByUserId(id)
    if (!res.success || !res.data) {
        return <div>Error: {res.message}</div>
    }

    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-center gap-4">
            <section className="flex flex-col gap-4 p-8 bg-sky-950 rounded-lg min-h-96 min-w-80">
                <div className='flex justify-between items-center'>
                    <h1>Todos</h1>
                    <Link href={`/todos/${id}/new`} className='bg-sky-500 px-4 py-2 rounded-lg font-bold tracking-tight'>Add</Link>
                </div>

                {res.data.length > 0 ?
                    <div className='flex flex-col gap-2'>
                        {res.data.map((todo) => (
                            <div key={todo.id} className="px-4 py-2 bg-foreground/5 rounded-lg font-semibold tracking-tight">
                                {todo.title}
                            </div>
                        ))}
                    </div>
                    :
                    <div>
                        <p className='opacity-50'>No todos found</p>
                    </div>
                }

                <Link href="/" className='mt-auto font-bold underline'>Return </Link>
            </section>


        </div>

    );
}