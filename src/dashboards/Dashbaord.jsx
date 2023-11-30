// Dashboard.js

import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
// commons
import Library from "./components/common/Library";
import Grade from "./components/common/Grade";
import TestNavbar from "../pages/home/components/TestNavbar";
import Events from "./components/common/Events";
import Message from "./components/common/Message";
import Performance from "./components/common/Performance";
// teachers
import Assignment from "./components/teacher/Assignment";
import Classes from "./components/teacher/Classes";
import Report from "./components/teacher/Report";
import Schedule from "./components/teacher/Schedule";
import Students from "./components/teacher/Students";
// student
import Clubs from "./components/student/Clubs";
import Progress from "./components/student/Progress";
import Survays from "./components/student/Survays";
import MainBoard from "./components/common/MainBoard";
import { useParams, useNavigate } from "react-router-dom";
import Attendance from "./components/common/Attendance";
import Resources from "./components/student/Resources";
import Help from "./components/common/Help";
import Support from "./components/common/Support";
import TakeAttendance from "./components/teacher/TakeAttendance";
const Dashboard = () => {
  const navigate = useNavigate();

  const { content } = useParams();

  useEffect(() => {
    navigate("/dashboard/main");
  }, []);

  const dashboardContent = () => {
    // common
    if (content === "main") return <MainBoard />;
    if (content === "attendance") return <Attendance />;
    if (content === "event") return <Event />;
    if (content === "grade") return <Grade />;
    if (content === "message") return <Message />;
    if (content === "performace") return <Performance />;
    if (content === "library") return <Library />;
    if (content === "help") return <Help />;
    if (content === "support") return <Support />;
    // teacher
    if (content === "assignment") return <Assignment />;
    if (content === "classes") return <Classes />;
    if (content === "report") return <Report />;
    if (content === "schedule") return <Schedule />;
    if (content === "students") return <Students />;
    if (content === "take-attendance") return <TakeAttendance />;
    // students
    if (content === "clubs") return <Clubs />;
    if (content === "progress") return <Progress />;
    if (content === "survays") return <Survays />;
    if (content === "resource") return <Resources />;
  };

  return (
    <div className=" bg-gray-100 flex">
      <Sidebar />
      <div style={{width:"100%", height:"100vh", overflowY:"scroll"}}>
        <div>
          {dashboardContent()}
        </div>
        
        </div>
    </div>
  );
};

export default Dashboard;
