import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import About from "./About";
import { changeFields, hideForm, sendForm, showForm } from "./actions";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Popup from "./Popup";
function App(props) {
  return (
    <div className="App">
      <Header {...props} />
      <Main {...props} />
      <Popup {...props} />
      <Footer />
      <About />
    </div>
  );
}

export default connect(
  (state) => state,
  (dispatch) =>
    bindActionCreators({ hideForm, changeFields, showForm, sendForm }, dispatch)
)(App);
