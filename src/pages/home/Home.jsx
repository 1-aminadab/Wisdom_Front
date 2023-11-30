import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catagory from "./components/Catagory";
import About from "./components/About";
import Course from "./components/Course";
import Video from "./components/Video";
import State from "./components/State";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import TestNavbar from "./components/TestNavbar";
import Notify from "../../components/modals/Notify";
import {useDispatch, useSelector} from 'react-redux'
export default function HideAppBar(props) {
  const { notify} = useSelector((store)=> store.card)
  return (
    <div className="home">
      <TestNavbar />
      {/* <Header /> */}
      <Hero />
      <Catagory />
      <About />
      <Course />
      <Video />
      <State />
      <Blog />
      <Footer />
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#0003",
          display:`${notify ?"flex":"none"}`,
          alignItems:"center",
          justifyContent:"center",
          zIndex:"10000"
        }}
        className="differentCards"
      >
        <Notify state={notify}/>
      </div>
    </div>
  );
}
