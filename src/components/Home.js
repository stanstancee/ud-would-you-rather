
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
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
            <Container fluid>
                <Row style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <Col onClick={() => { this.setState({ toggle: false }) }}>
                        <Button variant={this.state.toggle ? "outline-primary" : "primary"} size="lg" block>Unanswered</Button>
                    </Col>
                    <Col onClick={() => { this.setState({ toggle: true }) }}>
                        <Button variant={this.state.toggle ? "primary" : "outline-primary"} size="lg" block>Answered</Button>
                    </Col>
                </Row>
                {this.state.toggle ?
                    <Row>
                        {unanswered.map(question => <Questions question={question} key={question.id} />)}
                    </Row> :
                    <Row>
                        {answered.map(question => <Questions question={question} key={question.id} />)}
                    </Row>

                }

            </Container>






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