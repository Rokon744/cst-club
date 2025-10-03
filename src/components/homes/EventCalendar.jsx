import React from "react";

// Timeline Step Card
const TimelineStep = ({ step }) => {
  const { date, title, details, tasks, icon: Icon, isDone } = step;

  return (
    <div className="p-6 bg-base-200 rounded-xl shadow-xl hover:shadow-2xl transition-all ease-in duration-200">
      {/* Status Tag */}
      <div className="flex items-center space-x-2 mb-4">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            isDone ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
          }`}
        >
          {isDone ? "Completed" : "Closed"}
        </span>
      </div>
      <h4 className="text-lg font-bold text-brand mb-2">{date}</h4>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-gray-400 mb-4">{details}</p>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center text-sm ${
              isDone ? "text-gray-400" : "text-red-600"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full mr-2 ${
                isDone ? "bg-green-600" : "bg-red-600"
              }`}
            ></span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EventCalendar = () => {
  const timelineSteps = [
    {
      date: "13 Sept 2025",
      title: "Registration Deadline",
      details:
        "Last day to register for the Rajshahi Polytechnic Computer Club Hackathon.",
      tasks: ["Registration Closes"],
      isDone: false,
    },
    {
      date: "14–15 Sept 2025",
      title: "Preliminary Round",
      details: "Idea submission and team selection with peer-to-peer review.",
      tasks: ["Idea Submission", "Team Formation"],
      isDone: true,
    },
    {
      date: "22–24 Sept 2025",
      title: "Virtual Final Round",
      details: "Online hackathon with real-time mentoring and guidance.",
      tasks: ["Development Sprint", "Virtual Mentorship"],
      isDone: true,
    },
    {
      date: "25 Sept 2025",
      title: "Onsite Finale",
      details: "Final presentations and award ceremony on campus.",
      tasks: ["Presentations", "Judging & Awards"],
      isDone: true,
    },
  ];

  return (
    <div className="py-14 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium text-brand bg-base-200 rounded-full border border-brand/30 mb-4">
            Event Calendar
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Upcoming <span className="text-brand">Hackathon Journey</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Stay updated with every milestone of our innovation challenge at
            Rajshahi Polytechnic Institute.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineSteps.map((step, i) => (
            <TimelineStep key={i} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
