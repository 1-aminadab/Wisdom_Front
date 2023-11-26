import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
//
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
//
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(90deg, rgb(155, 155, 255), rgb(0, 87, 128))",
      }}
    >
      
      <div
        className="container"
        style={{
          width: "70%",
          display: "flex",
          height: "60%",
          position: "relative",
          padding: "10px",
          background: "white",
          boxShadow: "0 0 5px #ddd",
        }}
      >
        <div
          className="contact-icons"
          style={{
            backgroundColor: "rgb(0, 87, 128)",
            width: "40%",
            height: "90%",
            position: "absolute",
            top: "5%",
            left: "-10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "26px",
              fontWeight: "700",
              textAlign: "center",
              width: "100%",
              color: "white",
            }}
          >
            Contact Info
          </h1>

          <div>
            <ul
              style={{ display: "flex", gap: "20px", flexDirection: "column" }}
            >
              <li style={listStyle}>
                <BusinessIcon sx={iconStyle} />{" "}
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li style={listStyle}>
                <LocalPhoneIcon sx={iconStyle} /> <span>+251946450835</span>
              </li>
              <li style={listStyle}>
                <EmailIcon sx={iconStyle} />{" "}
                <span>connectwisdom4@gmail.com</span>
              </li>
            </ul>
          </div>
          <div
            className="social-icons"
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              color: "white",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <FacebookIcon sx={iconStyle} />
            <LinkedInIcon sx={iconStyle} />
            <TelegramIcon sx={iconStyle} />
          </div>
        </div>
        <div
          className="contact-inputs"
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <h1>Send Message</h1>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-search"
                  label="First Name"
                  type="search"
                  variant="filled"
                />
                <TextField
                  id="filled-search"
                  label="Last Name"
                  type="search"
                  variant="filled"
                />
                <TextField
                  id="filled-search"
                  label="Email"
                  type="search"
                  variant="filled"
                />
                <TextField
                  id="filled-search"
                  label="Phone Number"
                  type="search"
                  variant="filled"
                />
              </Box>
              <hr />
              <Button color="success" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const iconStyle = {
  fontSize: "30px",
  hover: {
    color: "blue",
  },
};
const listStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  color: "white",
  fontWeight: "400",
};
export default Contact;
