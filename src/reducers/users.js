import { RECEIVE_USERS, ADD_QUESTION_TO_AUTHED_USER ,ADD_QUESTION_ANSWER_TO_AUTHED_USER} from "../actions/actionTypes";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state, ...action.users
      }

    case ADD_QUESTION_TO_AUTHED_USER:
      const { authedUser, id } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(id)
        }
      };

      case ADD_QUESTION_ANSWER_TO_AUTHED_USER:

        return{
          ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer
          }
        }

        }

    default:
      return state
  }
}
