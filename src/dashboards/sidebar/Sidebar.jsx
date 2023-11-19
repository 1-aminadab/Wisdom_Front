import React, { useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import { teacher } from './teacherContents';

function Sidebar() {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    const isOpen = openSections.includes(index);
    setOpenSections((prevSections) =>
      isOpen
        ? prevSections.filter((item) => item !== index)
        : [...prevSections, index]
    );
  };

  return (
    <div className="sidebar px-2 bg-black text-white w-fit ">
      <div className="dahsboard-icon">
        <MdDashboard className='text-xl'/>
        <span>Dashboard</span>
        {teacher.map((component, index) => {
          const isOpen = openSections.includes(index);

          return (
            <div key={index}>
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <span className="">{component.icon}</span>
                <span className="font-medium">{component.title}</span>
              </div>

              <ul
                className={`${
                  isOpen ? 'block' : 'hidden'
                } transition-all duration-300 ease-in-out`}
              >
                {component.list.map((list, listIndex) => (
                  <li key={listIndex}>{list.title}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
