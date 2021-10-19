import React from "react";
import ShowList from "./ShowList";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddLeave from "./AddLeave";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Route path="/" exact component={ShowList}></Route>
        <Route path="/addleave" component={AddLeave}></Route>
      </div>
    </>
  );
};

export default Landing;
