import React from "react";
import { FaLaptopCode, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import Hero from "../../components/homes/Hero";
import AboutHome from "../../components/homes/AboutHome";
import WeOffer from "../../components/homes/WeOffer";
import EventCalendar from "../../components/homes/EventCalendar";

const HomeTemp = () => {
  const features = [
    {
      icon: <FaLaptopCode className="w-12 h-12 mb-4 text-brand" />,
      title: "Learn & Grow",
      description:
        "Enhance your technical skills through hands-on projects and workshops.",
    },
    {
      icon: <FaUsers className="w-12 h-12 mb-4 text-brand" />,
      title: "Join Our Community",
      description:
        "Connect with like-minded individuals and build lasting relationships.",
    },
    {
      icon: <FaLightbulb className="w-12 h-12 mb-4 text-brand" />,
      title: "Innovate Together",
      description:
        "Collaborate on exciting projects and turn ideas into reality.",
    },
    {
      icon: <FaRocket className="w-12 h-12 mb-4 text-brand" />,
      title: "Launch Your Career",
      description:
        "Gain practical experience and boost your professional profile.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About section */}
      <AboutHome />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Join RPICC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Offer Section */}
      <WeOffer />

      {/* Event Calendar Section */}
      <EventCalendar />

      {/* CTA Section */}
      <section className="bg-brand text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of passionate developers and take your skills to
            the next level.
          </p>
          <button className="btn btn-accent btn-lg">Become a Member</button>
        </div>
      </section>
    </div>
  );
};

export default HomeTemp;
