import React from 'react';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
import Footer from './Footer';
import About from './About';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideForm, changeFields,showForm, sendForm} from './actions';
function App(props) {
  return (
    <div className="App">
     <Header {...props}/>
     <Main {...props}/>
     <Popup {...props}/>
     <Footer />
     <About />
    </div>
  );
}

export default connect((state)=>state,
                      (dispatch)=>bindActionCreators({hideForm, changeFields,showForm, sendForm},dispatch))(App);
