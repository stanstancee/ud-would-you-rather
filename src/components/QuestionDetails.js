import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({questions,authedUser,users},{id}) {
    const question = questions[id]
    let options = question ? [...question.optionOne.votes,...question.optionTwo.votes]:null
    const votes = new Set(options)
    const answered = votes.has(authedUser)



    return {
        answered,
        question,
        user:question ? users[question.author] :null



    };
}




class QuestionDetails extends Component {

    render() {
        
        return (
            <div>
               hello
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(QuestionDetails);