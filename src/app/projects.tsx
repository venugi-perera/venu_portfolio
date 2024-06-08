"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/fitness-app.jpg",
    title: "Fitness Tracker",
    desc: "A mobile app designed to help users track their fitness activities, set goals, and monitor their progress. Users can log their workouts, track calories burned, and discover new exercises and fitness tips."
  },
  {
    img: "/image/language-app.png",
    title: "Language Learner",
    desc: "An interactive language learning app that enables users to learn new languages through lessons, quizzes, and interactive exercises. Users can track their progress, practice speaking, and engage with a community of language learners."
  },
  {
    img: "/image/travel-app.jpg",
    title: "Travel Companion",
    desc: "A mobile app designed to enhance the travel experience by providing users with personalized recommendations, trip planning tools, and real-time updates on flights, accommodations, and local attractions."
  },
  {
    img: "/image/finance-app.png",
    title: "Finance Manager",
    desc: "A comprehensive finance management app that allows users to track their expenses, manage budgets, and set financial goals. Users can sync their bank accounts, categorize transactions, and receive insights to improve their financial health."
  },
  {
    img: "/image/mental-health-app.jpg",
    title: "Mindfulness Companion",
    desc: "A mobile app focused on promoting mental well-being through mindfulness exercises, meditation sessions, and mood tracking features. Users can access guided meditations, set reminders for self-care activities, and connect with mental health resources."
  },
  {
    img: "/image/home-automation-app.png",
    title: "Smart Home Controller",
    desc: "An app that enables users to control and monitor their smart home devices from anywhere. Users can automate routines, adjust settings for lighting and temperature, and receive alerts for security events or system updates."
  }
];


export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
