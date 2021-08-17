import { RECEIVE_USERS, ADD_QUESTION_ANSWER_TO_AUTHED_USER ,ADD_QUESTION_TO_AUTHED_USER} from "../actions/actionTypes";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      const { users } = action
      return {
        ...state, ...users
      }
      case ADD_QUESTION_TO_AUTHED_USER:
                const {authedUser:authedU} = action
                console.log(authedU)
                return {
                  ...state,
                  [authedU]: {
                    ...state[authedU],
                    questions: state[authedU].questions.concat(action.id)
                  }
                };



    case ADD_QUESTION_ANSWER_TO_AUTHED_USER:
      const { authedUser, answer,id  } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [id]: answer
          }
        }

      }


    default:
      return state
  }
}
