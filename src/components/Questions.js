
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Image, Container, Button } from 'react-bootstrap'

function mapStateToProps({ users }) {
    return {
        users
    };
}

class Questions extends Component {

    render() {
        const { author, optionOne, optionTwo } = this.props.question
        const user = this.props.users[author]

        return (
            <Col sm={12} md={4} style={{ marginBottom: "20px" }}>
                <Container className="container-div" >
                    <div className="center">
                        <Image src={user.avatarURL} alt={author} roundedCircle fluid style={{ height: "100px", border: "4px solid #fff" }} />
                    </div>
                    <p>Would you rather</p>
                </Container>
                <Container className="container-div middle-div">

                    <p>{optionOne.text}</p>
                    <h1>OR</h1>
                    <p>{`...${optionTwo.text.slice(0, 10)}...`}</p>

                </Container>


                <Container className="bottom-div">
                    <h4>
                        <small className="text-muted">asked by    </small>
                        {user.name}
                    </h4>
                    {/*
                //TODO:  Redirect to question details page
                */}
                    <Button variant="info">View Poll</Button>
                </Container>


            </Col>


        );
    }
}
export default connect(
    mapStateToProps,
)(Questions);