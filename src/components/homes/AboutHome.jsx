import React from 'react';
import { BiRocket, BiBook, BiCheck } from 'react-icons/bi';
import { GiDiscussion } from "react-icons/gi";

const AboutHome = () => {
    return (
        <div className="py-16 md:py-24 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Section Header --- */}
                <div className="text-center mb-14">
                    <span className="inline-block px-5 py-1.5 text-sm font-medium bg-brand/10 text-brand rounded-full mb-5">
                        RPI Computer Club
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold leading-snug tracking-tight">
                        Where <span className="text-brand">Innovation</span> Meets <span className="text-brand">Practice</span>
                    </h2>
                    <p className="mt-4 text-lg  max-w-2xl mx-auto">
                        The RPI Computer Club is a creative hub where students move beyond textbooks. 
                        We believe in growing technical talent through teamwork, problem-solving, and real challenges. 
                        Here, curiosity is the spark and collaboration is the engine.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Vision & Mission */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        <div className="p-8 bg-base-200 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="flex items-center gap-3 mb-4">
                                <BiRocket className="text-2xl text-brand" />
                                <h3 className="text-2xl font-semibold">Our Mission</h3>
                            </div>
                            <p className=" leading-relaxed">
                                To inspire students of Rajshahi Polytechnic Institute to become 
                                confident technology professionals by combining classroom concepts 
                                with hands-on learning. We aim to empower members to experiment, 
                                create, and push boundaries in computing.
                            </p>
                        </div>

                        <div className="p-8 bg-base-200 rounded-lg shadow-md hover:shadow-xl transition">
                            <div className="flex items-center gap-3 mb-4">
                                <GiDiscussion className="text-2xl text-brand" />
                                <h3 className="text-2xl font-semibold">Our Culture</h3>
                            </div>
                            <p className=" leading-relaxed">
                                We believe knowledge grows when shared. That’s why our club is built 
                                around open discussion, peer-to-peer guidance, and active project collaboration. 
                                From hackathons to coding circles, we create an environment that feels 
                                more like a family than a formal club.
                            </p>
                        </div>

                    </div>

                    {/* What We Offer */}
                    <div className="p-8 bg-base-200 rounded-lg shadow-md hover:shadow-xl transition">
                        <h3 className="text-2xl font-semibold mb-6">Why Join Us?</h3>
                        <ul className="space-y-4 ">
                            {[
                                "Practical coding sessions & workshops",
                                "Mentorship from seniors & alumni",
                                "Industry guest talks & seminars",
                                "Participation in national hackathons",
                                "Collaborative open-source projects",
                                "Team building & leadership training",
                                "Access to exclusive resources & tools",
                                "Strong community & networking support"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <BiCheck className="text-brand text-lg flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutHome;
