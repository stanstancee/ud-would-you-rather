import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBoardValues } from '../utils/helpers'
import { Table, Image } from "react-bootstrap"

function mapStateToProps({ users }) {
    const usersData = Object.values(users).sort((a, b) => getBoardValues(b).score - getBoardValues(a).score)
    return {
        usersData
    };
}


class LeaderBoard extends Component {
    render() {
        const { usersData } = this.props
        console.log(usersData)
        return (
            <div>
                <Table striped bordered hover variant="dark" fluid>
                    <thead>
                        <tr>
                            <th colSpan="2" >User</th>
                            <th>Answered Questions</th>
                            <th>Created Questions</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, index) => {
                            return (<tr key={index}>
                                <td colSpan="2">
                                    <div>
                                        <Image src={user.avatarURL} alt={user.name} roundedCircle fluid style={{ height: "10vh", border: "4px solid #fff" }} />
                                        <h4>{user.name}</h4>
                                    </div>
                                </td>
                                <td>{getBoardValues(user).answersLength} </td>
                                <td>{getBoardValues(user).questionsLength}</td>
                                <td>{getBoardValues(user).score}</td>
                            </tr>)
                        })}
                    </tbody>


                </Table>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(LeaderBoard);