import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from "react-bootstrap"
import avatar from "../icons/icons8-homer-simpson.svg"
import arrow_drop_down_black_24dp from "../icons/arrow_drop_down_black_24dp.svg"
import {setAuthedUser} from "../actions/authed_user"


function mapStateToProps({ users }) {
    const usersObject = Object.keys(users).map(id => users[id])

    return {
        usersObject: users ? usersObject : null

    };
}

class Login extends Component {

    state = {
        userName: "",
        open: false
    }
    getUserName = (e) => {
        this.setState({ userName: e.target.textContent, open: false })

    }
    toggleOpen = () => {
        this.setState((prev) => {
            return {
                open: !prev.open
            }
        })
    }



    handleAuth =()=>{
        const {dispatch,usersObject:users} =  this.props
        let id
         this.state.userName? id = this.state.userName: id = users[0].id
         dispatch(setAuthedUser(id))


    }





    render() {
        const { usersObject: users } = this.props
        // set the first user, user id as the default userName
        const id = users.length > 1 ? users[0].id : null

        return (
            <>
                <div className="login">
                    <div className="login-welcome container-div">
                        <h3>Welcome to the Would You Rather Poll Game</h3>
                        <p>Please Sign in to continue</p>
                    </div>
                    <div>
                        <Image src={avatar} alt="avatar" roundedCircle fluid style={{ height: "30vh", border: "4px solid #fff" }} />
                    </div>
                    <div className="container-div middle-div" >
                        <div className="bottom-div" style={{ width: "50vw" }}>
                            <p><span className="text-muted" style={{ padding: "1rem" }}>Sign In as</span> {this.state.userName ? this.state.userName : id} </p>
                            <Image onClick={this.toggleOpen} className="select" src={arrow_drop_down_black_24dp} alt="avatar" roundedCircle fluid style={{ height: "7vh", border: "4px solid #fff", float: "right" }} />

                        </div>
                        <div>
                            {this.state.open && users.map(user => {
                                return (
                                    <div key={user.id} user={user.id} className="select-user select" onClick={this.getUserName}>
                                        <Image src={user.avatarURL} alt={user.name} roundedCircle fluid style={{ height: "10vh", border: "4px solid #fff" }} />
                                        <p>{user.id}</p>

                                    </div>
                                )
                            })}
                        </div>


                    </div>

                    <div style={{ width: "50vw" }}>
                        <Button variant="success" size="lg" block onClick={this.handleAuth}>Continue</Button>
                    </div>
                </div>

            </>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);