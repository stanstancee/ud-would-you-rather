import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import Home from './Home';
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './AddQuestion'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <>
        <LoadingBar />
        <div>
          {this.props.loading === true ? <Login /> :<div> <Home /> <AddQuestion />  </div>}


        </div>
      </>

    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }

}
export default connect(mapStateToProps)(App);