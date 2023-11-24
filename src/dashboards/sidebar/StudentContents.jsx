import { FaChildren } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";


export const student = [
  {
    title: "Acadamic Information",
    link: "/student/child_information",
    icon: <FaChildren />,
    list: [
      { title: "Grades", link: "student_grade" },
      { title: "Schedule", link: "schedule" },
      { title: "Assignments", link: "assignment" },
    ],
  },

  {
    title: "Communication",
    link: "/student/communication",
    icon: <LuMessagesSquare />,
    list: [
      { title: "message", link: "message" },
      {
        title: "Teacher Feedback",
        link: "feedback",
      },
    ],
  },
  {
    title: "Attendance",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [{ title: "View Attendance", link: "event" }],
  },
  {
    title: "Library/Resources",
    link: "/student/resource",
    icon: <MdEvent />,
    list: [
      { title: "Educational Resource", link: "event" },
      { title: "Library", link: "event" },
      { title: "Recommended Reading", link: "event" },
    ],
  },

  {
    title: "Extracurricular Activities",
    link: "/student/activities",
    icon: <MdEvent />,
    list: [
        { title: "Clubs and Organizations", link: "event" },
        { title: "Career Guidance", link: "event" }
    ],
  },

  {
    title: "Progress Tracking",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Academic Progress", link: "academic-progress" },
        {title:"Goal Setting",link:"student-goal"}
    ],
  },
  {
    title: "Colaboration Tools",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Group Project", link: "academic-progress" },
        {title:"Study Groups",link:"student-goal"}
    ],
  },
  {
    title: "Feedback and Surveys",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Provide Feedback", link: "academic-progress" },
        {title:"Participate in Surveys",link:"student-goal"}
    ],
  },
  {
    title: "Help/Support",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Help Center", link: "academic-progress" },
        {title:"Support",link:"student-goal"}
    ],
  },
];
