import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default class info extends Component {
  render() {
    return (
      <>
        <Header title="informação" />
        <Main nome="izaias" idade="27" querEstudar="programação" />
      </>
    );
  }
}
