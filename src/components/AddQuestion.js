import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from "react-bootstrap"

function mapStateToProps(state) {
    return {

    };
}

class AddQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: ""
    }
    render() {
        return (
            <div className = "add-question">
                <h2>Add a Question</h2>
                <div>
                <Form>
                        <Form.Group controlId="optionOne">
                            <Form.Control type="email" placeholder="Be a musician" size="lg" />
                            <h1>OR</h1>
                            <Form.Control type="text" placeholder="Be an actor"  size="lg" />
                        </Form.Group>
                    <Button variant="primary" type="submit" bt>
                        Submit
                    </Button>
                </Form>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AddQuestion);