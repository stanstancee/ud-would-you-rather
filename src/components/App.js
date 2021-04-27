import React, { Component } from 'react';
import { connect } from 'react-redux';
import  handleInitialData  from '../actions/shared';
import Home from './Home';
import QuestionDetails from './QuestionDetails';
import LoadingBar from 'react-redux-loading'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <>
      <LoadingBar />
      <div>

        <Home />
        <QuestionDetails id="6ni6ok3ym7mf1p33lnez" />
        </div>
      </>

    );
  }
}

export default connect()(App) ;