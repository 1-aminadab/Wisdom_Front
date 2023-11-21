import React, { useState } from "react";
import "./style.css";
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
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";

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
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const grade = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
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
  //
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  console.log(personName);
  const handleSelect = (event) => {
 const {name, value }=event.target;
    console.log(name, value);
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );
  };
  //
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
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  // Functions
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, user);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
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
        <h1>Wisdom</h1>
        <div>
          <h2>
            Looking for Tutors? <span> Apply as Parent</span>
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

            <TextField
              label="Child Number"
              type="search"
              name="childNumber"
              value={user.childNumber}
              onChange={handleChange}
            />

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
            {/* Multiple select  */}
            <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-multiple-name-label">Working Days</InputLabel>
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
            </FormControl>
            <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-multiple-name-label">Select Grade</InputLabel>
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
            </FormControl>
            {/*  */}
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
            <div style={{ position: "relative" }}>
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
                Birth date
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
            </div>
            <div></div>
            <div></div>
            <div></div>
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
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
