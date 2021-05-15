import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,Image,Button } from "react-bootstrap"
import { setAuthedUser } from '../actions/authed_user';

function mapStateToProps({ authedUser,users }) {
    const isLogedIn = authedUser !== null
    return {
        authedUser,
        user:isLogedIn? users[authedUser] :"",
        isLogedIn
    };
}

class LogOut extends Component {


    render() {
        const {isLogedIn, user,dispatch} = this.props
        return (
                <>
                {isLogedIn &&
                    <Container className="log-out">
                        <div>
                        <Image src={user.avatarURL} alt={user.name} roundedCircle fluid style={{ height: "6vh", border: "4px solid #fff" }} />
                        <>Welcome {user.name}</>
                        </div>
                        <Button onClick={()=>{dispatch(setAuthedUser(null))}}  variant="info">Log Out</Button>
                    </Container>}
                 </>


        );
    }
}

export default connect(
    mapStateToProps,
)(LogOut);