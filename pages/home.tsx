import Head from "next/head";

const Home = () => {
    return (
        <>
        <Head>
            <title>Docify</title>
        </Head>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1>Home Page</h1>
            </main>
        </div>
        </>
    )
};

export default Home;