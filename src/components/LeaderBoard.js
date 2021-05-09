import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({users}) {
    return {

    };
}

class LeaderBoard extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(LeaderBoard);