import React, { useState } from "react";
import "./style.css";
// material ui
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// --------------------
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const TeacherRegistrationForm = ({ userType }) => {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    childNumber: "",
    birthDate: "",
    location: "",
    experience: "",
    workingDays: [],
    selectedGrade: [],
    fileLocation: "",
    password: "",
    confirmPassword: "",
  });
  // Functions
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, user);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, selectedOptions) => {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: selectedOptions,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data based on userType
    const userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      // ... other common fields

      // Fields specific to teachers
      ...(userType === "teacher" && {
        location: user.location,
        experience: user.experience,
        workingDays: user.workingDays,
        selectedGrade: user.selectedGrade,
        fileLocation: user.fileLocation,
      }),

      // Fields specific to parents
      ...(userType === "parent" && {
        childNumber: user.childNumber,
      }),
    };

    try {
      // Send the data to the backend
      const response = await axios.post("/api/register", userData);

      // Handle the response as needed
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="signup-form">
      <div className="signup-header">
        <h1>Megenagna</h1>
        <div>
          <h2>
            Looking for Tutors? <span> Apply as Parent</span>
          </h2>
        </div>
      </div>
      <form>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
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
          <hr />
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
              label="Email"
              type="search"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
             <TextField
              label="Phone number"
              type="search"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
            />
            {/* ... other text fields */}
            {userType === "father" ? (
              <TextField
                label="Child Number"
                type="search"
                name="childNumber"
                value={user.childNumber}
                onChange={handleChange}
              />
            ) : (
              <div className="signup-input">
                <TextField
                  label="Location"
                  type="search"
                  name="location"
                  value={user.location}
                  onChange={handleChange}
                />
                <TextField
                  label="Experience"
                  type="search"
                  name="experience"
                  value={user.experience}
                  onChange={handleChange}
                />
                <LocalizationProvider   dateAdapter={AdapterDayjs}>
                  <DatePicker onChange={handleChange} name="birthDate" value={user.birthDate}/>
                </LocalizationProvider>
                <Select
                  placeholder="Working days"
                  multiple
                  onChange={handleChange}
                  name="workingDays"
                  value={user.workingDays}
                >
                  <Option value="sunday">Sunday</Option>
                  <Option value="monday">Monday</Option>
                  <Option value="tuesday">Tuesday</Option>
                  <Option value="wednesday">Wednesday</Option>
                  <Option value="thurdsay">Thurdsay</Option>
                  <Option value="friday">Friday</Option>
                  <Option value="saturday">Saturday</Option>
                </Select>
                <Select
                  placeholder="Select grade"
                  multiple
                  onChange={handleChange}
                  name = "selectedGrade"
                  value={user.selectedGrade}
                  sx={{
                   
                  }}
                >
                  <Option value="kg,1,2,3,4">kg - 4</Option>
                  <Option value="5,6,7">5 - 7</Option>
                  <Option value="9,10">9 - 10 </Option>
                  <Option value="11,12">11 - 12 </Option>
                  <Option value="university">University</Option>
                </Select>
                <Select
                  placeholder="Education Level"
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                  onChange={handleChange}
                  name = "educationLevel"
                  value={user.educationLevel}
                >
                  <Option value="highschool">Highschool</Option>
                  <Option value="undergratuate">Undergratuate</Option>
                  <Option value="degree">Degree</Option>
                  <Option value="master">Masters</Option>
                  <Option value="phd">Phd</Option>
                </Select>
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
            )}
          </div>
          <Checkbox
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
        </Box>
        <div
          style={{
            padding: "10px",
            flexDirection: "column",
            display: "flex",
            gap: "10px",
          }}
        >
          <button type="submit">Register Teacher</button>
          <div>
            <h2>
              Already have an Account? <span>Login</span>{" "}
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherRegistrationForm;
