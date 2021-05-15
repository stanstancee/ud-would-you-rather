import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,  Button, Image} from "react-bootstrap"
import Unanswered from "./Unanswered"
import Answered from "./Answered"
import {handleAddQuestionAnswer} from '../actions/shared'
import { formatVotes } from '../utils/helpers';
import {Link} from "react-router-dom"
import Page404 from './Page404'



function mapStateToProps({ questions, authedUser, users },ownProps) {
    const id = ownProps.match.params.id
    const questionId = new Set(Object.keys(questions))
    const checkId = questionId.has(id)


    if(checkId){
        const question = questions[id]
        const checkUthedUserOption1 = question.optionOne.votes.includes(authedUser)
        const checkUthedUserOption2  = question.optionTwo.votes.includes(authedUser)
        const checkUthedUserVote = [checkUthedUserOption1,checkUthedUserOption2]
        const answered = checkUthedUserVote[0] || checkUthedUserVote[1]


        return {
            answered,
            question,
            user: users[question.author],
            votesObj:formatVotes(question),
            checkUthedUserVote,






        };

    }
    if(!checkId){
        return{
            checkId,
            id
        }
    }

}

class QuestionDetails extends Component {
    state = {
        option:""
    }

    handleClick = (e)=>{
        this.setState({option:e.currentTarget.id})

    }
    handleSubmit = ()=>{
       const { question:{id},dispatch} = this.props
       const {option} = this.state
       dispatch(handleAddQuestionAnswer(id,option))

    }

    render() {
        if(this.props.checkId === false){
            return <Page404 id={this.props.id} />

        }
        const {question, user, answered,question:{author},votesObj,checkUthedUserVote} = this.props
        const {optionOne:{text:text1},optionTwo:{text:text2}}  = question
        const textArray = [text1,text2]



        return (
            <div  style={{ marginBottom: "20px" }}>

            <Container className="container-div" >

                <div className="center">
                    <Image src={user.avatarURL} alt={author} roundedCircle fluid style={{ height: "100px", border: "4px solid #fff" }} />
                </div>
                <p>Would you rather</p>
            </Container>

            <Container className="container-div middle-div" size="lg">
                {answered? <Answered votes = {votesObj} checkVote ={checkUthedUserVote} text={textArray} />:
                <Unanswered option={this.state.option} question={question} handleClick = {this.handleClick}  />}

            </Container >
            <Container className="bottom-div">
                <h4>
                    <small className="text-muted">asked by    </small>
                    {user.name}
                </h4>

              { answered?<Link  to=""><Button size="lg" variant="info" block>Back to Home Page</Button></Link> :<Button variant="info" size="lg" block disabled = {this.state.option.length < 1} onClick={this.handleSubmit}>Answer</Button>}
            </Container>


        </div>

        );
    }
}

export default connect(
    mapStateToProps,
)(QuestionDetails);