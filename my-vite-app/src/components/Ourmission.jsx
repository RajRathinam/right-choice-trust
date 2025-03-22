import React from 'react';

const Ourmission = () => {
    const stats = [
        { number: "750+", text: "Students Supported" },
        { number: "350+", text: "Scholarships Awarded" },
        { number: "120+", text: "Programs Conducted" },
    ];

    return (
        <section className="bg-[#f0f7f7] py-10 px-3 sm:px-12">
            <div className="bg-gradient-to-tr from-[#000428] to-[#004e92] rounded-xl p-3 sm:p-10">
                <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">

                    <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">

                        <div className="relative">
                            <img
                                src="/img1.jpg"
                                alt="Founder"
                                className="w-full rounded-lg shadow-2xl object-cover"
                            />
                            <span className="absolute -bottom-3 left-[75%] sm:left-[75%] -translate-x-1/2 backdrop-blur-lg bg-[#143d6bb0] text-white py-[2px] px-[3px] sm:px-3 sm:py-1 rounded-2xl shadow-md text-sm sm:text-base">
                                Est. 2010
                            </span>
                        </div>

                        <div className="backdrop-blur-lg bg-white/10 border border-white/30 text-center p-4 sm:p-6 rounded-xl shadow-lg mt-6">
                            <p className="text-md sm:text-lg font-semibold text-white">
                                "Education is the most powerful weapon which you can use to change the world."
                            </p>
                            <span className="block text-white/80 text-sm sm:text-lg mt-3">- Nelson Mandela</span>
                        </div>
                    </div>


                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl text-white font-bold">
                            Our Mission
                        </h1>

                        <p className="py-6 text-white text-sm sm:text-[19px] leading-relaxed">
                            Right Choice Educational & Charitable Trust is dedicated to making education accessible and impactful for every student. Based in Nagapattinam, Tamil Nadu, we work tirelessly to provide scholarships, educational guidance, and career support to deserving students.
                            <br /><br />
                            Under the visionary leadership of our founder <b>Dr. L. Ramachandran, M.Tech., Ph.D.,</b> our organization has helped hundreds of students achieve their educational dreams and build successful careers.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg mt-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300"
                                >
                                    <h2 className="text-3xl font-bold text-white">{stat.number}</h2>
                                    <p className="text-white">{stat.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Ourmission;
