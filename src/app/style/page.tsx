import Head from "next/head";

const Style = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Head>
                <title>Stylish Backdrop Example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <div className="relative w-[50rem] h-[30rem] p-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 transform skew-y-6 transition-transform duration-500 hover:skew-y-0">
                    <div className="absolute inset-0 bg-opacity-50 backdrop-blur-md"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-white text-5xl font-bold">Hello, World!</h1>
                    <p className="text-white mt-4">This is an attractive backdrop example.</p>
                </div>
            </div>
        </div>
    )
    
};

export default Style;
