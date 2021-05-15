import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import QuestionDetails from './QuestionDetails'
import LeaderBoard from './LeaderBoard'
import AddQuestion from "./AddQuestion"
import Navigation from './Nav'
import Page404 from './Page404'




class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <Navigation />
          <>

              {this.props.notLogedIn ? <Login /> :
                <div>
                  <Switch>
                  
                    <Route path='/' exact component={Home} />
                    <Route path='/questions/:id' exact component={QuestionDetails} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/add' exact component={AddQuestion} />

                  <Route component={Page404} />
                  </Switch>
                </div>

              }

          </>
        </>
      </Router>

    );
  }
}
const mapStateToProps = ({ authedUser }) => {
  return {
    notLogedIn: authedUser === null
  }

}
export default connect(mapStateToProps)(App);