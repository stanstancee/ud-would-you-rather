
import React, { Component } from 'react'
import * as reactBootstrap from 'react-bootstrap';
import { connect } from 'react-redux';
import { getQuestions } from '../utils/helpers';
import Questions from "./Questions";



class Home extends Component {
    state = {
        toggle: false
    }


    render() {
        const { answered, unanswered } = this.props
        return (
            <reactBootstrap.Container fluid>
                <reactBootstrap.Row style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <reactBootstrap.Col onClick={() => { this.setState({ toggle: false }) }}>
                        <reactBootstrap.Button variant={this.state.toggle ? "outline-primary" : "primary"} size="lg" block>Unanswered</reactBootstrap.Button>
                    </reactBootstrap.Col>
                    <reactBootstrap.Col onClick={() => { this.setState({ toggle: true }) }}>
                        <reactBootstrap.Button variant={this.state.toggle ? "primary" : "outline-primary"} size="lg" block>Answered</reactBootstrap.Button>
                    </reactBootstrap.Col>
                </reactBootstrap.Row>
                {this.state.toggle ?
                    <reactBootstrap.Row>
                        {answered.map(question => <Questions question={question} key={question.id} />)}
                    </reactBootstrap.Row> :
                    <reactBootstrap.Row>
                        {unanswered.map(question => <Questions question={question} key={question.id} />)}
                    </reactBootstrap.Row>

                }

            </reactBootstrap.Container>






        );
    }
}


function mapStateToProps({ questions, authedUser }) {
    let questionsId = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        answered: getQuestions("answered", questionsId, questions, authedUser),
        unanswered: getQuestions("unanswered", questionsId, questions, authedUser)
    }
}
export default connect(mapStateToProps)(Home);