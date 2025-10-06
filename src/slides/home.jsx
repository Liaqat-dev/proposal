import React, {useEffect, useState} from "react";

function Home() {
    const texts = ["ResuCraft", "Resumes that beat the bots"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentText = texts[loopIndex % texts.length];

        const handleTyping = () => {
            setText((prev) =>
                isDeleting
                    ? currentText.substring(0, prev.length - 1)
                    : currentText.substring(0, prev.length + 1)
            );

            // Adjust typing speed dynamically
            setTypingSpeed(isDeleting ? 50 : 100);

            // Handle end states
            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), 1200); // pause before delete
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, loopIndex]);

    // Blink cursor continuously (independent from typing)
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className="content  ">
            {/* Title */}
            <div className={'my-auto'}>

                {/*<h1 className="text-[72px] font-extrabold leading-tight bg-gradient-to-r from-[#827c76] to-[rgba(255,255,255,0.6)] bg-clip-text text-transparent">*/}
                {/*    ResuCraft*/}
                {/*</h1>*/}
                <h1 className="text-[72px] italic font-extrabold leading-tight bg-gradient-to-r from-[#827c76] to-[rgba(255,255,255,0.6)] bg-clip-text text-transparent  tracking-tight flex items-center">
                    <span>{text}</span>
                    <span
                        className={`ml-1 ${
                            blink ? "opacity-100" : "opacity-0"
                        } transition-opacity duration-150 text-[#827c76] inline-block`}
                        style={{
                            transform: "skewX(-10deg)",
                        }}
                    >
                        |</span>
                </h1>

                {/*/!* Subtitle *!/*/}
                {/*<p className="text-2xl font-medium text-slate-500 mb-10">*/}
                {/*    Creating Resumes That Beat the Bots*/}
                {/*</p>*/}

                {/* Features */}
                <div className="flex gap-8 mt-10">
                    {/* Feature 1 */}
                    <div
                        className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f0ede9] to-[#e1dcd7] mr-4">
                            <i className="fas fa-robot text-[#827c76] text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            ATS Optimization
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f0ede9] to-[#e1dcd7] mr-4">
                            <i className="fas fa-search text-[#827c76] text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            Keyword Analysis
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f0ede9] to-[#e1dcd7] mr-4">
                            <i className="fas fa-file-download text-[#827c76] text-2xl"></i>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                            Easy Export
                        </div>
                    </div>
                </div>
            </div>

            {/* Accent Circles */}
            <div
                className="absolute -top-24 right-48 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
        </div>

    );
}

export default Home;
