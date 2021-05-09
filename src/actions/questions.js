import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from './actionTypes'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const addQuestion = question => {
    return {
        type: ADD_QUESTION,
        question
    }

}

export const addQuestionAnswer = ( authedUser, id,answer) => {
    return {
        type: ADD_QUESTION_ANSWER,
        answer,
        authedUser,
        id
    }
}





