import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import CheckAlerts from "../alert/CheckAlert";
import axios from "axios"
// material ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Checkbox from "@mui/joy/Checkbox";

import FormHelperText from "@mui/joy/FormHelperText";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomizedSnackbars from "../alert/SnackBar";
import { Base_url } from "../../config/url";
const BASE_URL = Base_url
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const workDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const grade = ["KG,1,2,3,4", "5,6", "7,8", "9,10", "11,12", "University"];
const educationLevel = [
  "HighSchool",
  "Undergratuate",
  "Degree",
  "Masters",
  "Phd",
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TeacherRegistrationForm = ({ userType }) => {
  const navigate = useNavigate()
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender:"",
    childNumber: "",
    birthDate: "",
    address: "",
    experience: "",
    workingDays: [],
    selectedGrade: [],
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false); // Term and Policy
  const [userRole, setUserRole] = useState(userType)

  const changeRole = (role)=>{
    return setUserRole(role)
  }
  const theme = useTheme();
  
  const [personName, setPersonName] = React.useState([]);
  
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }; // Switch policy check box
  // Functions
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
   
  };
  // Check validation

  const checkEmptyField = ()=>{
    
     for (const key in user) {
      if (user.hasOwnProperty(key) && !user[key]) {
        return false;
      }
    }
    return true;
  }
  
  const checkValidation = ()=>{
    if (!isChecked) return false;
    checkEmptyField()
   
  }



    const [alertComponent, setAlertComponent] =useState ({
      alertType : "",
      title:"",
      message:""
    })
    const [isAlert, setIsAlert] = useState(false)
    const alertFunction = (alertType, title, message)=>{
      setIsAlert(true)
       return setAlertComponent({alertType:alertType, title:title, message:message})
    }
    useEffect(()=>{
      setTimeout(() => {
        setIsAlert(false)
      }, 10000);
    },[alertFunction])
  const handleSubmit = async (event) => {
    event.preventDefault();
    //if(checkEmptyField() === false) return alertFunction("error","Error", "Pleace Fill all Fields")
   
    if(!isChecked) return alertFunction("warning", "Privacy","You must agree before proceed")
    // Prepare data based on userType
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      gender:user.gender,
      password: user.password,
      confirmPassword:user.confirmPassword,

      // Fields specific to teachers
      ...(userRole === "teacher" && {
        birthDate:user.birthDate,
        email: user.email,
        experience: user.experience,
        workingDays: user.workingDays.join(','),
        educationLevel:user.educationLevel,
        selectedGrade: user.selectedGrade.join(','),
        userType:"teacher",
       
        
      }),

      // Fields specific to parents
      ...(userRole === "parent" && {
        childNumber: user.childNumber,
        userType:"parent"
      }),
    };

    try {
   
      // Send the data to the backend
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      alertFunction("success", response.data.title,response.data.message)
      navigate('/login')
      // Handle the response as needed


      // navigate('/login')
    } catch (error) {
     
      const errorMessage = error.response.data
      alertFunction("error", errorMessage.title,errorMessage.message)
      console.error(error);
    }
  };
 

  return (
    <div className="signup-form">
      <div className="signup-header">
        <h1 onClick={()=> navigate("/")}>Wisdom</h1>
        <div style={{fontSize:"14px"}}>
          <h2>
            Looking for {userRole === "parent" ? "Students" : "Tutors"}? <span 
            style={{cursor:"pointer"}}
            onClick={()=>{
             if (userRole === "parent") return changeRole("teacher") 
             if (userRole === "teacher") return changeRole("parent") 
            }}> Apply as {userRole === "parent" ? "Teacher" : "Parent"}</span>
          </h2>
        </div>
      </div>
      <div className="form">
        <Box
          onSubmit={handleSubmit}
          component="form"
          className="form-box"
          sx={{
            gap: "10px",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <h1>Join us in Building Tomorrow's</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            molestiae consequuntur fugiat odit optio atque dicta reprehenderit
            nihil doloremque voluptates?
          </p>
          <br />
          <hr />
          <br />
          <div className="signup-inputs">
            <TextField
              label="First Name"
              type="search"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              type="search"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
            
            <TextField
              label="Phone number"
              type="search"
              name="phoneNumber"
              placeholder="09.../07..."
              value={user.phoneNumber}
              onChange={handleChange}
            />   
            {
              userRole === "teacher" && <TextField
              label="Email"
              type="search"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            }
            <TextField
              label="address"
              type="search"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
            <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={user.gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value="male">male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                
               
              </Select>
            </FormControl>
            {/* ... Parent Field */}
              {
                userRole === "parent" &&  
              <TextField
              label="Child Number"
              type="search"
              name="childNumber"
              value={user.childNumber}
              onChange={handleChange}
            />
              }
          
            {/* Teacher Field */}
            {userRole === "teacher" && <TextField
            placeholder="number of Year"
              label="Experience"
              type="search"
              name="experience"
              value={user.experience}
              onChange={handleChange}
            />}
            {userRole === "teacher" &&   <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-simple-select-label">Education Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="educationLevel"
                value={user.educationLevel}
                label="Education Level"
                onChange={handleChange}
              >
                {
                  educationLevel.map((level, index)=>{
                     return <MenuItem key={index} value={level.toLocaleLowerCase()}>{level}</MenuItem>
                  })
                }
               
                
              </Select>
            </FormControl>}
            {userRole === "teacher" && <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-multiple-name-label">
                Working Days
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                name="workingDays"
                value={user.workingDays}
                onChange={handleChange}
                input={<OutlinedInput label="working days" />}
                MenuProps={MenuProps}
              >
                {workDays.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> }
            {userRole === "teacher" && <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-multiple-name-label">
                Select Grade
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                name="selectedGrade"
                value={user.selectedGrade}
                onChange={handleChange}
                input={<OutlinedInput label="select grade" />}
                MenuProps={MenuProps}
              >
                {grade.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>}
            {userRole === "teacher" &&  <div style={{ position: "relative" }}>
              <label
                style={{
                  top: "-8px",
                  left: "4px",
                  padding: "2px",
                  backgroundColor: "white",
                  fontSize: "10px",
                  position: "absolute",
                }}
                htmlFor="birth-date"
              >
                Birth date(GC)
              </label>
              <input
                style={{
                  width: "83%",
                  padding: "13px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
                type="date"
                onChange={handleChange}
                name="birthDate"
                value={user.birthDate}
                id="birthDate"
              />
            </div>}
            
             {/* Common field */}
           
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              name="password"
              value={user.password}
            />
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              name="confirmPassword"
              value={user.confirmPassword}
            />

            
          </div>

          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            label={
              <React.Fragment>
                I have read and agree to the{" "}
                <Typography fontWeight="md">terms and conditions</Typography>.
              </React.Fragment>
            }
          />
          <FormHelperText>
            <Typography level="body-sm">
              Read our <Link href="#link">terms and conditions</Link>.
            </Typography>
          </FormHelperText>
      
           <div
          style={{
            padding: "10px",
            flexDirection: "column",
            display: "flex",
            alignItems:"center",
            gap: "10px",
            width:"100%"
          }}


        >
          
         {isAlert && <CheckAlerts severity={alertComponent.alertType} title={alertComponent.title} message={alertComponent.message}/>}
            <button className="submit-btn" type="submit" style={checkValidation() === false ? {backgroundColor:"gray", cursor:"none"} : {}}>Register {userRole === "parent"? "Parent"  :"Teacher"  } </button>
          <div>
            <h2 style={{fontSize:'14px'}}>
              Already have an Account? <span>Login</span>{" "}
            </h2>
          </div>
        </div>
        </Box>
       
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
