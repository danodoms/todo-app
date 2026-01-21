
export default async function Home() {


    return (
        <div className="flex flex-col min-h-screen w-full justify-center items-center gap-4">
            <section className="flex flex-col gap-4 p-8 bg-sky-950 rounded-lg">
                <h1>Todo App</h1>
                <p className="tracking-tight opacity-50">Loading todos...</p>

            </section>
        </div>
    );
}