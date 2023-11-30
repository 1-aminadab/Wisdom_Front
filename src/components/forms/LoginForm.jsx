import React, { useState } from "react";
import { login } from "../../services/authSevice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Logo from "../../assets/images/wisdom3.png";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [alertComponent, setAlertComponent] = useState({
    alertType: "",
    title: "",
    message: "",
  });
  const [isAlert, setIsAlert] = useState(false);
  const alertFunction = (alertType, title, message) => {
    setIsAlert(true);
    return setAlertComponent({
      alertType: alertType,
      title: title,
      message: message,
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      const response = await login(formData);
      localStorage.setItem("Access_Token", response.token);
      setLoading(false);
      setErrorMessage(null);

      navigate("/");
      // Store JWT token in context or localStorage
      // Redirect to dashboard or show success message
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      setErrorMessage("can't signin");
      // Handle login error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        gap: "15px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
        className="logo"
      >
        <img style={{ height: "60px" }} src={Logo} alt="" />
        <h2 style={{ fontFamily: "cursive" }}>Wisdom</h2>
      </div>
      <div className="login-text">
        <h1
          style={{
            fontSize: "20px",
            color: "blue",
            fontWeight: "600",
            fontFamily: "cursive",
          }}
        >
          Login
        </h1>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="phoneNumber"
          type="search"
          id="username"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <h6
          style={{
            padding: "0 10px 10px",
            fontSize: "13px",
            width: "100%",
            textAlign: "right",
          }}
        >
          Forget Password?
        </h6>
        <button
          type="submit"
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            padding: "5px",
            borderRadius: "20px",
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Sign in{" "}
          <div
            style={{ display: `${loading ? "flex" : "none"}` }}
            className="login-loading"
          >
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </button>
        <h6 style={{ display:`${!errorMessage ? 'none' :"flex" }`, color: "red", fontSize: "14px", fontWeight: "600" }}>
          can't signin
        </h6>
        <h5
          style={{
            fontSize: "13px",
            marginTop: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          {" "}
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "blue", fontWeight: "500", fontSize: "14px" }}
          >
            Register
          </span>
        </h5>
      </Box>
    </form>
  );
};

export default LoginForm;
