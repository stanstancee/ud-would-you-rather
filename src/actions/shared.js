import { receiveQuestions, addQuestion, addQuestionAnswer } from './questions'
import { receiveUsers,addQuestionToAuthedUser,addQuestionAnswerToAuthedUser } from './users'
import {getInitialData,saveQuestion, saveQuestionAnswer} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'




export default function handleInitialData() {
    return dispatch => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}
export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();

      return saveQuestion({
        author: authedUser,
        optionOneText,
        optionTwoText
      }).then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToAuthedUser(authedUser, question.id));
      });
    };
  }

  export function handleAddQuestionAnswer( id, answer) {
    return (dispatch ,getState) => {
      const {authedUser} = getState()
        return saveQuestionAnswer({
            authedUser, qid:id, answer
        })
        .then(dispatch(addQuestionAnswer(authedUser,id,answer)))
        .then(dispatch(addQuestionAnswerToAuthedUser(authedUser,id,answer)))
    }

}