import React from "react";

function Home() {
    return (
            <div className="flex flex-col justify-center flex-1 relative px-20 py-16">
                {/* Title */}
                <h1 className="text-[72px] font-extrabold leading-tight mb-5 bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
                    ResuCraft
                </h1>

                {/* Subtitle */}
                <p className="text-2xl font-medium text-slate-500 mb-10">
                    Creating Resumes That Beat the Bots
                </p>

                {/* Features */}
                <div className="flex gap-8 mt-10">
                    {/* Feature 1 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                            <i className="fas fa-robot text-blue-500 text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            ATS Optimization
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                            <i className="fas fa-search text-blue-500 text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            Keyword Analysis
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                            <i className="fas fa-file-download text-blue-500 text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            Easy Export
                        </div>
                    </div>
                </div>

                {/* Accent Circles */}
                <div className="absolute -top-24 right-48 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/30"></div>
            </div>

);
}

export default Home;
