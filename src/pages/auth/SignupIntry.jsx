import React, { useState, useEffect } from "react";

import { FaBullseye } from "react-icons/fa6";
import { MdPanoramaFishEye } from "react-icons/md";
import Parents from "./assets/images/parents.png";
import Teacher from "./assets/images/teacher.png";

function SignupIntry({getType}) {
  const [user, setUser] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("");
  
  const setType = ()=>{
    getType(user)
  }

  useEffect(() => {
    const root = document.documentElement;
    const color = getComputedStyle(root).getPropertyValue("--kappel");
    setPrimaryColor(color);
  }, []);

  const styles = {
    cursor: "pointer",
    border: `2px solid ${primaryColor}`,
    backgroundColor: "rgb(241, 241, 241)",
  };

  return (
    <div className="signup-entry">
      <div className="signup-entry-header">
        <h1 >Wisdom</h1>
        <h2>Back</h2>
      </div>
      <div className="apply-container">
      <h1>Join Our Community</h1>
      <p>Discover a world of learning and connections. Ch Let us know if you're a parent or a teacher to tailor your experience.</p>
        <div className="select-btn  ">
          <div
            className="parent-btn"
            style={user === "parent" ?  styles :{}}
            onClick={()=> setUser('parent')}
          >
            <div>
              <img src={Parents} alt="" />
              {
                user === "parent" ?<FaBullseye iconSize={60} style={{color:`${primaryColor}`, fontSize:"20px"}}/>: <MdPanoramaFishEye iconSize={60}/>
              }
            </div>
            <div>I'm a Parent</div>
          </div>
          <div
            className="educator-btn"
           style={user === "teacher" ?  styles :{}}
           onClick={()=> setUser('teacher')}
          >
            <div>
              <img src={Teacher} alt="" />
              {
                user === "teacher" ?<FaBullseye iconSize={60} style={{color:`${primaryColor}`}}/>: <MdPanoramaFishEye  iconSize={60}/>
              }
              
            </div>
            <div>I'm a Teacher</div>
          </div>
        </div>
        <div className="apply-btn">
          <button
            className="signup"
            style={
              user !== null
                ? { backgroundColor: `${primaryColor}`, cursor: "pointer" }
                : { backgroundColor: `#777`, cursor: "none" }
            }
             onClick={setType}
          >
            {user !== null ? `Apply as ${user}` : `Create Account`}
          </button>
        </div>
        <div className="check-account">
          Already have an Account? <span>Login</span>
        </div>
      </div>
    </div>
  );
}

export default SignupIntry;
