import { FaChildren } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";


export const student = [
  {
    title: "Acadamic Information",
    link: "/student/child_information",
    icon: <FaChildren />,
    list: [
      { title: "Grades", link: "grade" },
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
    ],
  },
  {
    title: "Attendance",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [{ title: "Attendance", link: "attendance" }],
  },
  {
    title: "Library/Resources",
    link: "/student/resource",
    icon: <MdEvent />,
    list: [
      { title: "Educational Resource", link: "resource" },
      { title: "Library", link: "library" },
      { title: "Recommended Reading", link: "reading" },
    ],
  },

  {
    title: "Extracurricular Activities",
    link: "/student/activities",
    icon: <MdEvent />,
    list: [
        { title: "Clubs and Organizations", link: "clubs" },
    ],
  },

  {
    title: "Progress Tracking",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Academic Progress", link: "progress" },
        {title:"Goal Setting",link:"goal"}
    ],
  },
  
  {
    title: "Feedback and Surveys",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        {title:"Participate in Surveys",link:"servey"}
    ],
  },
  {
    title: "Help/Support",
    link: "/student/attendace",
    icon: <MdEvent />,
    list: [
        { title: "Help Center", link: "help" },
        {title:"Support",link:"support"}
    ],
  },
];
