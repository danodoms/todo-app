import Link from "next/link";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-center gap-4">
            <section className="flex flex-col gap-4 p-8 bg-sky-950 rounded-lg min-h-96 min-w-80">
                <div className='flex justify-between items-center'>
                    <h1>Todos</h1>
                    <Link href="/" className='bg-sky-500 px-4 py-2 rounded-lg font-bold tracking-tight'>Add</Link>
                </div>
                <p className='opacity-50'>Loading todos...</p>

                <Link href="/" className='mt-auto font-bold underline'>Return </Link>
            </section>


        </div>
    )
}