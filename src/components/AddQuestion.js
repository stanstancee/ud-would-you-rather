import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from "react-bootstrap"
import { handleAddQuestion } from '../actions/shared';

function mapStateToProps(state) {
    return {

    };
}

class AddQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: ""
    }

    setButtonAttr = () => {
        const { optionOne, optionTwo } = this.state;
        return optionOne && optionTwo

    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState(prev => {
            return {
                ...prev,
                [e.target.name]: value
            }
        })

    }
    handleSubmit = (e) => {
        const { dispatch } = this.props
        const { optionOne, optionTwo } = this.state

        e.preventDefault()
        dispatch(handleAddQuestion(optionOne, optionTwo))

    }

    render() {
        return (
            <div className="add-question">
                <h2>Add a Question</h2>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group >
                            <Form.Control type="text" placeholder="Be a musician" size="lg"
                                name="optionOne" value={this.state.optionOne} onChange={this.handleChange} />
                            <h1>OR</h1>
                            <Form.Control type="text" placeholder="Be an actor" size="lg"
                                name="optionTwo" value={this.state.optionTwo} onChange={this.handleChange} />
                        </Form.Group>
                        <Button variant={this.setButtonAttr() ? "info" : "outline-info"}
                            type="submit" size="lg" block disabled={!this.setButtonAttr()}>
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