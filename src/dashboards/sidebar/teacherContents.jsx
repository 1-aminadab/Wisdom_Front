import { LiaSchoolSolid } from "react-icons/lia";
import { TbMessageDots } from "react-icons/tb";
import { GrResources } from "react-icons/gr";
import { MdAttachMoney } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { Component } from "react";

export const teacher = [

   { 
    title:"Academic",
    link:"/teacher/academic",
    icon:<LiaSchoolSolid  />,
    list:[
        { title:"Classes", link:"calsses"},
        { title:"Students", link:"students" },
        { title:"Reports", link:"reports" },
        { title:"Attendance", link:"attendance" },
        { title:"Schedule", link:"schedule" },
        { title:"Assignments", link:"assignments" },
        { title:"Grade", link:"grade" },
    ]
},
{ 
    title:"Resources",
    link:"/teacher/resources",
    icon:<GrResources  />,
    list:[
        {title:"Resources", link:"resources"}
    ]
},
{ 
    title:"Communication",
    link:"/teacher/communication",
    icon:<TbMessageDots  />,
    list:[
        { title:"message", link:"message"}
    ]
},
{
    title:"Financial",
    link:"/teacher/financial",
    icon:<MdAttachMoney  />,
    list:[
        {title:"payment", link:"payment"}
    ]
},
{ 
    title:"Adminstrative",
    link:"/teacher/adminstrative",
    icon: <VscSettings />,
    list:[
        { title:"profile", link:"Profile" },
        {title:"setting", link:"setting"},
    ]
},
]

