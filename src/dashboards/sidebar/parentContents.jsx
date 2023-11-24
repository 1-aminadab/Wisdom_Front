import { FaChildren } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";


export const parent = [

   { 
    title:"Child Information",
    link:"/parent/child_information",
    icon:<FaChildren  />,
    list:[
        { title:"View Child's Grades", link:"child-grade"},
        { title:"Attendance", link:"child_attendance" },
        { title:"Performance Reports", link:"performance-report" },
       
    ]
},

{ 
    title:"Communication",
    link:"/parent/communication",
    icon:<LuMessagesSquare  />,
    list:[
        { title:"message", link:"message"},{
            title:"Contact Teachers",
            link:"message"
        }
    ]
},
{
    title:"Events and Activities:",
    link:"/parent/event",
    icon:<MdEvent  />,
    list:[
        {title:"Upcomming Event", link:"event",
    },
    {title:"Extracurricular Activities", link:"activities",
}
    ]
},

]

