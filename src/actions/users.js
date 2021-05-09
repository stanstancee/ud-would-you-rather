import {RECEIVE_USERS,ADD_QUESTION_TO_AUTHED_USER,ADD_QUESTION_ANSWER_TO_AUTHED_USER} from './actionTypes';

export const receiveUsers =(users)=>{
    return{
        type:RECEIVE_USERS,
        users
    }
}

export function addQuestionToAuthedUser(authedUser, id) {
    return {
      type: ADD_QUESTION_TO_AUTHED_USER,
      authedUser,
      id
    };
  }

export function addQuestionAnswerToAuthedUser(authedUser,id, answer){
  return {
    type:ADD_QUESTION_ANSWER_TO_AUTHED_USER,
    answer,
    id,
    authedUser

  }

}

