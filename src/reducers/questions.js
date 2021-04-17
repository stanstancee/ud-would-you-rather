import { RECEIVE_QUESTIONS } from "../actions/actionTypes";

export default function questions(state={}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state, ...action.questions
            }

        default:
           return state
    }
}