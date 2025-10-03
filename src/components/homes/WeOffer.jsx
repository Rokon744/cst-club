import React from 'react';

// === SVG ICONS (self-contained) ===
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33A1.65 1.65 0 0 0 13 20.9V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.68-1.42 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4 15.4 1.65 1.65 0 0 0 2.5 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.2l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 11 2.5V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16.6 4.6l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9.4A1.65 1.65 0 0 0 21.5 11H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"></line>
    <line x1="18" y1="20" x2="18" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="16"></line>
  </svg>
);

const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// === Single Discipline Card ===
const DisciplineCard = ({ icon: Icon, title, description, tags }) => (
  <div className="p-7 dark:border border-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 flex flex-col">
    <div className="mb-5">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand">
        <Icon />
      </div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1 text-xs font-medium bg-white text-gray-700 border rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// === Main Section ===
const WeOffer = () => {
  const disciplines = [
    {
      icon: CodeIcon,
      title: "Computer Programming",
      description: "Learn multiple languages and build real-world projects to become a versatile developer.",
      tags: ["Python", "C++", "JavaScript", "Web"],
    },
    {
      icon: SettingsIcon,
      title: "Hardware Servicing",
      description: "Get hands-on with diagnosing, repairing, and maintaining computer hardware.",
      tags: ["Repair", "IoT", "Maintenance"],
    },
    {
      icon: ChartIcon,
      title: "Data Structures & Algorithms",
      description: "Sharpen your problem-solving skills with efficient coding techniques.",
      tags: ["Logic", "DSA", "Competitive"],
    },
    {
      icon: MobileIcon,
      title: "DevOps & Cloud",
      description: "Learn cloud infrastructure, CI/CD, and deployment practices.",
      tags: ["Docker", "Kubernetes", "AWS"],
    },
    {
      icon: GlobeIcon,
      title: "Networking",
      description: "Understand protocols, routing, and secure network design.",
      tags: ["TCP/IP", "DNS", "Cisco"],
    },
    {
      icon: LockIcon,
      title: "Cyber Security",
      description: "Defend against threats with ethical hacking and encryption knowledge.",
      tags: ["Security", "Encryption", "Hacking"],
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-1.5 text-sm font-medium text-brand bg-base-200 rounded-full mb-5">
            RPI Computer Club
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore Our <span className="text-brand">Disciplines</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From programming to security, gain real-world skills through hands-on 
            learning and collaboration.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((d, i) => (
            <DisciplineCard key={i} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;